import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/MakeInIndia/Image1.png";
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
const MakeInIndiaCertificate = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });

  const faq = [
    {
      question: "1. What is the Make in India Certificate?",
      answer:
        "It is an official attestation that your product or service qualifies as genuinely made in India, complying with Public Procurement (Preference to Make in India) Order issued by DPIIT. It’s critically required for GeM, tenders, and government projects.",
    },
    {
      question: "2. Who is eligible to obtain the certificate?",
      answer:
        "Manufacturers, OEMs, and service providers with at least 20% value added locally (Class II supplier) or 50%+ (Class I supplier) can self certify local content for most tenders. Higher value projects (>₹10Cr) require CA/third party attestation.",
    },
    {
      question: "3. What documents are needed?",
      answer:
        "Company incorporation, GST, PAN, product list, local content calculation/BOM, and for CA certificates: detailed cost/part/component breakdowns. Signature and company stamp required.",
    },
    {
      question: "4. What are the main benefits?",
      answer:
        "Purchase preference in government procurement, access to exclusive incentives, boost in business credibility and investor trust, priority in GeM/public tenders, and eligibility for global market export benefits.",
    },
    {
      question: "5. How do I get the certificate?",
      answer:
        "Fill in the prescribed format (self declaration or CA certified for high value bids), attach local content data, and submit with the tender or on GeM. Many online tools and consultants support fast certificate generation.",
    },
    {
      question: "6. Does the certificate expire?",
      answer:
        "The certificate is valid for the duration of the tender/contract unless prescribed otherwise, but it must be updated if your product’s local content changes materially.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Animations/hooks: identical structure to your other pages
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
      title: "Assess Local Content",
      description:
        "Review your manufacturing/assembly process and calculate Indian content percentage as per PPP-MII Order, 2017.",
    },
    {
      icon: Shield,
      title: "Self or CA Certification",
      description:
        "Generate a certificate in prescribed MII format—self-certified for standard tenders, CA-certified for bids over ₹10 Crores.",
    },
    {
      icon: Award,
      title: "Submit & Get Preference",
      description:
        "Attach with GeM/tender bid and get government purchase preference, incentives, and benefits as a certified Make in India supplier.",
    },
  ];

  // --- Benefits Cards ---
  const benefitsData = [
    {
      icon: TrendingUp,
      title: "Bid Preference",
      description:
        "Class I/II local suppliers get priority and may win government contracts even when not L1.",
    },
    {
      icon: IndianRupee ,
      title: "Access to Incentives",
      description:
        "Eligible for tax breaks, export incentives, and subsidies reserved for local manufacturers.",
    },
    {
      icon: Users,
      title: "Brand Credibility",
      description:
        "Build trust with buyers MII means quality, legal compliance, and speedy support.",
    },
    {
      icon: Award,
      title: "Market Expansion",
      description:
        "Boost eligibility for trade fairs, global tenders, and export opportunities with government backing.",
    },
    {
      icon: Shield,
      title: "Support for MSMEs",
      description:
        "MSMEs get equal footing against large/foreign competitors empowered to scale up faster.",
    },
  ];

  // --- Main JSX ---
  return (
    <>
      <HeadProvider>
        <Title>{seoData?.makeinindiaService?.title}</Title>
        <Meta
          name="description"
          content={seoData?.makeinindiaService?.description}
        />
        <Meta name="keywords" content={seoData?.makeinindiaService?.keyword} />
        <Meta name="robots" content={seoData?.makeinindiaService?.robots} />
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
              className="text-2xl sm:text-3xl font-1 md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white lg:text-inherit tracking-wide main-heading"

            >
              Win More Government Contracts with{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Make in India Certificate
              </span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

            >
              Prove your products are truly Indian, access special incentives,
              and get preference in public procurement, Jorwin makes certification
              simple, fast, and 100% Compliant.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4  transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Apply for Make in India Certificate
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
                  <p className="text-base text-gray-700 font-semibold  font-3">
                    Sumit Radadiya
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    HOD-Sales Department
                    <br />
                  </p>
                </div>
              </a>
              <a
                href="tel:+916358169584"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Call us at +91 98765 43210"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-3">
                    Call Anytime
                  </p>
                  <p className="text-xs text-gray-600 font-3">
                    <a href="tel:+917486 952 087">+91 6358 169 584</a>
                  </p>
                </div>
              </a>
              <a
                href="mailto:sumitradadiya@Jorwinservices.in"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Email us at info@jorwin.co.in.com"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base font-3 text-gray-700 font-semibold">
                    Write Email
                  </p>
                  <p className="text-xs font-3 text-gray-600">
                    <a href="mailto:sumitradadiya@Jorwinservices.in">
                      sumitradadiya@Jorwinservices.in
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
                Make In India
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

        {/* What is Make in India Certificate */}
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
              What Is Make in India Certificate?
            </h2>
            <p
              className="paragraph font-3 !text-white mx-auto text-left"

            >
              The Make in India (MII) Certificate certifies that your products
              or services are manufactured or sourced in accordance with
              government’s local content policy, unlocking government
              incentives, bid preference, and global markets. It is mandatory
              for GeM and most government/public tenders.
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
            Who Can Get MII Certificate?
          </h2>
          <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
            <p
              className="text-sm md:text-base font-3 text-gray-600 text-center"

            >
              Any Indian manufacturer, OEM, or service provider making
              in country value addition (as defined in PPP MII order) can get
              certified and unlock government backed advantages.
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
                  Eligibility Criteria
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Business registered/incorporated in India</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Manufacture or assemble product in India</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Local content: Class I (50%+), Class II (20-50%)
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>GST registration, PAN, and relevant tender docs</span>
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
                  className="text-lg font-semibold text-gray-800 font-2"

                >
                  Certificate Features
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-3">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Valid for government tenders & GeM bids</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Self certification (usual case) or CA certified (high
                      value)
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Formats provided in PPP MII notification</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Links to makeinindia.com and GeM portals</span>
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
            How Jorwin Gets Your MII Certification
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
            Make in India Certificate Benefits
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
                  className="text-lg font-semibold font-2 text-gray-800 mb-2"

                >
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
          <h1
            className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"

          >
            Frequently Asked Questions
          </h1>
          <div
            className="px-6  md:px-24 space-y-4 font-3"

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

export default memo(MakeInIndiaCertificate);
