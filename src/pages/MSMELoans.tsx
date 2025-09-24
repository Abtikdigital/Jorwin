import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/About/bgImg.svg"; // Add your MSME image here
import {
  Mail,
  User,
  Phone,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  FileText,

  Shield,


  Factory,
  TrendingUp,
  Users,
  Building2,
  Handshake,
  Target
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
import { useNavigate } from "react-router-dom";

const MSMELoans = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "1. What are MSME loans and who can apply?",
      answer:
        "MSME loans are financial products designed for Micro, Small & Medium Enterprises. Any business with turnover up to ₹250 crores (Medium), ₹50 crores (Small), or ₹5 crores (Micro) can apply. These loans support business expansion, working capital, equipment purchase, and operational needs."
    },
    {
      question: "2. What is CGTMSE and how does it help?",
      answer:
        "Credit Guarantee Trust Fund for Micro & Small Enterprises (CGTMSE) provides collateral free loans up to ₹2 crores. It guarantees 75 to 85% of the loan amount, making it easier for MSMEs to access credit without pledging assets as security."
    },
    {
      question: "3. What is the Udyam Registration process?",
      answer:
        "Udyam Registration is a free online process for MSME classification. It requires Aadhaar number, PAN, and basic business details. This registration provides various government benefits, subsidies, and easier loan access with preferential interest rates."
    },
    {
      question: "4. How do Mudra loans work and what are the categories?",
      answer:
        "Mudra loans are divided into three categories: Shishu (up to ₹50,000), Kishor (₹50,000 to ₹5 lakhs), and Tarun (₹5,00,000 to ₹10 lakhs). These are collateral free loans for small businesses, entrepreneurs, and self-employed individuals."
    },
    {
      question: "5. What documents are required for MSME loan applications?",
      answer:
        "Required documents include Udyam Registration Certificate, PAN Card, Aadhaar Card, business plan, financial statements, bank statements for 12 months, ITR for 2 years, and address proof. Specific requirements may vary based on loan type and amount."
    },
    {
      question: "6. What are the interest rates and repayment terms?",
      answer:
        "Interest rates typically range from 8 to 14% depending on the loan type, business profile, and credit score. Repayment terms vary from 1,7 years for term loans. Working capital loans usually have shorter tenure with flexible repayment options."
    },
    {
      question: "7. How can Jorwin help in the MSME loan process?",
      answer:
        "Jorwin provides end to end assistance including loan eligibility assessment, documentation support, application processing, liaison with banks/NBFCs, and post approval services. We help maximize approval chances and secure better terms."
    }
  ];

  const toggleIsExpanded = (index: any) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Animation Refs and Hooks
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  const refTouch = useRef(null);
  const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });
  const [touchCols, setTouchCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setTouchCols(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getTouchDelay = (index: any) => {
    const row = Math.floor(index / touchCols);
    return 0.5 + row * 0.5;
  };

  const refMSMEInfo = useRef(null);
  const isInViewMSMEInfo = useInView(refMSMEInfo, { once: true, amount: 0.1 });

  const refLoanTypes = useRef(null);
  const isInViewLoanTypes = useInView(refLoanTypes, { once: true, amount: 0.1 });

  const refBenefits = useRef(null);
  const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });

  const refProcess = useRef(null);
  const isInViewProcess = useInView(refProcess, { once: true, amount: 0.1 });
  const [processCols, setProcessCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setProcessCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getProcessDelay = (index: any) => {
    const row = Math.floor(index / processCols);
    return 0.5 + row * 0.5;
  };

  const processData = [
    {
      icon: FileText,
      title: "Application & Documentation",
      description:
        "We help you complete your application and gather all required documents including Udyam registration, financials, and business plans."
    },
    {
      icon: Target,
      title: "Loan Assessment & Matching",
      description:
        "Our experts assess your requirements and match you with the most suitable lenders offering competitive rates and terms."
    },
    {
      icon: Handshake,
      title: "Approval & Disbursement",
      description:
        "We facilitate the approval process, coordinate with lenders, and ensure quick disbursement of your approved loan amount."
    }
  ];

  const refWhyChoose = useRef(null);
  const isInViewWhyChoose = useInView(refWhyChoose, { once: true, amount: 0.4 });
  const [benefitsCols, setBenefitsCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getBenefitsDelay = (index: any) => {
    const row = Math.floor(index / benefitsCols);
    return 0.5 + row * 0.5;
  };

  const benefitsData = [
    {
      icon: Shield,
      title: "Expert Guidance",
      description:
        "Get professional guidance from our MSME loan specialists who understand the intricacies of different loan schemes and requirements."
    },
    {
      icon: TrendingUp,
      title: "Higher Approval Rates",
      description:
        "Our expertise and lender relationships help maximize your loan approval chances with better terms and competitive interest rates."
    },
    {
      icon: Users,
      title: "End to End Support",
      description:
        "From application to disbursement, we provide complete support including documentation, follow-ups, and post approval assistance."
    }
  ];

  const refFAQ = useRef(null);
  const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });
  const getFaqDelay = (index: any) => {
    const row = Math.floor(index / 1);
    return 0.2 + row * 0.1;
  };

  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });
  const nav = useNavigate()

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.msmeLoans?.title || "MSME Loans - CGTMSE, Udyam & Mudra Loans"}</Title>
        <Meta name="description" content={seoData?.msmeLoans?.description || "Get MSME loans including CGTMSE, Udyam, and Mudra loans with Jorwin's expert assistance."} />
        <Meta name="keywords" content={seoData?.msmeLoans?.keyword || "MSME loans, CGTMSE, Udyam registration, Mudra loans, business loans"} />
        <Meta name="robots" content={seoData?.msmeLoans?.robots || "index, follow"} />
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
              Fuel Your Business Growth with {" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                MSME Loans
              </span>{" "}
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                                       leading-relaxed sm:leading-relaxed md:leading-relaxed
                                       text-white lg:text-white
                                       paragraph !text-white
                                       max-w-none sm:max-w-lg md:max-w-xl font-2 lg:max-w-none mx-auto lg:mx-0"
            >
              Access CGTMSE, Udyam, and Mudra loans with expert guidance. Get collateral free financing
              up to ₹2 crores with competitive rates and flexible terms for your business needs.
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
                Apply for MSME Loan
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
            className="w-full md:w-[320px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 box-border"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-2">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Contact Bharat Barot"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Bharat Barot
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    Vice President
                    <br />
                  </p>
                </div>
              </a>
              <a
                href="tel:+91 7486 952 087"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Call us at +91 7486 952 087"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Call Anytime
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    <a href="tel:+917486952087">+91 7486 952 087</a>
                  </p>
                </div>
              </a>
              <a
                href="mailto:bharat@Jorwinservices.com"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Email us"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Write Email
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    <a href="mailto:bharat@Jorwinservices.com">
                      bharat@Jorwinservices.com
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
            className="flex-grow grid md:grid-cols-2 h-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-4 rounded-4xl box-border"
          >
            <div className="flex flex-col justify-evenly p-4 box-border">
              <h2 className="sub-heading text-white font-1">
                MSME Loan Solutions
              </h2>
              <p className="font-3 text-white">
                Empowering Small & Medium Enterprises through Comprehensive Loan Solutions
                from CGTMSE to Mudra Loans with Expert Guidance.
              </p>
            </div>
            <div className="p-2 bg-white rounded-4xl box-border grid h-full">
              <img src={Image1} className="rounded-3xl w-full h-64" loading="lazy" alt="MSME Loans" />
            </div>
          </motion.div>
        </motion.section>

        {/* What are MSME Loans */}
        <motion.section
          ref={refMSMEInfo}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewMSMEInfo ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
            <h2 className="sub-heading text-white text-left font-2">
              What are MSME Loans?
            </h2>
            <p className="paragraph !text-white mx-auto text-left font-3">
              MSME (Micro, Small & Medium Enterprises) loans are specialized financial products designed to support
              businesses across different growth stages. These loans include government backed schemes like CGTMSE
              (collateral free loans up to ₹2 crores), Udyam registration benefits, and Mudra loans (up to ₹10 lakhs).
              They offer competitive interest rates, flexible repayment terms, and minimal documentation requirements
              to help businesses expand, purchase equipment, manage working capital, and achieve sustainable growth.
            </p>
          </div>
        </motion.section>

        {/* Loan Types Section */}
        <motion.section
          ref={refLoanTypes}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewLoanTypes ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            MSME Loan Types We Offer
          </h2>

          <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CGTMSE Loans Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewLoanTypes ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                    CGTMSE Loans
                  </h3>
                  <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                    <p className="text-2xl font-bold">Up to ₹2 Crores</p>
                    <p className="text-xs opacity-90">Collateral Free</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-700 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>No collateral or third party guarantee required.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>75 to 85% loan amount guaranteed by CGTMSE.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Competitive interest rates and flexible terms.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Quick processing and minimal documentation.</span>
                  </li>
                </ul>
                  <div className="flex justify-center items-center mt-4"><button className="custom-btn !py-3" onClick={() => {
                  nav("/services/funding/msme-loan/cgtmse")
                }}>Explore More</button></div>
              </motion.div>

              {/* Udyam Registration Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewLoanTypes ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                    Udaan 
                  </h3>
                  <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                    <p className="text-2xl font-bold">Free Registration</p>
                    <p className="text-xs opacity-90">Government Benefits</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-700 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Online registration process with Aadhaar & PAN.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Access to government subsidies and schemes.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Priority sector lending benefits.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Easier access to credit and loans.</span>
                  </li>
                </ul>
                  <div className="flex justify-center items-center mt-4"><button className="custom-btn !py-3" onClick={() => {
                  nav("/services/funding/msme-loan/udaan")
                }}>Explore More</button></div>
              </motion.div>

              {/* Mudra Loans Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewLoanTypes ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                    Mudra Loans
                  </h3>
                  <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                    <p className="text-2xl font-bold">Up to ₹10 Lakhs</p>
                    <p className="text-xs opacity-90">Three Categories</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-700 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Shishu: Up to ₹50,000 for startups.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Kishor: ₹50,001 to ₹5 lakhs for growth.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Tarun: ₹5,00,001 to ₹10 lakhs for expansion.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>No collateral required for any category.</span>
                  </li>
                </ul>
                <div className="flex justify-center items-center mt-4"><button className="custom-btn !py-3" onClick={() => {
                  nav("/services/funding/msme-loan/mudra")
                }}>Explore More</button></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          ref={refBenefits}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Benefits of MSME Loans
          </h2>
          <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
            <p className="text-sm md:text-base text-gray-600 text-center font-3">
              MSME loans offer numerous advantages designed to support business growth and development
              across different sectors and business sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 font-2">
                  Financial Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Lower interest rates compared to traditional loans.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Collateral free financing up to ₹2 crores.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Flexible repayment terms up to 7 years.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Government subsidies and interest subvention.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 font-2">
                  Business Advantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Quick processing and faster disbursement.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Minimal documentation requirements.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Support for working capital and expansion.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Access to government procurement opportunities.</span>
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
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Our Simple MSME Loan Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {processData?.map((process, index) => (
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-2">
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600 font-3">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Jorwin Section */}
        <motion.section
          ref={refWhyChoose}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Why Choose Jorwin for MSME Loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefitsData?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: getBenefitsDelay(index) }}
                className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-2 font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 font-3">{benefit.description}</p>
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
          <h1 className="sub-heading bg-gradient-to-t font-2 text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
            Frequently Asked Questions
          </h1>
          <div className="px-6 md:px-24 space-y-4 font-3">
            {faq.map((data, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              >
                <h2
                  className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between text-base font-medium ${isExpanded.isOpen && isExpanded.index === index
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

export default memo(MSMELoans);
