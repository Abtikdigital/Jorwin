import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { memo, useState, useRef, useEffect } from "react";
import { addOtpDetails, verifyOtp } from "../api/otpApis";
import isValidIndianNumber from "../utils/validation/isGenuineNumber";
import type { ChangeEvent, KeyboardEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  number: string;
  companyName: string;
  serviceType: string;
}

// Custom OTP Input Component
interface CustomOtpInputProps {
  numInputs: number;
  value: string;
  onChange: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement[]>;
}

const CustomOtpInput = ({ numInputs, value, onChange, inputRef }: CustomOtpInputProps) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRef && inputRef.current[0]) {
      inputRef.current[0].focus();
    } else if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...value.split("")];
    newOtp[index] = e.target.value;
    onChange(newOtp.join(""));

    if (e.target.value && index < numInputs - 1) {
      (inputRef?.current[index + 1] || inputsRef.current[index + 1]).focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      (inputRef?.current[index - 1] || inputsRef.current[index - 1]).focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, numInputs);
    onChange(pastedData);
  };

  return (
    <div className="flex justify-center gap-4" onPaste={handlePaste}>
      {Array(numInputs)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              if (el) {
                inputsRef.current[index] = el;
                if (inputRef) inputRef.current[index] = el;
              }
            }}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "3rem",
              height: "3rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #2178B5",
              backgroundColor: "white",
              textAlign: "center",
              outline: "none",
              transition: "all 0.15s ease",
            }}
          />
        ))}
    </div>
  );
};

// New Custom ShadCN-like Dropdown Component
const ShadcnDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  error,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-2" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`appearance-none bg-[#ECEFF4] rounded-lg w-full p-3 text-left focus:outline-2 transition-all duration-0 ${
          error
            ? "outline-red-500 border-red-500"
            : "outline-[#2178B5] hover:outline-2"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""} flex justify-between items-center`}
      >
        <span className="font-2">{selectedLabel}</span>
        <svg
          className={`fill-current h-4 w-4 text-gray-700 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 px-2 max-h-48 overflow-y-auto gap-1.5 p-1 flex flex-col">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-[#ECEFF4] hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Contact = (props: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpForm, setShowOtpFrom] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifyButtonClicked, setIsVerifyButtonClicked] = useState(false);
  const otpInputsRef = useRef<HTMLInputElement[]>([]);
  const [, setContactPayload] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      companyName: "",
      serviceType: "",
      number: "",
    },
  });

  // Helper function to clear all form states and token
  const resetAllStates = () => {
    reset();
    setOtp("");
    setShowOtpFrom(false);
    setContactPayload(null);
    setIsVerifyButtonClicked(false);
    localStorage.removeItem("otpToken");
  };

  // For Node.js Backend: Handles the initial form submission to get an OTP
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      let res = await addOtpDetails({ contactData: data });
      if (res?.status === 201) {
        if (res?.data?.token) {
          localStorage.setItem("otpToken", JSON.stringify(res.data.token));
        }

        setContactPayload(data);
        setShowOtpFrom(true);

        await Swal.fire({
          icon: "success",
          title: "OTP Sent!",
          text: res?.data?.message || "An OTP has been sent to your email address.",
          scrollbarPadding: false,
        }).then(() => {
          if (otpInputsRef.current[0]) {
            otpInputsRef.current[0].focus();
          }
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: res?.data?.message || "Could not send OTP. Please try again.",
          scrollbarPadding: false,
        });
        localStorage.removeItem("otpToken");
      }
    } catch (error: any) {
      await Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: error?.response?.data?.message || "An unexpected error occurred.",
        scrollbarPadding: false,
      });
      localStorage.removeItem("otpToken");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handles the OTP verification
  const handleOtpVerify = async () => {
    setIsVerifyButtonClicked(true); // Disable button on click
    if (otp.length !== 4) {
      await Swal.fire({
        icon: "warning",
        title: "Invalid OTP",
        text: "Please enter a valid 4-digit OTP.",
        scrollbarPadding: false,
      });
      setIsVerifyButtonClicked(false); // Re-enable button
      return;
    }

    const token = localStorage.getItem("otpToken");
    if (!token) {
      await Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "Your session has expired. Please start over.",
        scrollbarPadding: false,
      });
      resetAllStates();
      return;
    }

    setIsSubmitting(true);
    try {
      const verificationData = {
        enteredOtp: otp,
        token: JSON.parse(token),
      };

      let res = await verifyOtp(verificationData);

      if (res?.status === 201) {
        await Swal.fire({
          icon: "success",
          title: "Thank You For Contacting Us!",
          text: res?.data?.message || "Your details have been verified successfully.",
          scrollbarPadding: false,
        });

        resetAllStates();
      } else {
        await Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: res?.data?.message || "The OTP you entered is incorrect. Please try again.",
          scrollbarPadding: false,
        });
        setOtp("");
        setIsVerifyButtonClicked(false); // Re-enable button
      }
    } catch (error: any) {
      if (error?.response?.data?.message === "Invalid Token") {
        await Swal.fire({
          icon: "error",
          title: "Session Expired",
          text: "Your session has expired. Please start over.",
          scrollbarPadding: false,
        });
        resetAllStates();
      } else {
        await Swal.fire({
          icon: "error",
          title: "Verification Error",
          text: error?.response?.data?.message || "An error occurred during verification.",
          scrollbarPadding: false,
        });
        setOtp("");
        setIsVerifyButtonClicked(false); // Re-enable button
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup function to clear token when component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem("otpToken");
    };
  }, []);

  // Input validation rules
  const validationRules = {
    name: {
      required: "* Name is required",
      minLength: {
        value: 2,
        message: "* Name must be at least 2 characters long",
      },
      maxLength: {
        value: 50,
        message: "* Name cannot exceed 50 characters",
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Name can only contain letters and spaces",
      },
    },
    serviceType: {
      required: "* Please select a service",
    },
    email: {
      required: "* Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    number: {
      required: "* Number is required",
      maxLength: {
        value: 10,
        message: "* Phone number must be 10 digits",
      },
      validate: {
        validIndianNumber: (value: string) => {
          const isValid = isValidIndianNumber(String(value));
          return isValid || "Please enter a valid 10-digit Indian mobile number";
        },
      },
    },
    companyName: {
      required: "* Company name is required",
    },
  };

  // Service options
  const serviceOptions = [
    { value: "funding-solution", label: "Funding Solution" },
    { value: "Trademark-ip", label: "Trademark Ip" },
    { value: "certificate-licence", label: "Certificate & Licence" },
    { value: "tax-compliance", label: "Tax Compliance" },
    { value: "business-registration", label: "business-registration" },
    { value: "other", label: "other" },
  ];

  return (
    <section className="px-7 md:px-14 py-6 md:py-16 bg-[#f7f7f7] space-y-6">
      <div className="flex gap-6 lg:space-x-6 justify-center items-center w-full">
        <div className="space-y-6 flex flex-col justify-center w-2xl">
          <h2 className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent font-1">
            {showOtpForm ? "Verify Your Identity" : "Contact Us"}
          </h2>

          {!showOtpForm && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 font-3"
            >
              {/* Name Input */}
              <div className="flex flex-col">
                <input
                  {...register("name", validationRules.name)}
                  id="fullName"
                  placeholder="Enter Your Full Name"
                  className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-2 ${
                    errors.name
                      ? "outline-red-500 border-red-500"
                      : "outline-[#2178B5] hover:outline-2"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Company Name Input */}
              <div className="flex flex-col">
                <input
                  {...register("companyName", validationRules.companyName)}
                  id="companyName"
                  placeholder="Enter Your Company Name"
                  className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-3 ${
                    errors.companyName
                      ? "outline-red-500 border-red-500"
                      : "outline-[#2178B5] hover:outline-2"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.companyName && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.companyName.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <input
                  {...register("email", validationRules.email)}
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-2 ${
                    errors.email
                      ? "outline-red-500 border-red-500"
                      : "outline-[#2178B5] hover:outline-2"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Number Input */}
              <div className="flex flex-col">
                <input
                  {...register("number", validationRules.number)}
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Your Number"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (!/[0-9]/.test(e.key)) e.preventDefault();
                  }}
                  className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-2 ${
                    errors.number
                      ? "outline-red-500 border-red-500"
                      : "outline-[#2178B5] hover:outline-2"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.number && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.number.message}
                  </span>
                )}
              </div>

              {/* Service Type Dropdown */}
              <div className="flex flex-col">
                <Controller
                  name="serviceType"
                  control={control}
                  rules={validationRules.serviceType}
                  render={({ field }) => (
                    <ShadcnDropdown
                      options={serviceOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select a Service"
                      disabled={isSubmitting}
                      error={!!errors.serviceType}
                    />
                  )}
                />
                {errors.serviceType && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.serviceType.message}
                  </span>
                )}
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <textarea
                  {...register("message")}
                  placeholder="Enter Your Message"
                  className={`bg-[#ECEFF4] rounded-lg w-full p-3 overflow-auto h-24 max-h-32 resize-none transition-all duration-0 font-3 ${
                    errors.message
                      ? "outline-red-500 border-red-500"
                      : "outline-[#2178B5] hover:outline-2"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`custom-btn w-full text-center font-2 !py-3 transition-shadow duration-300 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:transform"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}

          {showOtpForm && (
            <div className="flex flex-col items-center gap-6 p-4">
              <p className="text-sm text-gray-600 text-center">
                Please enter the 4-digit OTP sent to your email.
              </p>

              <CustomOtpInput numInputs={4} value={otp} onChange={setOtp} inputRef={otpInputsRef} />

              <div className="flex justify-center w-full mt-4">
                <button
                  onClick={handleOtpVerify}
                  disabled={isSubmitting || isVerifyButtonClicked}
                  className={`custom-btn w-full max-w-xs text-center font-2 !py-3 transition-shadow duration-300 ${
                    isSubmitting || isVerifyButtonClicked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:transform"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify & Submit"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {props?.isMapVisible && (
        <div className="space-y-6 md:py-10">
          <h2 className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent font-2">
            Our Location
          </h2>

          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.404567325663!2d72.51250407436834!3d23.04562491546931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1755069113485!5m2!1sen!2sin"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
                borderRadius: "30px",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Contact);