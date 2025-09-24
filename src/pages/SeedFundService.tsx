import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/SeedFund/Image1.png";
import {
  Mail,
  User,
  Phone,
  Package,
  Headset,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  FileText,
  IndianRupee,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const SeedFund = () => {
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
      question: "1. What is seed funding?",
      answer:
        "Seed funding is the initial capital raised by a startup to develop their business idea, build a prototype, and validate their market concept before seeking larger investments.",
    },
    {
      question: "2. How much seed funding can I get?",
      answer:
        "Under government seed funding schemes, startups can typically get up to ₹50 lakhs as debt (loan) and up to ₹20 lakhs as grant, totaling up to ₹70 lakhs in seed funding support.",
    },
    {
      question: "3. What's the difference between debt and grant funding?",
      answer:
        "Debt funding (up to ₹50 lakhs) needs to be repaid with interest over time, while grant funding (up to ₹20 lakhs) is non repayable financial assistance provided to support your startup's growth.",
    },
    {
      question: "4. What documents are required for seed funding?",
      answer:
        "Key documents include a detailed business plan, financial projections, market research, prototype or MVP, team profiles, legal incorporation documents, and proof of innovation/scalability.",
    },
    {
      question: "5. How long does the seed funding process take?",
      answer:
        "The seed funding process typically takes 3 to 6 months from initial application to fund disbursement, depending on due diligence requirements and government approval processes.",
    },
    {
      question:
        "6. What are the eligibility criteria for government seed funding?",
      answer:
        "Startups should be DPIIT recognized, have innovative solutions, strong founding team, clear business model, and demonstrate potential for job creation and economic impact.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Get In Touch
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
  const getTouchDelay = (index: number) => {
    const row = Math.floor(index / touchCols);
    return 0.5 + row * 0.5;
  };

  // What is Seed Fund
  const refSeedFund = useRef(null);
  const isInViewSeedFund = useInView(refSeedFund, { once: true, amount: 0.1 });

  // Funding Structure
  const refFundingStructure = useRef(null);
  const isInViewFundingStructure = useInView(refFundingStructure, {
    once: true,
    amount: 0.1,
  });

  // Seed Fund Benefits
  const refFundBenefits = useRef(null);
  const isInViewFundBenefits = useInView(refFundBenefits, {
    once: true,
    amount: 0.1,
  });

  // Jorwin Process
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
  const getProcessDelay = (index: number) => {
    const row = Math.floor(index / processCols);
    return 0.5 + row * 0.5;
  };
  const processData = [
    {
      icon: FileText,
      title: "Business Plan Review",
      description:
        "We thoroughly analyze your business plan, market potential, and financial projections to ensure investor readiness.",
    },
    {
      icon: Users,
      title: "Investor Matching",
      description:
        "Our team connects you with the right seed investors who align with your industry, stage, and funding requirements.",
    },
    {
      icon: Headset,
      title: "Pitch & Negotiation Support",
      description:
        "We help you prepare compelling pitches and provide support during investor meetings and term negotiations.",
    },
  ];

  // Benefits
  const refBenefits = useRef(null);
  const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });
  const [benefitsCols, setBenefitsCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getBenefitsDelay = (index: number) => {
    const row = Math.floor(index / benefitsCols);
    return 0.5 + row * 0.5;
  };
  const benefitsData = [
    {
      icon: IndianRupee,
      title: "Up to ₹70 Lakh Funding",
      description:
        "Access combined funding of up to ₹50 lakh debt and ₹20 lakh grant to transform your business idea into reality.",
    },
    {
      icon: TrendingUp,
      title: "Low Interest Rates",
      description:
        "Benefit from government backed schemes offering competitive interest rates (8 to 12%) with flexible repayment terms.",
    },
    {
      icon: Shield,
      title: "Minimal Collateral",
      description:
        "Government seed funding requires minimal collateral, making it accessible for early stage startups without assets.",
    },
  ];

  // FAQ
  const refFAQ = useRef(null);
  const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.1 });
  const getFaqDelay = (index: number) => {
    const row = Math.floor(index / 1);
    return 0.2 + row * 0.1;
  };

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.1 });

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.seedFundService?.title}</Title>
        <Meta
          name="description"
          content={seoData?.seedFundService?.description}
        />
        <Meta name="keywords" content={seoData?.seedFundService?.keyword} />
        <Meta name="robots" content={seoData?.seedFundService?.robots} />
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
              Secure{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Seed Funding
              </span>{" "}
              for Your Startup
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
            >
              Transform your innovative ideas into reality with strategic seed
              funding. Our expert team connects you with the right investors and
              guides you through every step of the funding process.
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
                Get Funding Support
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
          className="flex flex-col md:flex-row gap-8 box-border  bg-[#f7f7f7] py-16 px-7 md:px-14"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getTouchDelay(0) }}
            className="w-full md:w-[320px]    flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 box-border"
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
                aria-label="Visit us at 123 Business Hub, New Delhi, India"
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
                aria-label="Call us at +91 98765 43210"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
                    Call Anytime
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    <a href="tel:+917486 952 087">+91 7486 952 087</a>
                  </p>
                </div>
              </a>
              <a
                href="mailto:bharat@Jorwinservices.com"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Email us at info@Jorwin.com"
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
            className="flex-grow grid md:grid-cols-2 h-full bg-gradient-to-r  from-[#3CA2E2] to-[#052EAA] p-4 rounded-4xl box-border"
          >
            <div className="flex flex-col justify-evenly p-4 box-border">
              <h2 className="sub-heading text-white font-1">
                Seed Fund India
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

        {/* What is Seed Fund */}
        <motion.section
          ref={refSeedFund}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewSeedFund ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
            <h2 className="sub-heading text-white text-left font-2">
              What Is Seed Funding?
            </h2>
            <p className="paragraph !text-white mx-auto text-left font-3">
              Seed funding is the initial capital investment used to start a
              business. It represents the first official equity funding stage
              and helps entrepreneurs transform their innovative ideas into
              viable businesses. This early stage funding is crucial for product
              development, market research, team building, and establishing the
              foundation for future growth and larger investment rounds.
            </p>
          </div>
        </motion.section>

        {/* Government Seed Funding Structure Section */}
        <motion.section
          ref={refFundingStructure}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA] font-2">
            Government Seed Funding Structure
          </h2>

          <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Grant Funding Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                    Grant Funding
                  </h3>
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                    <p className="text-2xl font-bold  font-3  ">
                      Up to ₹20 Lakh
                    </p>
                    <p className="text-xs opacity-90 font-3">
                      Maximum grant amount
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-700 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Non refundable assistance</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Proof of concept development</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Market validation support</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Milestone based disbursement</span>
                  </li>
                </ul>
              </motion.div>
              {/* Debt Funding Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                    Debt Funding
                  </h3>
                  <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                    <p className="text-2xl font-bold">Up to ₹50 Lakh</p>
                    <p className="text-xs opacity-90">Maximum loan amount</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-700 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Low interest rates (4to6%)</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Flexible repayment (5to7 years)</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Moratorium period upto 1 year</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span> Collateral free</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Seed Fund Benefits Section */}
        <motion.section
          ref={refFundBenefits}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFundBenefits ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 bg-[#f7f7f7] py-8"
        >
          <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Seed Fund Benefits & Eligibility
          </h2>
          <div className="mt-8 bg-white rounded-4xl font-3 p-4 md:p-12 space-y-6 shadow-md">
            <p className="text-sm md:text-base font-3 text-gray-600 text-center">
              Seed funding provides essential capital and strategic support to
              transform your business idea into a market ready product while
              building a strong foundation for growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFundBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 font-2">
                  Key Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Essential capital for product development and market
                      validation.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Access to experienced investors and mentors.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Business validation and credibility in the market.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Strategic guidance for business growth and scaling.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Preparation for future funding rounds.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFundBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 font-2">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Innovative business idea with market potential.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Dedicated founding team with relevant expertise.
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Clear business model and go to market strategy.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Scalable product or service offering.</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Early stage of business development (pre revenue or early
                      revenue).
                    </span>
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
            How Jorwin Helps You Secure Seed Funding
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
                <p className="text-sm text-gray-600 font-3">
                  {process.description}
                </p>
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
          <h2 className="sub-heading text-center bg-gradient-to-t font-2 text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
            Why Choose Jorwin for Seed Funding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefitsData?.map((benefit, index) => (
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 font-3">
                  {benefit.description}
                </p>
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
          className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6"
        >
          <h1 className="sub-heading bg-gradient-to-t text-center font-2  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
            Frequently Asked Questions
          </h1>
          <div className="px-6  md:px-24 space-y-4 font-3">
            {faq.map((data, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              >
                <h2
                  className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between  text-base font-medium ${
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
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

export default memo(SeedFund);
