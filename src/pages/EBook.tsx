import React, { memo, useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HeadProvider, Title, Meta } from "react-head";
import {
  Mail,
  User,
  Phone,
  Building,
  X,
  Book,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MainLayout from "../section/Mainlayout";
import Contact from "../section/Contact";
import BgImage from "../assets/Hero/bgImg.svg";
import EbookImage from "../assets/eBooks/Image2.jpg";
import Book1 from "../assets/eBooks/StartupAccelerator.jpg";
import Book2 from "../assets/eBooks/TAXExemption.jpg"
import FormImage from "../assets/Logo/Abtik-blue.png";
import seoData from "../data/seoData.json";
import isValidIndianNumber from "../utils/validation/isGenuineNumber";
import { addDownloadApplication } from "../api/eBookApi"; // Updated to a generic API for form submission
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  phone: string;
  pdfPath:any;

  companyname: string;
  bookName: string;
}

interface EbookData {
  id: string;
  title: string;
  description: string;
  image: string;
  pdfPath: string;
  downloadFileName: string;
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// interface CustomDropdownProps {
//   options: { value: string; label: string }[];
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
//   disabled: boolean;
//   error: boolean;
// }

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//   options,
//   value,
//   onChange,
//   placeholder,
//   disabled,
//   error,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const selectedLabel =
//     options.find((opt) => opt.value === value)?.label || placeholder;

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         type="button"
//         onClick={() => !disabled && setIsOpen(!isOpen)}
//         disabled={disabled}
//         className={`w-full pl-10 pr-4 py-2 border ${
//           error ? "border-red-500" : "border-gray-300"
//         } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px] flex justify-between items-center text-left ${
//           disabled ? "cursor-not-allowed opacity-50" : ""
//         }`}
//       >
//         <span>{selectedLabel}</span>
//         <svg
//           className={`h-4 w-4 text-gray-700 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
//           <ul className="py-2 px-2 max-h-48 overflow-y-auto flex flex-col gap-1.5">
//             {options.map((option) => (
//               <li
//                 key={option.value}
//                 onClick={() => {
//                   onChange(option.value);
//                   setIsOpen(false);
//                 }}
//                 className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm"
//               >
//                 {option.label}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

const showSwal = (options: any) => {
  return Swal.fire({
    ...options,
    customClass: { container: "swal-high-zindex" },
  });
};

const Ebook: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<EbookData | null>(null);
  const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // control,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",

      companyname: "",
      bookName: "",
    },
  });

  // const bookOptions = [
  //   { value: "business-financing-guide", label: "Business Financing Guide" },
  //   { value: "startup-growth-strategies", label: "Startup Growth Strategies" },
  //   { value: "loan-application-mastery", label: "Loan Application Mastery" },
  // ];

  const validationRules = {
    name: {
      required: "* Name is required",
      minLength: {
        value: 2,
        message: "* Name must be at least 2 characters long",
      },
      maxLength: { value: 50, message: "* Name cannot exceed 50 characters" },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Name can only contain letters and spaces",
      },
    },
    bookName: { required: "* Please select a book" },
    email: {
      required: "* Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    phone: {
      required: "* Phone number is required",
      maxLength: { value: 12, message: "* Phone number must be 10-12 digits" },
      validate: {
        validIndianNumber: (value: string) =>
          isValidIndianNumber(value) ||
          "Please enter a valid 10-12 digit phone number",
      },
    },
    companyname: { required: "* Company name is required" },
  };

  const ebooks: EbookData[] = [
    {
      id: "ebook1",
      title:
        "Turn Your Startup Dream into Reality with Our Startup Accelerator ",
      description:
        "Grow your startup idea into a successful business with mentorship, funding support, accelerator programs, and global growth opportunities.",
      image: Book1,
      pdfPath: "/StartupAccelerator.pdf",
      downloadFileName: "StartupAccelerator.pdf",
    },
        {
      id: "ebook2",
      title:
        "Startup India Tax Exemption Guide: Claim Your 80-IAC Benefits ",
      description:
        "The ultimate guide for Indian startup founders. Discover how to get DPIIT recognition and claim your Section 80-IAC tax benefits to save profits and accelerate your growth.",
      image: Book2,
      pdfPath: "/TaxExemptionEBook.pdf",
      downloadFileName: "TaxExemptionBook.pdf",
    },
   
  ];

  const faq: FAQ[] = [
    {
      question: "What are the benefits of downloading these eBooks?",
      answer:
        "Our eBooks provide in depth knowledge on business financing, CGTMSE schemes, and growth strategies, tailored for entrepreneurs and small business owners.",
    },
    {
      question: "How can I access the eBooks?",
      answer:
        "Simply fill out the form with your details, and you’ll be able to download the eBook instantly after submission.",
    },
    {
      question: "Are the eBooks free?",
      answer:
        "Yes, all our eBooks are completely free to download after providing your contact information.",
    },
  ];

  const benefitsData: Benefit[] = [
    {
      icon: Book,
      title: "Expert Insights",
      description:
        "Gain access to expert advice on business financing and growth strategies.",
    },
    {
      icon: CheckCircle,
      title: "Practical Tips",
      description:
        "Learn actionable steps to secure loans and scale your business effectively.",
    },
    {
      icon: FileText,
      title: "Comprehensive Guides",
      description:
        "Detailed guides to navigate CGTMSE schemes and loan applications.",
    },
  ];

  const resetAllStates = () => {
    reset();
    setIsFormOpen(false);
    setSelectedEbook(null);
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data)
      const apiData = {
        name: data.name,
        companyName: data.companyname,
        email: data.email,
        number: data.phone,

        bookName: data.bookName,
      };
      const res = await addDownloadApplication(apiData);
      if (res?.status === 201) {
        await showSwal({
          icon: "success",
          title: "Success!",
          text: "Your details have been submitted successfully.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
        navigate(`/files${data?.pdfPath}`)
        
        resetAllStates();
      } else {
        await showSwal({
          icon: "error",
          title: "Error",
          text:
            res?.data?.message || "Could not submit details. Please try again.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
      }
    } catch (error: any) {
      await showSwal({
        icon: "error",
        title: "Submission Error",
        text: error?.response?.data?.message || "An unexpected error occurred.",
        confirmButtonColor: "#052EAA",
        scrollbarPadding: false,
      });
    }
  };

  const openFormModal = (ebook: EbookData) => {
    setSelectedEbook(ebook);
    setValue("pdfPath",ebook?.pdfPath)
    setValue("bookName", ebook.title.toLowerCase().replace(/\s+/g, "-")); // Set default bookName based on clicked eBook
    setIsFormOpen(true);
  };

  const closeModal = () => {
    resetAllStates();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  const refEbooks = useRef(null);
  const isInViewEbooks = useInView(refEbooks, { once: true, amount: 0.4 });

  const refTouch = useRef(null);
  const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });

  const refBenefits = useRef(null);
  const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.4 });

  const refFAQ = useRef(null);
  const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });

  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .swal-high-zindex {
        z-index: 99999999999 !important;
      }
      .swal2-container.swal-high-zindex {
        z-index: 99999999999 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  return (
    <HeadProvider>
      <Title>
        {seoData?.eBooks?.title || "Download Our Free eBooks  Jorwin "}
      </Title>
      <Meta
        name="description"
        content={
          seoData?.eBooks?.description ||
          "Download our free eBooks to learn about business financing, CGTMSE schemes, startup growth, and loan applications for micro and small enterprises."
        }
      />
      <Meta
        name="keywords"
        content={
          seoData?.eBooks?.keyword ||
          "ebooks, business financing, CGTMSE, startup growth, loan applications, Jorwin "
        }
      />
      <Meta
        name="robots"
        content={seoData?.eBooks?.robots || "index, follow"}
      />
      <MainLayout>
        <motion.section
          ref={refHero}
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen lg:justify-end bg-center bg-cover px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 relative overflow-hidden"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 space-y-4 text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading font-1"
            >
              Download Our{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Free eBooks
              </span>{" "}
              on Business Growth
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl font-2 lg:max-w-none mx-auto lg:mx-0"
            >
              Unlock valuable insights on securing loans, understanding CGTMSE
              schemes, and growing your business with our comprehensive eBooks.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn 
                              text-sm sm:text-base md:text-lg
                              px-6 sm:px-8 md:px-10 lg:px-12
                              py-3 sm:py-3.5 md:py-4
                               transition-transform duration-300
                              shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          ref={refTouch}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8 bg-[#f7f7f7] py-16 px-7 md:px-14"
        >
          {/* <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[320px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            <h3 className="text-lg font-2 font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg"
                aria-label="Visit us at 123 Business Hub, New Delhi, India"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Manish Kumar
                  </p>
                  <p className="text-xs text-gray-600 font-2">
                    Head Of Finance Department
                  </p>
                </div>
              </a>
              <a
                href="tel:+917486952086"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg"
                aria-label="Call us at +917486952086"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Call Anytime
                  </p>
                  <p className="text-xs font-2 text-gray-600">
                    <a href="tel:+917486952086">+91 7486 952 086</a>
                  </p>
                </div>
              </a>
              <a
                href="mailto:manish.kumar@Jorwinservices.co.in"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg"
                aria-label="Email us at info@jorwin.co.in"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-2 text-gray-700 font-semibold">
                    Write Email
                  </p>
                  <p className="text-xs font-2 text-gray-600">
                    <a href="mailto:manish.kumar@Jorwinservices.co.in">
                      manish.kumar@Jorwinservices.co.in
                    </a>
                  </p>
                </div>
              </a>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex-grow grid grid-cols-1 lg:grid-cols-2 h-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-4 rounded-4xl"
          >
            <div className="flex flex-col justify-evenly p-4">
              <h2 className="sub-heading text-white font-1">Free eBooks</h2>
              <p className="font-3 text-white">
                Unlock expert insights on business financing and growth
                strategies with our free eBooks, designed for entrepreneurs and
                small business owners.
              </p>
            </div>
            <div className="p-2 bg-white rounded-4xl">
              <img
                src={EbookImage}
                className="rounded-3xl w-full h-64"
                loading="lazy"
                alt="eBook Preview"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          ref={refEbooks}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewEbooks ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 py-8 bg-[#f7f7f7]"
        >
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Our eBooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {ebooks.map((ebook) => (
              <motion.div
                key={ebook.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewEbooks ? { y: 0, opacity: 1 } : {}}
                onClick={() => openFormModal(ebook)}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 cursor-pointer rounded-4xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 duration-300 transition-all"
              >
                <img
                  src={ebook.image}
                  alt={`${ebook.title} Preview`}
                  className="w-full h-48 object-cover rounded-3xl mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-2 font-semibold text-gray-800 mb-2">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600 font-3 mb-4">
                  {ebook.description}
                </p>
                <button
                  onClick={() => openFormModal(ebook)}
                  className="custom-btn text-sm sm:text-base px-6 py-3 shadow-lg hover:shadow-xl"
                >
                  Download eBook
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={refBenefits}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Why Download Our eBooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-4xl transition-all duration-300 shadow-md text-center hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-2 font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 font-3">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={refFAQ}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8 md:py-16 space-y-6"
        >
          <h1 className="sub-heading bg-gradient-to-t font-2 text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
            Frequently Asked Questions
          </h1>
          <div className="px-6 md:px-24 space-y-4 font-3">
            {faq.map((data, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <h2
                  className={`p-2.5 px-4 cursor-pointer flex items-center justify-between text-base font-medium ${
                    isExpanded.isOpen && isExpanded.index === index
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                  onClick={() => toggleIsExpanded(index)}
                >
                  <span>{data.question}</span>
                  <button className="border-2 p-1 transition-all duration-300 hover:scale-105 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA]">
                    {isExpanded.isOpen && isExpanded.index === index ? (
                      <ArrowRight className="w-5 h-5" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5" />
                    )}
                  </button>
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded.isOpen && isExpanded.index === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                    {data.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={refContact}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewContact ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.section>

        <AnimatePresence mode="wait">
          {isFormOpen && selectedEbook && (
            <motion.div
              className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/60 md:p-4"
              style={{ zIndex: 9999999999 }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handleBackdropClick}
            >
              <motion.div
                className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[100vh] md:max-h-[90vh]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r text-white font-3 heading from-[#052EAA] to-[#3CA2E2] p-4 flex items-center justify-center rounded-t-lg">
                  Download {selectedEbook.title}
                </div>
                <div className="absolute right-3 top-4 z-20">
                  <X
                    className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:ring-2 ring-gray-200 hover:bg-gray-100"
                    onClick={closeModal}
                  />
                </div>
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                  <div className="md:w-1/2 w-full p-4 bg-gray-50 flex items-center justify-center">
                    <img
                      src={FormImage}
                      alt="Form Visual"
                      className="rounded-xl max-w-full md:h-full max-h-[200px]"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                    <div className="p-4 md:p-6">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 font-3"
                      >
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("name", validationRules.name)}
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.name
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px]`}
                              disabled={isSubmitting}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="companyname"
                            className="text-sm font-medium text-gray-700"
                          >
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register(
                                "companyname",
                                validationRules.companyname
                              )}
                              id="companyname"
                              type="text"
                              placeholder="Enter your company name"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.companyname
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px]`}
                              disabled={isSubmitting}
                            />
                            {errors.companyname && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.companyname.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("email", validationRules.email)}
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px]`}
                              disabled={isSubmitting}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                          >
                            Contact Number{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("phone", validationRules.phone)}
                              id="phone"
                              type="tel"
                              maxLength={12}
                              placeholder="Enter your phone number"
                              onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) e.preventDefault();
                              }}
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.phone
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px]`}
                              disabled={isSubmitting}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* <div className="flex flex-col gap-1">
                          <label
                            htmlFor="bookName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Book Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Book
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                              size={18}
                            />
                            <Controller
                              name="bookName"
                              control={control}
                              rules={validationRules.bookName}
                              render={({ field }) => (
                                <CustomDropdown
                                  options={bookOptions}
                                  value={field.value}
                                  onChange={field.onChange}
                                  placeholder="Select a Book"
                                  disabled={isSubmitting}
                                  error={!!errors.bookName}
                                />
                              )}
                            />
                            {errors.bookName && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.bookName.message}
                              </p>
                            )}
                          </div>
                        </div> */}
                        {/* <div className="flex flex-col gap-1">
                          <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                            <textarea
                              {...register('message')}
                              id="message"
                              placeholder="Enter your message"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] min-h-[100px] resize-vertical`}
                              disabled={isSubmitting}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                          </div>
                        </div> */}
                        <div className="flex flex-col md:flex-row w-full gap-4  pt-4 mb-12 md:mb-3">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="w-full md:w-1/2 font-3 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 py-3"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-1/2 font-3 disabled:opacity-50 disabled:cursor-not-allowed custom-btn py-3"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Submitting...
                              </div>
                            ) : (
                              "Submit & Download"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MainLayout>
    </HeadProvider>
  );
};

export default memo(Ebook);
