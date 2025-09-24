import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/StartUpIndia/startupindia1.png";
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
    BookOpen,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const StartupIndiaCertificate = () => {
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
            question: "1. What is the Startup India Certificate?",
            answer:
                "It's official recognition by DPIIT (Department for Promotion of Industry and Internal Trade) that your business qualifies as a startup, making you eligible for government incentives, tax benefits, and special support programs.",
        },
        {
            question: "2. Who can apply for DPIIT Startup India recognition?",
            answer:
                "Any Private Limited, LLP, or Partnership firm incorporated in India within the last 10 years with turnover not exceeding ₹100 crore in any financial year can apply.",
        },
        {
            question: "3. What documents do I need?",
            answer:
                "You need Certificate of Incorporation/Partnership, PAN, brief on innovation or uniqueness, ID/Address proof of founders, and company website or deck if available.",
        },
        {
            question: "4. What are the main benefits after recognition?",
            answer:
                "Benefits include 3 years of income tax exemption, easier access to government and VC funding, up to 80% rebate on patent/trademark fees, tender eligibility, and self certification for labor and environmental compliance.",
        },
        {
            question: "5. How is the application filed and processed?",
            answer:
                "You or your consulting partner files the DPIIT recognition application online at the Startup India portal. After document checks and approval (typically 2to4 weeks), you can download the certificate.",
        },
        {
            question: "6. How do I check or share my certificate?",
            answer:
                "After approval, your DPIIT certificate is downloadable from the Startup India portal and can be validated or shared through DigiLocker.",
        },
    ];

    const toggleIsExpanded = (index: any) => {
        setIsExpanded((prev) =>
            prev.index === index && prev.isOpen
                ? { isOpen: false, index: -1 }
                : { isOpen: true, index }
        );
    };

    // Hooks and layout structure as per your Stand-Up India code

    // Hero
    const refHero = useRef(null);
    const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

    // Get In Touch
    const refTouch = useRef(null);
    const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });
    const [touchCols, setTouchCols] = useState(1);
    useEffect(() => {
        const updateCols = () => setTouchCols(window.innerWidth >= 768 ? 2 : 1);
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getTouchDelay = (index: any) => {
        const row = Math.floor(index / touchCols);
        return 0.5 + row * 0.5;
    };

    // About
    const refAbout = useRef(null);
    const isInViewAbout = useInView(refAbout, { once: true, amount: 0.1 });

    // Eligibility & Benefits
    const refEligibility = useRef(null);
    const isInViewEligibility = useInView(refEligibility, { once: true, amount: 0.1 });

    // DPIIT Application Steps (like process section)
    const refProcess = useRef(null);
    const isInViewProcess = useInView(refProcess, { once: true, amount: 0.1 });
    const [processCols, setProcessCols] = useState(1);
    useEffect(() => {
        const updateCols = () => setProcessCols(window.innerWidth >= 768 ? 3 : 1);
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getProcessDelay = (index: any) => {
        const row = Math.floor(index / processCols);
        return 0.5 + row * 0.5;
    };

    // Benefits Section (carousel)
    const refBenefits = useRef(null);
    const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });
    const [benefitsCols, setBenefitsCols] = useState(1);
    useEffect(() => {
        const updateCols = () => setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getBenefitsDelay = (index: any) => {
        const row = Math.floor(index / benefitsCols);
        return 0.5 + row * 0.5;
    };

    // FAQ
    const refFAQ = useRef(null);
    const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.1 });
    const getFaqDelay = (index: any) => {
        const row = Math.floor(index / 1);
        return 0.2 + row * 0.1;
    };

    // Contact
    const refContact = useRef(null);
    const isInViewContact = useInView(refContact, { once: true, amount: 0.1 });

    // === Process Step Cards ===
    const processData = [
        {
            icon: FileText,
            title: "Company Incorporation",
            description: "Register your Company/LLP/Partnership and gather all basic statutory documents and business information.",
        },
        {
            icon: BookOpen,
            title: "DPIIT Application Filing",
            description: "Apply for Startup India DPIIT recognition via the online portal, preparing your innovative brief, proofs, and all uploads.",
        },
        {
            icon: Shield,
            title: "Get Certified & Avail Benefits",
            description: "Track application status, download your official Startup India Certificate, and get guidance to claim all benefits.",
        },
    ];

    // === Benefits Cards ===
    const benefitsData = [
        {
            icon: IndianRupee ,
            title: "Tax Exemption",
            description: "3 year income tax holiday and capital gains exemptions for eligible recognized startups.",
        },
        {
            icon: Award,
            title: "IPR & Patent Rebate",
            description: "Up to 80% fee reduction in government patent and trademark filing charges & facilitation.",
        },
        {
            icon: TrendingUp,
            title: "Easy Funding",
            description: "Priority access to government Fund of Funds, venture funding, angel networks, and startup events.",
        },
        {
            icon: Users,
            title: "Tender & Govt Schemes",
            description: "Eligible for public procurement, government tenders, and exclusive startup programs.",
        },
        {
            icon: Shield,
            title: "Self certification Compliance",
            description: "Self certify under 6 labor & 3 environmental laws for easier business compliance.",
        },
    ];

    // === Main JSX ===
    return (
        <>
            <HeadProvider>
                <Title>{seoData?.startupIndisCertificateService?.title}</Title>
                <Meta name="description" content={seoData?.startupIndisCertificateService?.description} />
                <Meta name="keywords" content={seoData?.startupIndisCertificateService?.keyword} />
                <Meta name="robots" content={seoData?.startupIndisCertificateService?.robots} />
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
                          font-bold leading-tight text-white font-1 lg:text-inherit tracking-wide main-heading"
                          
                        >
                            Power Your Startup Journey with{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                Startup India Certificate
                            </span>
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

                            
                        >
                            Get DPIIT Startup India recognition, tax holidays, investor preference, patent rebates, and a gateway to exclusive government incentives with Jorwin’s expert assistance.
                        </p>
                        <div className="pt-2 sm:pt-4">
                            <button
                                onClick={handleOpenDialog}
                                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4  transition-transform duration-300 shadow-lg hover:shadow-xl"
                            >
                                Apply for Startup Certificate
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
                                <p className="text-base text-gray-700 font-semibold font-3">
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
                                <p className="text-xs text-gray-600 font-3"><a href="tel:+917486 952 087">+91 6358 169 584</a></p>
                            </div>
                        </a>
                        <a
                            href="mailto:sumitradadiya@Jorwinservices.in"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@jorwin.co.in"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold font-3">
                                    Write Email
                                </p>
                                <p className="text-xs text-gray-600 font-3"><a href="mailto:sumitradadiya@Jorwinservices.in">sumitradadiya@Jorwinservices.in</a></p>
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
                                StartUp India
                            </h2>
                            <p className="font-3 text-white">
                                Empowering Businesses through Comprehensive Solutions From Fund
                                Management to Legal Empowering.
                            </p>
                        </div>
                        <div className="p-2 bg-white rounded-4xl box-border grid h-full ">
                            <img src={Image1} className="rounded-3xl w-full h-64  " />
                        </div>
                    </motion.div>
                </motion.section>

                {/* What is Startup India Certificate */}
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
                            What Is Startup India Certificate?
                        </h2>
                        <p className="paragraph font-3 !text-white mx-auto text-left"
                          
                        >
                            The Startup India Certificate is an official DPIIT recognition for innovative businesses under 10 years old in India.
                            With this certificate, startups enjoy tax breaks, IP fee rebates, funding access, government tenders, and easier statutory compliance. Let Jorwin guide your recognition and unlock every benefit.
                        </p>
                    </div>
                </motion.section>

                {/* Eligibility & Key Benefits */}
                <motion.section
                    ref={refEligibility}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewEligibility ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                        
                    >
                        Eligibility & Key Features
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                         
                        >
                            To be considered for Startup India DPIIT recognition, your business must meet the following requirements.
                            Official recognition brings a host of strategic and financial advantages, powering your growth story.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewEligibility ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-semibold font-2 text-gray-800"
                                   
                                >
                                    Who Can Apply?
                                </h3>
                                <ul className="space-y-2 text-sm font-3 text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Private Limited, LLP, or Registered Partnership</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Incorporated within last 10 years</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Turnover &lt; ₹100 Cr in any year since incorporation</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Innovative/Unique product or scalable model</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Should not be formed by splitting/merger of existing business</span>
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
                                    Certificate Highlights
                                </h3>
                                <ul className="space-y-2 text-sm font-3 text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Downloadable government certificate</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Required for tax holiday and patent benefits</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Gives access to exclusive startup tenders & events</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Makes your startup trusted for investors/grants</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Can be linked to DigiLocker for easy sharing</span>
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                     
                    >
                        How Jorwin Gets You DPIIT Certified
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
                    <h2 className="sub-heading font-1 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    
                    >
                        Startup India Benefits For You
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
                    <h1 className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                       
                    >
                        Frequently Asked Questions
                    </h1>
                    <div
                        className="px-6  md:px-24 space-y-4  font-3"
                   
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

export default memo(StartupIndiaCertificate);
