import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/PartnershipCompany/Image1.png";
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
const PartnershipRegistration = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });

  const faq = [
    {
      question: "1. What is a Partnership Firm?",
      answer:
        "A Partnership Firm is a business jointly owned and operated by two or more persons under a mutual agreement (Partnership Deed), where partners share profits, manage operations and are jointly liable.",
    },
    {
      question: "2. Is partnership registration mandatory?",
      answer:
        "No, but only registered firms can file suit, recover dues, and access full legal benefits. Registration is highly recommended for bank accounts, tenders, and GST/MSME compliance.",
    },
    {
      question: "3. What documents are required?",
      answer:
        "PAN and Aadhar of all partners, passport sized photos, address proof, business address proof, notarized Partnership Deed, and, if registering, an application to Registrar of Firms.",
    },
    {
      question: "4. What is the minimum number of partners and capital?",
      answer:
        "Minimum 2 partners (max 20), any capital. No minimum capital requirement. Individual or company/LLP can be partners.",
    },
    {
      question: "5. How long does the process take?",
      answer:
        "The partnership deed can be drafted in 2,3 days; firm registration takes 7,15 working days depending on the state.",
    },
    {
      question: "6. How does Jorwin help with Partnership Registration?",
      answer:
        "Jorwin prepares a custom deed, files all applications for registration, helps open a partner bank account, obtains GST/Udyam registration, and provides ongoing legal/compliance support.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Section hooks and column logic
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

  // --- Process Step Cards ---
  const processData = [
    {
      icon: FileText,
      title: "Partnership Deed Drafting",
      description:
        "We consult, draft, and notarize a Partnership Deed tailored to business needs, covering name, capital, shares, roles, banking, and dispute clauses.",
    },
    {
      icon: Shield,
      title: "Firm Registration & Compliance",
      description:
        "We prepare and file Form 1/other State-wise applications, submit all documents to the Registrar of Firms, and coordinate until registration approval.",
    },
    {
      icon: Award,
      title: "Bank & Statutory Filing Support",
      description:
        "Get your partnership firm bank account, GST/Udyam registration, and help with annual filings, PAN, and ongoing compliance.",
    },
  ];

  // --- Benefits Cards ---
  const benefitsData = [
    {
      icon: TrendingUp,
      title: "Simple & Fast Setup",
      description:
        "No minimum capital, minimal compliance, suitable for professionals and SMEs wanting ability and flexibility.",
    },
    {
      icon: IndianRupee ,
      title: "Tax Pass Through",
      description:
        "Firm’s income is taxed once in partners' hands, no double taxation like companies.",
    },
    {
      icon: Shield,
      title: "Shared Decision Power",
      description:
        "All partners can actively manage, mutually agree profit ratios, and define smooth exit/admission rules.",
    },
    {
      icon: Users,
      title: "Banking & Scheme Eligibility",
      description:
        "With registration, firms access business loans, MSME/GST benefits, and government tenders.",
    },
    {
      icon: Award,
      title: "Easy Conversion Path",
      description:
        "Easily upgrade to LLP/Pvt Ltd as the business grows without tax penalty.",
    },
  ];

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.partnershipService?.title}</Title>
        <Meta
          name="description"
          content={seoData?.partnershipService?.description}
        />
        <Meta name="keywords" content={seoData?.partnershipService?.keyword} />
        <Meta name="robots" content={seoData?.partnershipService?.robots} />
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
              Launch & Grow with{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Partnership Firm Registration
              </span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

            >
              Set up your professional or SME firm easily custom deed, bankable
              registration, legal compliance from day one with Jorwin!
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4  transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Start Partnership Firm
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
                href="tel:+91 98980 43284"
                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                aria-label="Call us at +91 98980 43284"
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
                PartnerShip Comapny
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

        {/* What is Partnership Firm */}
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
              What Is a Partnership Firm?
            </h2>
            <p
              className="paragraph font-3 !text-white mx-auto text-left"

            >
              Partnership Firm is a tried and trusted model for businesses run
              jointly by multiple owners. With a customized deed and optional
              registration, you unlock legal status, funding, bank accounts, and
              a smooth upgrade path to LLP or company whenever you grow.
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
            Who Can Register a Partnership Firm?
          </h2>
          <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
            <p
              className="text-sm font-3 md:text-base text-gray-600 text-center"

            >
              Any two or more individuals/entities agreeing to a common business
              objective can register. NRIs, companies, or LLPs may be partners.
              No minimum capital registration possible for all legitimate
              trade/profession.
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
                  Eligibility Snapshot
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>At least two partners (max 20)</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>No minimum/maximum capital</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Registered office in India</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Partners can be individuals or entities</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Business must be lawful</span>
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
                  Key Features
                </h3>
                <ul className="space-y-2 font-3 text-sm text-gray-600">
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Custom partnership deed, mutual flexibility</span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      Optional firm registration (recommended for banks/legal)
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>
                      No minimum compliance/filing (for non registered firms)
                    </span>
                  </li>
                  <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                    <span>Easier to convert to LLP/company later</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
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
            How Jorwin Gets Your Firm Registered
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
            className="sub-heading font-1 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

          >
            Why Choose Partnership Firm?
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

export default memo(PartnershipRegistration);
