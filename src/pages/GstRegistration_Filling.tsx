import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Gst/Image1.jpeg";
import {
  Mail,
  User,
  Phone,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  FileText,
  IndianRupee ,
  TrendingUp,
  Users,
  Shield,
  Award,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const GSTRegistrationFiling = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });

  const faq = [
    {
      question: "1. What is GST registration?",
      answer:
        "GST registration is a mandatory process for businesses exceeding specified annual turnover, or selling via e-commerce, providing them with a GSTIN and enabling legal tax collection and input credit.",
    },
    {
      question: "2. Who needs GST registration in 2025?",
      answer:
        "Businesses with ₹40 lakh+ turnover (goods, most states), ₹20 lakh+ (services, most states), e-commerce sellers, or those supplying interstate must register. Voluntary registration is allowed for smaller businesses.",
    },
    {
      question: "3. How do I register for GST?",
      answer:
        "Register online at gst.gov.in: fill Part A (basic info), verify via OTP, fill Part B (business/document upload), choose Aadhaar authentication, and await GSTIN approval now issued within 7-30 working days depending on verification.",
    },
    {
      question: "4. Which documents are needed?",
      answer:
        "PAN, Aadhaar, proof of business constitution, address proof (including rent agreement/utility bill), bank statement/cancelled cheque, and photo of key persons.",
    },
    {
      question: "5. How do I file GST returns in 2025?",
      answer:
        "Log in to the GST portal, select the relevant form (e.g., GSTR-1, GSTR-3B), verify auto-populated details, add information if needed, submit and pay any liabilities. From July 2025, GSTR 3B will be auto-locked after submission and all GST returns must be filed within 3 years from the due date.",
    },
    {
      question: "6. What are the benefits of GST registration?",
      answer:
        "Legally compliant business, claim ITC, expanded market, e-commerce eligibility, government tenders, and improved business credibility.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Hooks & animation logic
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  const refTouch = useRef(null);
  const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });
  const [touchCols, setTouchCols] = useState(1);
  useEffect(() => {
    const updateCols = () => setTouchCols(window.innerWidth >= 768 ? 2 : 1);
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getTouchDelay = (index: number) => {
    const row = Math.floor(index / touchCols);
    return 0.5 + row * 0.5;
  };

  const refAbout = useRef(null);
  const isInViewAbout = useInView(refAbout, { once: true, amount: 0.1 });

  const refEligibility = useRef(null);
  const isInViewEligibility = useInView(refEligibility, {
    once: true,
    amount: 0.1,
  });

  const refProcess = useRef(null);
  const isInViewProcess = useInView(refProcess, { once: true, amount: 0.1 });
  const [processCols, setProcessCols] = useState(1);
  useEffect(() => {
    const updateCols = () => setProcessCols(window.innerWidth >= 768 ? 3 : 1);
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getProcessDelay = (index: number) => {
    const row = Math.floor(index / processCols);
    return 0.5 + row * 0.5;
  };

  const refBenefits = useRef(null);
  const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });
  const [benefitsCols, setBenefitsCols] = useState(1);
  useEffect(() => {
    const updateCols = () => setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getBenefitsDelay = (index: number) => {
    const row = Math.floor(index / benefitsCols);
    return 0.5 + row * 0.5;
  };

  const refFAQ = useRef(null);
  const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.1 });
  const getFaqDelay = (index: number) => {
    const row = Math.floor(index / 1);
    return 0.2 + row * 0.1;
  };

  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.1 });

  // --- Process Steps ---
  const processData = [
    {
      icon: FileText,
      title: "Document Preparation & Application",
      description:
        "We help gather and organize all documents, fill out GST REG-01 accurately, and advise on the latest Aadhaar authentication procedures for the fastest approval.",
    },
    {
      icon: Shield,
      title: "Portal Filing & Verification",
      description:
        "Submit your registration, respond to officer queries, and track status our team assists in clearing any issues or physical verification requests for quick GSTIN grant.",
    },
    {
      icon: Award,
      title: "Return Filing & Compliance",
      description:
        "Our experts file your monthly/quarterly GST returns, reconcile sales/purchase data, and ensure on time, error free filing (GSTR-1, 3B, etc.), in line with the new filing and locking norms effective July 2025.",
    },
  ];

  // --- Benefits Cards ---
  const benefitsData = [
    {
      icon: TrendingUp,
      title: "Operate Legally Nationwide",
      description:
        "GSTIN enables business expansion anywhere in India, access to supply chains, and eligibility for government contracts.",
    },
    {
      icon: IndianRupee ,
      title: "Input Tax Credit & Cost Savings",
      description:
        "Save money by claiming set off on GST paid for purchases, boosting cash flow and profitability.",
    },
    {
      icon: Award,
      title: "Business Credibility & Tenders",
      description:
        "GST registered businesses are trusted for B2B sales, supplier agreements, and are often required for government/private tenders.",
    },
    {
      icon: Users,
      title: "E-Commerce Eligibility",
      description:
        "Mandatory to sell on Amazon, Flipkart, Meesho, or any online marketplace as a business.",
    },
    {
      icon: Shield,
      title: "Easy Renewals and Return Filing",
      description:
        "We ensure you never miss a deadline monthly/quarterly returns are filed accurately to avoid notices and preserve ITC eligibility.",
    },
  ];

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.gstRegistration_fillingService?.title}</Title>
        <Meta
          name="description"
          content={seoData?.gstRegistration_fillingService?.description}
        />
        <Meta
          name="keywords"
          content={seoData?.gstRegistration_fillingService?.keyword}
        />
        <Meta
          name="robots"
          content={seoData?.gstRegistration_fillingService?.robots}
        />
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
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl font-1 md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white lg:text-inherit tracking-wide main-heading"

            >
              Get GST Registration & Filing Done{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                100% Compliant
              </span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

            >
              Register your business for GST and stay compliant with all latest
              return filing rules and deadlines. Jorwin provides complete
              start to finish GST support for your growth.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4  transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Start GST Registration
              </button>
            </div>
          </motion.div>
        </section>

        {/* Get In Touch Section */}
        <motion.section
          ref={refTouch}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 bg-[#f7f7f7] py-16 px-7 md:px-14"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getTouchDelay(0) }}
            className="w-full md:w-[320px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <h3
              className="text-lg sm:text-xl font-2 font-semibold text-gray-800 mb-4"

            >
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Visit us at 123 Business Hub, New Delhi, India"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-3 text-gray-700 font-semibold ">
                    Heer Songhela
                  </p>
                  <p className="text-xs font-3 text-gray-600">
                    Head Of Finance Department
                    <br />
                  </p>
                </div>
              </a>
              <a
                href="tel:+91 9898 043 284"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Call us at +91 98765 43210"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-3 text-gray-700 font-semibold">
                    Call Anytime
                  </p>
                  <p className="text-xs font-3 text-gray-600">
                    <a href="tel:+9898043284">+91 9898 043 284</a>
                  </p>
                </div>
              </a>
              <a
                href="heer@Jorwinservices.co.in"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Email us at info@Jorwin.com"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-3 text-gray-700 font-semibold">
                    Write Email
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    <a href="mailto:heer@Jorwinservices.co.in">
                      heer@Jorwinservices.co.in
                    </a>
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getTouchDelay(1) }}
            className="flex-grow grid md:grid-cols-2 h-full bg-gradient-to-r  from-[#3CA2E2] to-[#052EAA] p-4 rounded-4xl box-border"
          >
            <div className="flex flex-col justify-evenly p-4 box-border">
              <h2 className="sub-heading text-white font-1">
                Gst Registration
              </h2>
              <p className="font-3 text-white">
                Empowering Businesses through Comprehensive Solutions From Fund
                Management to Legal Empowering.
              </p>
            </div>
            <div className="p-2 bg-white rounded-4xl box-border grid h-full ">
              <img src={Image1} className="rounded-3xl w-full h-64  " loading="lazy" />
            </div>
          </motion.div>
        </motion.section>

        {/* What is GST Registration */}
        <motion.section
          ref={refAbout}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewAbout ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
            <h2
              className="sub-heading font-2 text-white text-left"

            >
              What Is GST Registration & Why Is It Needed?
            </h2>
            <p className="paragraph font-3 !text-white mx-auto text-left">
              GST registration is your essential license to collect tax and
              claim input credit in India. All eligible businesses must register
              online to receive their GSTIN for legal operations, e-commerce,
              tax credit, and national market access, with streamlined
              procedures effective April 2025.
            </p>
          </div>
        </motion.section>

        {/* Eligibility & Key Features */}
        <motion.section
          ref={refEligibility}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewEligibility ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2
            className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

          >
            Who Needs GST Registration?
          </h2>
          <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
            <p
              className="text-sm md:text-base font-3 text-gray-600 text-center"

            >
              All Indian businesses crossing turnover limits, conducting
              interstate trade, or engaging in e-commerce must register for GST
              as per law. Registration provides access to tax credits,
              interstate supply, and compliance with 2025 rules.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewEligibility ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <h3
                  className="text-lg font-2 font-semibold text-gray-800"

                >
                  Who Must Register?
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Annual turnover over ₹40 lakh (goods) or ₹20 lakh
                      (services) in most states.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Interstate supply of goods/services or TDS/TCS liability.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>E-commerce platform sales.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Reverse charge, agents, or input service distributors.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Voluntary any smaller business seeking compliance/trust.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewEligibility ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4"
              >
                <h3
                  className="text-lg font-2 font-semibold text-gray-800"

                >
                  Registration Features
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Online process at gst.gov.in, no visit needed.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Single GSTIN for multiple states/branches (if needed).
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Approval in 7 days (with Aadhaar), else max 30 days.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Mandatory for e-commerce and government work.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Easy ITC claims and standard invoices.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Jorwin Process Section */}
        <motion.section
          ref={refProcess}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewProcess ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2
            className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

          >
            How Jorwin Gets You GST Registered & Compliant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {processData.map((process, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewProcess ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: getProcessDelay(index) }}
                className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                  <process.icon className="w-8 h-8" />
                </div>
                <h3
                  className="text-lg font-2 font-semibold text-gray-800 mb-2"

                >
                  {process.title}
                </h3>
                <p className="text-sm font-3 text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          ref={refBenefits}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8 "
        >
          <h2
            className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

          >
            GST Registration & Filing Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: getBenefitsDelay(index) }}
                className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3
                  className="text-lg font-2 font-semibold text-gray-800 mb-2"

                >
                  {benefit.title}
                </h3>
                <p className="text-sm font-3 text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          ref={refFAQ}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8 md:py-16 space-y-6"
        >
          <h1
            className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"

          >
            Frequently Asked Questions
          </h1>
          <div
            className="px-6  md:px-24 space-y-4 font-3 "

          >
            {faq.map((data, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              >
                <h2
                  className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between  text-base font-medium ${isExpanded.isOpen && isExpanded.index === index
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded.isOpen && isExpanded.index === index
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

export default memo(GSTRegistrationFiling);
