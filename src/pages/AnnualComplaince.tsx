import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/AnnualCompliance/Image1.jpeg";
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
const AnnualCompliance = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });

  const faq = [
    {
      question: "1. What is annual compliance for companies/LLPs?",
      answer:
        "Annual compliance is the mandatory set of filings, disclosures, and statutory meetings companies and LLPs must complete each financial year as per Companies Act, LLP Act, and allied laws including ROC filings, AGM, and financial statements.",
    },
    {
      question: "2. Who is required to do annual compliance?",
      answer:
        "All Private Limited Companies, OPCs, LLPs, and Section 8 (NGO) companies registered in India even those with zero turnover must do annual filings with the Registrar of Companies (ROC) and other regulators.",
    },
    {
      question: "3. What are the key annual compliances?",
      answer:
        "Key filings are: Board meetings, Maintaining statutory registers, Preparing and approving financials, Holding AGM, ROC returns (AOC-4, MGT-7/7A, LLP-11, LLP-8), Income tax return, KYC of directors, and additional event-based filings.",
    },
    {
      question: "4. What documents and records are needed?",
      answer:
        "Financial statements, audited accounts, board/AGM resolutions/minutes, directors' KYC, statutory registers, and, for LLP, the Statement of Account & Solvency. Professional digital signatures are required for e filing.",
    },
    {
      question: "5. What are the penalties for non compliance?",
      answer:
        "Heavy late fees (₹100/day even for small delays), disqualification of directors/partners, deregistration or striking off by MCA, and in certain cases prosecution and personal liability for officers.",
    },
    {
      question: "6. How does Abtik assist with annual compliance?",
      answer:
        "Abtik provides end to end annual compliance: compliance calendar, secretarial help, document prep, digital signature, e filing, AGM/board meeting support, ROC/ITR filings, and regular alerts to guarantee 100% legal standing.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Section hooks and animation logic
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

  // --- Annual Compliance Process Steps ---
  const processData = [
    {
      icon: FileText,
      title: "Document Collection & Review",
      description:
        "We gather and check all business records, financials, and statutory registers for accuracy and completeness for the annual period.",
    },
    {
      icon: Shield,
      title: "Meeting, Notice & Resolution Support",
      description:
        "Our team drafts board/AGM notices, resolutions, prepares minutes, and coordinates required statutory meetings on your behalf.",
    },
    {
      icon: Award,
      title: "ROC e Filings & ITR Submission",
      description:
        "Your dedicated expert completes all e-filings (AOC-4/MGT-7/LLP-11/8, DPT-3, KYC, etc.) and Income Tax Return to keep your company/LLP fully compliant annually.",
    },
  ];

  // --- Annual Compliance Benefits ---
  const benefitsData = [
    {
      icon: TrendingUp,
      title: "No Penalties or Disqualification",
      description:
        "Avoid late fees, director disqualification, and company strike off with timely, accurate annual filings.",
    },
    {
      icon: IndianRupee ,
      title: "Attract Investment & Bank Funding",
      description:
        "Proper compliance/filings open access to credit, grants, and investor due diligence for growth.",
    },
    {
      icon: Shield,
      title: "Business Legitimacy & Brand Value",
      description:
        "Show clients, partners, and government your company is active, legitimate, and trustworthy.",
    },
    {
      icon: Users,
      title: "Peace of Mind",
      description:
        "Year round reminders, secretarial help, and expert guidance mean stress-free compliance.",
    },
    {
      icon: Award,
      title: "Ready for Tenders & Global Business",
      description:
        "Only compliant companies are eligible for government tenders, FDI, overseas business, and major corporate contracts.",
    },
  ];

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.annualComplainceService?.title}</Title>
        <Meta
          name="description"
          content={seoData?.annualComplainceService?.description}
        />
        <Meta
          name="keywords"
          content={seoData?.annualComplainceService?.keyword}
        />
        <Meta
          name="robots"
          content={seoData?.annualComplainceService?.robots}
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
              className="text-2xl font-1 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white lg:text-inherit tracking-wide main-heading"

            >
              Stay Legally Flawless with{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Annual Company Compliance
              </span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

            >
              Keep your company or LLP 100% compliant with statutory annual
              filings, ROC returns, meetings, and ITR all managed & filed by
              Abtik experts.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4  transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Get Annual Compliance Help
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
              className="text-lg font-2 sm:text-xl font-semibold text-gray-800 mb-4"

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
                href="tel:+91 7486 952 087"
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
                href="heer@abtikservices.co.in"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Email us at info@abtik.com"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-3 text-gray-700 font-semibold">
                    Write Email
                  </p>
                  <p className="text-xs font-3 text-gray-600">
                    <a href="mailto:heer@abtikservices.co.in">
                      heer@abtikservices.co.in
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
                                Annual Complaince
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

        {/* What is Annual Compliance */}
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
              What Is Company/LLP Annual Compliance?
            </h2>
            <p className="paragraph font-3 !text-white mx-auto text-left">
              Annual compliance includes all the legal filings, disclosures,
              board meetings, AGMs, and return submissions your company or LLP
              must complete every financial year under Indian company law.
              Neglecting these can result in steep penalties or closure, Abtik
              makes sure you stay fully compliant, year after year.
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
            Who Must Do Annual Compliance?
          </h2>
          <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
            <p
              className="text-sm font-3 md:text-base text-gray-600 text-center"

            >
              Every entity registered under the Companies Act, LLP Act, or as
              OPC/Section 8 (NGO) must file statutory returns and hold meetings,
              irrespective of turnover or profit.
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
                  Who Is Covered?
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Pvt Ltd, Limited, One Person, and Section 8 Companies
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Limited Liability Partnerships (LLP)</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Zero turnover, dormant, and brand new companies</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Must comply every year, irrespective of business done
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
                  Key Annual Tasks
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Hold Board meetings & AGM</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Maintain statutory registers</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Prepare and approve financial statements</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      File ROC forms: AOC-4, MGT-7/7A, DIR-3 KYC, DPT-3, LLP-11,
                      LLP-8, etc.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Income Tax Return for company/LLP</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Abtik Process Section */}
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
            How Abtik Handles Annual Compliance For You
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
                <p className="text-sm text-gray-600 font-3">{process.description}</p>
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
            Why Annual Compliance Is Vital
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

export default memo(AnnualCompliance);
