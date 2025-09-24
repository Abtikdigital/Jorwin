import { memo, useState } from "react";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Career/bgImg.svg";
import Image1 from "../assets/Career/Career.jpg";
import Contact from "../section/Contact";
import Logo from "../assets/Logo/Newlogo.jpg";
// import CareerImage from "../assets/Hero/bgImg.svg";
import { addApplication } from "../api/careerApi";
import {
  MapPin,
  Clock,
  ArrowRight,
  X,
  User,
  Mail,
  Phone,
  File,
  Briefcase,
  Calendar,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
// import axios from "axios";
import Swal from "sweetalert2";

const Career = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  // Only essential states
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobOpenings = [
    {
      title: "BDE",
      position: "Business Development Executive",
      description:
        "We’re hiring a BDE to connect with leads, pitch services, and support sales growth through smart communication and follow ups.",
      vacancy: 30,
      experience: "Fresher",
      location: "Ahmedabad, India",
      type: "Full time",
      skills: ["Cold Calling", "CRM", " Presentation Skills", " Client Follow up", " Communication"],
    },
    {
      title: "BDM",
      position: "Business Development Manager",
      description:
        "We are looking for a results driven BDM to lead client acquisition and drive business growth through strategic partnerships and high value deals.",
      vacancy: 7,
      experience: "1to2 years",
      location: "Ahmedabad, India",
      type: "Full time",
      skills: ["Sales Strategy", "Negotiation", "CRM Tools", "Lead Generation"],
    },
    {
      title: "HR Executive",
      position: "HR Executive",
      description:
        "Kickstart your career in HR! You'll manage hiring, onboarding, and internal coordination to support a growing team.",
      vacancy: 2,
      experience: "Fresher",
      location: "Ahmedabad, India",
      type: "Full time",
      skills: ["Recruitment","Coordination","MS Office", " Coordination", " Time Management"],
    },
  ];

  // Form setup with all configurations

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      jobTitle: "",
      fullName: "",
      email: "",
      contactNumber: "",
      experience: "",
      currentCtc: "",
      expectedCtc: "",
      noticePeriod: "",
      resume: null,
    },
    mode: "onChange",
  });

  // Watch resume file for display
  const watchedResume: any = watch("resume");

  const formVariants: any = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.3 },
    },
    exit: { opacity: 0, y: 80, transition: { duration: 0.1 } },
  };

  const handleApplyNow = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);

    // Reset form and set job-specific values
    reset({
      jobTitle: job.title,
      fullName: "",
      email: "",
      contactNumber: "",
      experience: "",
      currentCtc: "",
      expectedCtc: "",
      noticePeriod: "",
      resume: null,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJob(null);
    reset();
    clearErrors();
  };

  // Vercel apis
  // const onSubmit = async (data: any) => {
  //   try {
  //     clearErrors();

  //     // Validate file
  //     if (!data.resume || !data.resume[0]) {
  //       setError("resume", {
  //         type: "required",
  //         message: "Resume is required",
  //       });
  //       return;
  //     }

  //     const file = data.resume[0];

  //     // File size validation (3MB)
  //     if (file.size > 3 * 1024 * 1024) {
  //       setError("resume", {
  //         type: "fileSize",
  //         message: "File size must be less than 3MB",
  //       });
  //       return;
  //     }

  //     // File type validation
  //     const allowedTypes = [
  //       "application/pdf",
  //       "application/msword",
  //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //     ];

  //     if (!allowedTypes.includes(file.type)) {
  //       setError("resume", {
  //         type: "fileType",
  //         message: "Only PDF, DOC, DOCX files are allowed",
  //       });
  //       return;
  //     }

  //     // Create FormData
  //     const formData = new FormData();

  //     // Append form fields
  //     formData.append("jobTitle", data.jobTitle);
  //     formData.append("fullName", data.fullName);
  //     formData.append("email", data.email);
  //     formData.append("contactNumber", data.contactNumber);
  //     formData.append("experience", data.experience);
  //     formData.append("expectedCtc", data.expectedCtc);
  //     formData.append("currentCtc", data.currentCtc);
  //     formData.append("noticePeriod", data.noticePeriod);
  //     formData.append("resume", file);

  //     // Submit to API (removed .js extension)
  //     const response = await axios.post("/api/careerApi", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       timeout: 30000,
  //     });

  //     // Handle success response
  //     if (response.status === 201 && response.data.isSuccess) {
  //       await Swal.fire({
  //         icon: "success",
  //         title: "Application Submitted!",
  //         text: response.data.message || "Thank you for applying! We will review your application and get back to you soon.",
  //         confirmButtonText: "Great!",
  //         confirmButtonColor: "#052EAA",
  //         allowOutsideClick: false,
  //         allowEscapeKey: false,
  //       });
  //       closeModal();
  //     } else {
  //       throw new Error(
  //         response.data.message || "Error while submitting application"
  //       );
  //     }
  //   } catch (error: any) {
  //     console.error("Submission error:", error);
  //     console.error("Error response:", error.response?.data);

  //     const errorMessage =
  //       error.response?.data?.message ||
  //       error.response?.data?.error ||
  //       "Error while submitting application. Please try again.";

  //     await Swal.fire({
  //       icon: "error",
  //       title: "Submission Failed",
  //       text: errorMessage,
  //       confirmButtonText: "Try Again",
  //       confirmButtonColor: "#dc2626",
  //       allowOutsideClick: true,
  //       allowEscapeKey: true,
  //     });
  //   } finally {
  //     closeModal()
  //   }
  // };

  // Node js Api
  const onSubmit = async (data: any) => {
    try {
      clearErrors();

      // Validate file
      if (!data.resume || !data.resume[0]) {
        setError("resume", {
          type: "required",
          message: "Resume is required",
        });
        return;
      }

      const file = data.resume[0];

      // File size validation (3MB)
      if (file.size > 3 * 1024 * 1024) {
        setError("resume", {
          type: "fileSize",
          message: "File size must be less than 3MB",
        });
        return;
      }

      // File type validation
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setError("resume", {
          type: "fileType",
          message: "Only PDF, DOC, DOCX files are allowed",
        });
        return;
      }

      // Create FormData
      const formData = new FormData();

      // Append form fields
      formData.append("jobTitle", data.jobTitle);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("contactNumber", data.contactNumber);
      formData.append("experience", data.experience);
      formData.append("expectedCtc", data.expectedCtc);
      formData.append("currentCtc", data.currentCtc);
      formData.append("noticePeriod", data.noticePeriod);
      formData.append("resume", file);

      // Submit to API (removed .js extension)
      const response = await addApplication(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000

      })


      // Handle success response
      if (response.status === 201) {
        closeModal();
        await Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: response.data.message || "Thank you for applying! We will review your application and get back to you soon.",
          confirmButtonText: "Great!",
          confirmButtonColor: "#052EAA",
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      } else {
        closeModal()
        throw new Error(
          response.data.message || "Error while submitting application"
        );
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      console.error("Error response:", error.response?.data);

      closeModal()
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error while submitting application. Please try again.";

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage,
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
        allowOutsideClick: true,
        allowEscapeKey: true,
      });
    } finally {
      reset()
      closeModal()
    }
  };


  // Animation refs - using useInView hook efficiently
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.4 });

  const refCareerOpp = useRef(null);
  const isInViewCareerOpp = useInView(refCareerOpp, {
    once: true,
    amount: 0.4,
  });

  const refJobOpenings = useRef(null);
  const isInViewJobOpenings = useInView(refJobOpenings, {
    once: true,
    amount: 0.4,
  });

  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  // Simplified delay calculation
  const getDelay = (index: number, cols: number) =>
    0.5 + Math.floor(index / cols) * 0.2;

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.careerPage?.title}</Title>
        <Meta name="description" content={seoData?.careerPage?.description} />
        <Meta name="keywords" content={seoData?.careerPage?.keyword} />
        <Meta name="robots" content={seoData?.careerPage?.robots} />
      </HeadProvider>

      <Mainlayout>
        {/* Hero Section */}
        <section
          ref={refHero}
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen 
                    lg:justify-end lg:items-center bg-center bg-cover 
                    px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14
                    relative overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
                        space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                        text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading font-1"

            >
              Your One Stop{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Solution
              </span>{" "}
              for all Business Needs
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"

            >
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Jorwin
              Startup Advisor Private Limited
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
                Schedule a call
              </button>
            </div>
          </motion.div>
        </section>

        {/* Career Opportunity Section */}
        <motion.section
          ref={refCareerOpp}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewCareerOpp ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-12 gap-8 items-center"
        >
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewCareerOpp ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index, 2) }}
              className={index === 0 ? "space-y-6" : "grid grid-cols-1 gap-6"}
            >
              {index === 0 ? (
                <>
                  <h2
                    className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA] font-2"

                  >
                    Career Opportunities at <br />
                    Jorwin 
                  </h2>
                  <p
                    className="paragraph text-center md:text-left font-3"

                  >
                    Kickstart your growth with jorwin , where creativity runs new opportunities in business. We create exciting career opportunities for growth, learning and meaningful effects. In Jorwin, we value talent, encourage new ideas, and provide a supportive, collaborative workplace where your skills and ambitions can actually thrive.
                  </p>
                </>
              ) : (
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    loading="lazy"
                    src={Image1}
                    className="w-full h-full object-cover"
                    alt="Career opportunities"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Job Openings */}
        <motion.section
          ref={refJobOpenings}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewJobOpenings ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 py-12 bg-gradient-to-b from-[#f7f7f7] to-white font-3"
        >
          <div>
            <h2
              className="sub-heading bg-clip-text text-center bg-gradient-to-t text-transparent from-[#052EAA] to-[#3CA2E2] mb-12 font-1"

            >
              Job Openings At Jorwin
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
              {jobOpenings?.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewJobOpenings ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: getDelay(index, 3) }}
                  className="bg-white border-1 hover:border-gray-300 cursor-pointer border-gray-200 rounded-4xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Job Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-semibold text-[#3CA2E2] bg-blue-50 px-3 py-1 rounded-full font-2"

                      >
                        {job.position}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {job.vacancy}{" "}
                        {job.vacancy === 1 ? "Opening" : "Openings"}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-800 group-hover:text-[#052EAA] transition-colors font-2"

                    >
                      {job.title}
                    </h3>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#3CA2E2]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-[#3CA2E2]" />
                      <span>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-xs bg-blue-50 text-[#3CA2E2] px-2 py-1 rounded-full">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyNow(job)}
                    className="custom-btn flex justify-center items-center gap-1 !py-3 w-full font-3"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Career Application Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/60 md:p-4"
              style={{ zIndex: 9999999999 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
            >
              <motion.div
                className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[100vh] md:max-h-[90vh]"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Header with Logo */}
                <div className="bg-gradient-to-r text-white  font-3 heading from-[#052EAA] to-[#3CA2E2] p-4 flex items-center justify-center w-full rounded-t-lg flex-shrink-0">
                  Career
                </div>

                {/* Close Button */}
                <div className="absolute right-3 top-4 z-20">
                  <X
                    className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:ring-2 ring-gray-200 hover:bg-gray-100 shadow-sm transition-colors"
                    onClick={closeModal}
                  />
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                  {/* Left Side: Image */}
                  <div className="md:w-1/2 w-full p-4 bg-gray-50 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={Logo}
                      alt="Career Visual"
                      className="rounded-xl max-w-full h-48 md:h-full max-h-[200px] md:max-h-[200px] md:max-w-[200px]"
                    />
                  </div>

                  {/* Right Side: Form */}
                  <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                    <div className="p-4 md:p-6">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                      >
                        {/* Job Title (Read-only) */}
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                            <Briefcase size={18} className="text-gray-400" />
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={selectedJob?.title || ""}
                            disabled
                            className="w-full pl-3 pr-4 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 text-sm h-[38px]"
                          />
                          {/* Hidden field for form data */}
                          <input type="hidden" {...register("jobTitle")} />
                        </div>

                        {/* Full Name */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="fullName"
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
                              {...register("fullName", {
                                required: "Full name is required",
                                minLength: {
                                  value: 2,
                                  message: "Name must be at least 2 characters",
                                },
                                pattern: {
                                  value: /^[a-zA-Z\s]+$/,
                                  message:
                                    "Name should contain only letters and spaces",
                                },
                              })}
                              id="fullName"
                              type="text"
                              placeholder="Enter your full name"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.fullName
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        {/* Email */}
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
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address",
                                },
                              })}
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.email
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="contactNumber"
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
                              {...register("contactNumber", {
                                required: "Contact number is required",
                                pattern: {
                                  value: /^[0-9]{10,15}$/,
                                  message:
                                    "Contact number must be 10-15 digits",
                                },
                              })}
                              id="contactNumber"
                              type="tel"
                              placeholder="Enter your contact number"
                              onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) e.preventDefault();
                              }}
                              className={`w-full pl-10 pr-4 py-2 border ${errors.contactNumber
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.contactNumber && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.contactNumber.message}
                            </p>
                          )}
                        </div>

                        {/* Experience */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="experience"
                            className="text-sm font-medium text-gray-700"
                          >
                            Experience <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Calendar
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              {...register("experience", {
                                required: "Experience is required",
                              })}
                              id="experience"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.experience
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            >
                              <option value="">Select experience</option>
                              <option value="Fresher">Fresher</option>
                              <option value="1-2 years">1to2 years</option>
                              <option value="2-4 years">2to4 years</option>
                              <option value="3-5 years">3to5 years</option>
                              <option value="5+ years">5+ years</option>
                            </select>
                          </div>
                          {errors.experience && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.experience.message}
                            </p>
                          )}
                        </div>

                        {/* Current CTC */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="currentCtc"
                            className="text-sm font-medium text-gray-700"
                          >
                            Current CTC (₹){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("currentCtc", {
                                required: "Current CTC is required",
                                min: {
                                  value: 0,
                                  message: "CTC must be positive",
                                },
                              })}
                              id="currentCtc"
                              type="number"
                              placeholder="Enter current CTC"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.currentCtc
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.currentCtc && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.currentCtc.message}
                            </p>
                          )}
                        </div>

                        {/* Expected CTC */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="expectedCtc"
                            className="text-sm font-medium text-gray-700"
                          >
                            Expected CTC (₹){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("expectedCtc", {
                                required: "Expected CTC is required",
                                min: {
                                  value: 0,
                                  message: "CTC must be positive",
                                },
                              })}
                              id="expectedCtc"
                              type="number"
                              placeholder="Enter expected CTC"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.expectedCtc
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.expectedCtc && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.expectedCtc.message}
                            </p>
                          )}
                        </div>

                        {/* Notice Period */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="noticePeriod"
                            className="text-sm font-medium text-gray-700"
                          >
                            Notice Period{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Clock
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              {...register("noticePeriod", {
                                required: "Notice period is required",
                              })}
                              id="noticePeriod"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.noticePeriod
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            >
                              <option value="">Select notice period</option>
                              <option value="Immediate">Immediate</option>
                              <option value="15 Days">15 Days</option>
                              <option value="30 Days">30 Days</option>
                              <option value="60 Days">60 Days</option>
                              <option value="90 Days">90 Days</option>
                            </select>
                          </div>
                          {errors.noticePeriod && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.noticePeriod.message}
                            </p>
                          )}
                        </div>

                        {/* Upload Resume */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="resume"
                            className="text-sm font-medium text-gray-700"
                          >
                            Upload Resume{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <File
                              className="absolute left-3 top-3 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("resume", {
                                required: "Resume is required",
                              })}
                              id="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.resume
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent transition-all duration-200`}
                            />
                          </div>
                          {watchedResume && watchedResume[0] && (
                            <p className="text-xs text-gray-600 mt-1">
                              Selected: {watchedResume[0].name} (
                              {(watchedResume[0].size / 1024 / 1024).toFixed(2)}{" "}
                              MB)
                            </p>
                          )}
                          {errors.resume && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.resume.message}
                            </p>
                          )}
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col md:flex-row w-full gap-4 pt-4">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="w-full md:w-1/2 h-11 md:h-10 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                            disabled={isSubmitting}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center md:w-1/2 h-11 md:h-10 bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white font-semibold rounded-full cursor-pointer hover:from-[#041f7a] hover:to-[#2d8bc7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#052EAA] transition-all duration-200"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Submitting...
                              </div>
                            ) : (
                              "Submit Application"
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

        {/* Contact Section */}
        <motion.section
          ref={refContact}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewContact ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.section>
      </Mainlayout>
    </>
  );
};

export default memo(Career);
