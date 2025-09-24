import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/MudraLoan/MudraLoan.png";
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
    Building,
    Zap,
    Star,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const MudraLoan = () => {
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
            question: "1. What is PMMY Mudra Loan?",
            answer:
                "Pradhan Mantri Mudra Yojana (PMMY) is a flagship scheme providing collateral free loans up to ₹10 lakh to non corporate, non farm micro enterprises engaged in manufacturing, trading, or service sectors including activities allied to agriculture.",
        },
        {
            question: "2. What are the three categories of Mudra loans?",
            answer:
                "Mudra loans are categorized into three types: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh), signifying different stages of business growth and funding requirements.",
        },
        {
            question: "3. Who is eligible for Mudra loans?",
            answer:
                "Individuals, proprietary concerns, partnership firms, private limited companies, public companies, and any other legal forms engaged in income generating activities in non farm sectors are eligible. The applicant should not be a defaulter and should have a satisfactory credit track record.",
        },
        {
            question: "4. What documents are required for Mudra loan application?",
            answer:
                "Required documents include ID proof, address proof, passport size photograph, applicant signature, business proof, project report, bank statements, and other documents as specified by the lending institution.",
        },
        {
            question: "5. Is there any processing fee for Mudra loans?",
            answer:
                "Banks may charge upfront fee as per their internal guidelines. However, the upfront fee/processing charges for Shishu loans (up to ₹50,000) are waived by most banks to encourage micro entrepreneurs.",
        },
        {
            question: "6. Can women entrepreneurs get additional benefits?",
            answer:
                "Yes, women account for 68% of all Mudra beneficiaries. MUDRA provides a reduction of 25 basis points in interest rates to MFIs/NBFCs providing loans to women entrepreneurs, and banks may consider additional facilities including interest reduction.",
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

    // What is Mudra Loan
    const refMudraLoan = useRef(null);
    const isInViewMudraLoan = useInView(refMudraLoan, { once: true, amount: 0.1 });

    // Funding Structure
    const refFundingStructure = useRef(null);
    const isInViewFundingStructure = useInView(refFundingStructure, { once: true, amount: 0.1 });

    // Mudra Loan Benefits
    const refMudraLoanBenefits = useRef(null);
    const isInViewMudraLoanBenefits = useInView(refMudraLoanBenefits, { once: true, amount: 0.1 });

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
            title: "Application Assistance",
            description:
                "We help you prepare loan applications, project reports, and all necessary documentation for smooth Mudra loan processing through JanSamarth portal or bank branches.",
        },
        {
            icon: Users,
            title: "Lender Coordination",
            description:
                "Our team connects you with the right lending institutions including banks, NBFCs, and MFIs for optimal loan terms and quick approval.",
        },
        {
            icon: Headset,
            title: "Business Development",
            description:
                "We provide ongoing support for business planning, financial management, and growth strategies to ensure your MSME success under Mudra scheme.",
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
            icon: IndianRupee ,
            title: "Up to ₹10 Lakh Loan",
            description:
                "Access collateral free loans ranging from ₹50,000 to ₹10 lakh across Shishu, Kishore, and Tarun categories for your micro enterprise needs.",
        },
        {
            icon: TrendingUp,
            title: "Competitive Interest Rates",
            description:
                "Benefit from competitive interest rates as per RBI guidelines with no processing charges for Shishu loans and minimal charges for higher categories.",
        },
        {
            icon: Shield,
            title: "No Collateral Required",
            description:
                "Start or expand your business without any collateral security, with only personal guarantee of promoters and primary security of assets created.",
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
                <Title>{seoData?.mudraloanService?.title}</Title>
                <Meta name="description" content={seoData?.mudraloanService?.description} />
                <Meta name="keywords" content={seoData?.mudraloanService?.keyword} />
                <Meta name="robots" content={seoData?.mudraloanService?.robots} />
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
                            Get{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                Mudra Loan
                            </span>{" "}
                            for MSME Business
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
                            
                        >
                            Fund your micro enterprise dreams with PMMY Mudra loans.
                            Get collateral free loans up to ₹10 lakh for manufacturing,
                            trading, and service businesses under the flagship government scheme.
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
                                Apply for Mudra Loan
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
                            className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-2"
                          
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
                                        Manish Kumar

                                    </p>
                                    <p className="text-xs text-gray-600 font-3">
                                        Head Of Finance Department
                                        <br />

                                    </p>
                                </div>
                            </a>
                            <a
                                href="tel:+917486952086"
                                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                                aria-label="Call us at +917486952086"
                            >
                                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Phone className="w-5 h-5 text-white" />
                                </span>
                                <div>
                                    <p className="text-base text-gray-700 font-semibold font-3">
                                        Call Anytime
                                    </p>
                                    <p className="text-xs text-gray-600 font-3"><a href="tel:+917486952086">+91 7486 952 086</a></p>
                                </div>
                            </a>
                            <a
                                href="mailto:manish.kumar@abtikservices.co.in"
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
                                    <p className="text-xs text-gray-600 font-3"><a href="mailto:manish.kumar@abtikservices.co.in">manish.kumar@abtikservices.co.in</a></p>
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
                                Mudra Loan
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

                {/* What is Mudra Loan */}
                <motion.section
                    ref={refMudraLoan}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewMudraLoan ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2
                            className="sub-heading text-white text-left font-2"
                        
                        >
                            What Is PMMY Mudra Loan?
                        </h2>
                        <p className="paragraph !text-white mx-auto text-left font-3"
                     
                        >
                            Pradhan Mantri Mudra Yojana (PMMY) is a flagship scheme launched by the Government of India
                            to provide collateral free loans up to ₹10 lakh to noncorporate, non farm micro enterprises.
                            The scheme supports millions of proprietorship and partnership firms in manufacturing, service,
                            and trading sectors, helping entrepreneurs access formal banking credit that was previously
                            unavailable through traditional channels.
                        </p>
                    </div>
                </motion.section>

                {/* Mudra Loan Categories Section */}
                <motion.section
                    ref={refFundingStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                        
                    >
                        Mudra Loan Categories
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Shishu Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Building className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"
                                      
                                    >
                                        Shishu
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Up to ₹50,000</p>
                                        <p className="text-xs opacity-90">Loan amount</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>No processing fee charged</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>No margin money required</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>For micro businesses and startups</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Quick approval process</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Kishore Card */}
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
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"
                                   
                                    >
                                        Kishore
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">₹50,000 to ₹5L</p>
                                        <p className="text-xs opacity-90">Loan amount</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Minimum 15% margin money</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Growing businesses category</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Term loan and working capital</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>44.7% share in FY25</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Tarun Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"
                                    
                                    >
                                        Tarun
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">₹5L to ₹10L</p>
                                        <p className="text-xs opacity-90">Loan amount</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Minimum 15% margin money</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Established businesses scaling</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Business expansion focus</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Gaining momentum category</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Mudra Loan Benefits Section */}
                <motion.section
                    ref={refMudraLoanBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewMudraLoanBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                       
                    >
                        Mudra Loan Benefits & Eligibility
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                       
                        >
                            PMMY Mudra loans provide comprehensive financial support to micro enterprises with collateral free
                            credit, enabling millions of entrepreneurs to access formal banking and grow their businesses.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewMudraLoanBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-semibold font-2 text-gray-800"
                                   
                                >
                                    Key Benefits
                                </h3>
                                <ul className="space-y-2 font-3 text-sm text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Collateral free loans up to ₹10 lakh.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>No processing charges for Shishu loans.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Available through multiple lending channels.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Online application through JanSamarth portal.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Special benefits for women entrepreneurs.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewMudraLoanBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-2 font-semibold text-gray-800"
                                 
                                >
                                    Eligibility Criteria
                                </h3>
                                <ul className="space-y-2 text-sm font-3 text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Individuals and all legal business forms.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Non corporate, non farm enterprises.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Satisfactory credit track record required.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Should not be defaulter to any institution.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Necessary skills/experience for proposed activity.</span>
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                      
                    >
                        How Abtik Helps You Get Mudra Loan
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
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                      
                    >
                        Why Choose Abtik for Mudra Loan
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
                                    className="text-lg font-semibold font-2 text-gray-800 mb-2"
                                   
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
                    className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6"
                >
                    <h1 className="sub-heading bg-gradient-to-t font-2 text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                       
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

export default memo(MudraLoan);
