import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/CMEGP/cmegp1.png";
import {
    Mail,
    User,
    Phone,

    Headset,
    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,
    IndianRupee ,
    TrendingUp,
    Users,

    Shield,
    Settings,
    Zap,

} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const CMEGP = () => {
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
            question: "1. What is CMEGP scheme?",
            answer:
                "CMEGP (Credit linked Capital Subsidy for Technology Upgradation) is a scheme designed to facilitate technology upgradation of micro and small enterprises by providing upfront capital subsidy of 15% on institutional finance availed by them for induction of well established and improved technology.",
        },
        {
            question: "2. What is the maximum subsidy under CMEGP?",
            answer:
                "Under CMEGP, eligible units can get 15% capital subsidy with a maximum ceiling of ₹15 lakh per unit for technology upgradation. The subsidy is calculated on the loan amount sanctioned by banks/financial institutions.",
        },
        {
            question: "3. Who is eligible for CMEGP scheme?",
            answer:
                "Existing micro and small enterprises engaged in manufacturing are eligible. The unit should be in commercial operation for at least 2 years, should have filed income tax returns, and the technology being inducted should result in better productivity, quality, and competitiveness.",
        },
        {
            question: "4. What documents are required for CMEGP application?",
            answer:
                "Required documents include loan sanction letter, project appraisal report, technology details, audited balance sheets for last 2 years, income tax returns, pollution clearance certificate, and details of existing machinery and proposed technology.",
        },
        {
            question: "5. How is CMEGP subsidy disbursed?",
            answer:
                "CMEGP subsidy is disbursed upfront after the loan is sanctioned and before the procurement of machinery. The subsidy amount is directly transferred to the borrower's loan account, reducing the effective loan burden.",
        },
        {
            question: "6. What types of technology upgradation are covered?",
            answer:
                "CMEGP covers upgradation to well established and improved technology including machinery, equipment, and technology that enhances productivity, quality, energy efficiency, and environmental compliance in manufacturing processes.",
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

    // What is CMEGP
    const refCMEGP = useRef(null);
    const isInViewCMEGP = useInView(refCMEGP, { once: true, amount: 0.1 });

    // Funding Structure
    const refFundingStructure = useRef(null);
    const isInViewFundingStructure = useInView(refFundingStructure, { once: true, amount: 0.1 });

    // CMEGP Benefits
    const refCMEGPBenefits = useRef(null);
    const isInViewCMEGPBenefits = useInView(refCMEGPBenefits, { once: true, amount: 0.1 });

    // Abtik Process
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
            title: "Technology Assessment",
            description:
                "We evaluate your current technology and identify suitable upgradation options that qualify for CMEGP subsidy benefits.",
        },
        {
            icon: Users,
            title: "Application Processing",
            description:
                "Our experts prepare comprehensive project reports and handle all documentation required for CMEGP application approval.",
        },
        {
            icon: Headset,
            title: "Implementation Support",
            description:
                "We provide end to end support from subsidy approval to technology implementation and compliance monitoring.",
        },
    ];

    // Benefits
    const refBenefits = useRef(null);
    const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.4 });
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
            icon: IndianRupee ,
            title: "Up to ₹15 Lakh Subsidy",
            description:
                "Get 15% capital subsidy with maximum ceiling of ₹15 lakh for technology upgradation in your manufacturing unit.",
        },
        {
            icon: TrendingUp,
            title: "Enhanced Competitiveness",
            description:
                "Upgrade to modern technology to improve productivity, quality, and market competitiveness of your products.",
        },
        {
            icon: Shield,
            title: "Upfront Disbursement",
            description:
                "Receive subsidy amount upfront after loan sanction, reducing your effective investment burden for technology upgradation.",
        },
    ];

    // FAQ
    const refFAQ = useRef(null);
    const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });
    const getFaqDelay = (index: number) => {
        const row = Math.floor(index / 1);
        return 0.2 + row * 0.1;
    };

    // Contact
    const refContact = useRef(null);
    const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

    return (<>
        <HeadProvider>
            <Title>{seoData?.cmegpService?.title}</Title>
            <Meta name="description" content={seoData?.cmegpService?.description} />
            <Meta name="keywords" content={seoData?.cmegpService?.keyword} />
            <Meta name="robots" content={seoData?.cmegpService?.robots} />
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
                        Upgrade with{" "}
                        <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                            CMEGP Subsidy
                        </span>{" "}
                        Technology Solutions
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"

                    >
                        Modernize your manufacturing unit with advanced technology upgradation.
                        Get 15% capital subsidy up to ₹15 lakh and enhance your business
                        productivity and competitiveness.
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
                            Apply for CMEGP
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
                        className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-3"

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
                                    Arissit Thackar

                                </p>
                                <p className="text-xs text-gray-600 font-3">
                                    NBFC-HOD
                                    <br />

                                </p>
                            </div>
                        </a>
                        <a
                            href="tel:+916357369191"
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
                                <p className="text-xs text-gray-600 font-3"><a href="tel:+917486 952 087">+91 6357 369 191</a></p>
                            </div>
                        </a>
                        <a
                            href="mailto:Abtik.funding@abtikservices.in"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@abtik.com"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold font-3">
                                    Write Email
                                </p>
                                <p className="text-xs text-gray-600 font-3"><a href="mailto:Abtik.funding@abtikservices.in">Abtik.funding@abtikservices.in</a></p>
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
                                CMEGP
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

            {/* What is CMEGP */}
            <motion.section
                ref={refCMEGP}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCMEGP ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading text-white text-left font-2"
                       
                    >
                        What Is CMEGP Scheme?
                    </h2>
                    <p className="paragraph !text-white mx-auto text-left font-3"
                      
                    >
                        Credit linked Capital Subsidy for Technology Upgradation (CMEGP) is a government
                        scheme designed to facilitate technology upgradation of micro and small enterprises.
                        The scheme provides 15% upfront capital subsidy on institutional finance for
                        induction of well-established and improved technology in manufacturing units,
                        enhancing their productivity, quality, and competitiveness.
                    </p>
                </div>
            </motion.section>

            {/* CMEGP Funding Structure Section */}
            <motion.section
                ref={refFundingStructure}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center bg-gradient-to-t font-2 text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                   
                >
                    CMEGP Subsidy Structure
                </h2>

                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Micro Enterprises Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Settings className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3 font-2"
                                    
                                >
                                    Micro Enterprises
                                </h3>
                                <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">15% Subsidy</p>
                                    <p className="text-xs opacity-90">On technology upgradation</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Investment up to ₹25 lakh in plant & machinery</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Maximum subsidy ceiling of ₹15 lakh</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Upfront subsidy disbursement</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Well established technology focus</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Small Enterprises Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3 font-2"
                                    
                                >
                                    Small Enterprises
                                </h3>
                                <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">15% Subsidy</p>
                                    <p className="text-xs opacity-90">On technology upgradation</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Investment ₹25 lakh to ₹5 crore in plant & machinery</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Maximum subsidy ceiling of ₹15 lakh</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Enhanced productivity focus</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Quality improvement benefits</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* CMEGP Benefits Section */}
            <motion.section
                ref={refCMEGPBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCMEGPBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                
                >
                    CMEGP Benefits & Eligibility
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                  
                    >
                        CMEGP scheme enables existing micro and small enterprises to upgrade their technology
                        with financial support, improving their manufacturing capabilities and market competitiveness.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCMEGPBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 font-2"
                              
                            >
                                Key Benefits
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>15% upfront capital subsidy on loan amount.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Enhanced productivity and operational efficiency.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Improved product quality and market competitiveness.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Reduced manufacturing costs and waste.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Access to modern and proven technology.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCMEGPBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 font-2"
                               
                            >
                                Eligibility Criteria
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Existing micro and small manufacturing enterprises.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Unit should be in operation for at least 2 years.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Filed income tax returns for last 2 years.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Technology should be well established and improved.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Should result in higher productivity and quality.</span>
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
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                   
                >
                    How Abtik Helps You Get CMEGP Subsidy
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
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2 font-2"
                                
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
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    
                >
                    Why Choose Abtik for CMEGP
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
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2 font-2"
                     
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
                className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6"
            >
                <h1 className="sub-heading bg-gradient-to-t font-2 text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                  
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

export default memo(CMEGP);
