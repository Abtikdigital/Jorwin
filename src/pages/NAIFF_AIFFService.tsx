import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Naiff/NAIFF.jpg";
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
    PieChart,
    Building2,

} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const NAIFFAIFF = () => {
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
            question: "1. What is NAIFF/AIFF scheme?",
            answer:
                "National Alternative Investment Fund (NAIFF) and Alternative Investment Fund (AIFF) are specialized investment vehicles that provide funding to startups, MSMEs, and growth stage companies. These funds focus on equity investments, venture capital, and private equity funding for innovative businesses across various sectors.",
        },
        {
            question: "2. What is the investment range under NAIFF/AIFF?",
            answer:
                "NAIFF/AIFF typically provides equity investments ranging from ₹50 lakh to ₹50 crore, depending on the fund size, business stage, and growth potential. The investment amount varies based on company valuation, market opportunity, and scalability prospects.",
        },
        {
            question: "3. Who is eligible for NAIFF/AIFF investment?",
            answer:
                "Innovative startups, MSMEs, growth stage companies with scalable business models, technology driven enterprises, and companies in sectors like fintech, healthtech, edtech, agritech, and manufacturing are eligible. The company should demonstrate strong growth potential and competent management team.",
        },
        {
            question: "4. What documents are required for NAIFF/AIFF application?",
            answer:
                "Required documents include detailed business plan, financial projections, management team profiles, market analysis, competitive landscape, legal documents (incorporation, shareholders agreement), audited financials, and due diligence materials including compliance certificates.",
        },
        {
            question: "5. What is the typical investment process timeline?",
            answer:
                "The NAIFF/AIFF investment process typically takes 4 to 8 months from initial application to fund disbursement, including due diligence, valuation assessment, investment committee approval, legal documentation, and final fund transfer.",
        },
        {
            question: "6. What are the key terms and conditions?",
            answer:
                "Key terms include equity stake (typically 10 to 30%), board representation, protective provisions, anti dilution rights, exit clauses, performance milestones, and reporting requirements. The fund may also require co investment rights and tag along/drag along provisions.",
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

    // What is NAIFF/AIFF
    const refNAIFFAIFF = useRef(null);
    const isInViewNAIFFAIFF = useInView(refNAIFFAIFF, { once: true, amount: 0.1 });

    // Investment Structure
    const refInvestmentStructure = useRef(null);
    const isInViewInvestmentStructure = useInView(refInvestmentStructure, { once: true, amount: 0.1 });

    // NAIFF/AIFF Benefits
    const refNAIFFAIFFBenefits = useRef(null);
    const isInViewNAIFFAIFFBenefits = useInView(refNAIFFAIFFBenefits, { once: true, amount: 0.1 });

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
            title: "Investment Readiness",
            description:
                "We help you prepare comprehensive business plans, financial models, and investment proposals that meet NAIFF/AIFF investment criteria and due diligence requirements.",
        },
        {
            icon: Users,
            title: "Fund Matching",
            description:
                "Our team connects you with appropriate NAIFF/AIFF funds based on your sector, stage, and funding requirements, ensuring strategic alignment and optimal terms.",
        },
        {
            icon: Headset,
            title: "Deal Structuring",
            description:
                "We provide support throughout the investment process including valuation negotiation, term sheet discussions, legal documentation, and closing procedures.",
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
            title: "₹50L to ₹50Cr Investment",
            description:
                "Access substantial equity funding ranging from ₹50 lakh to ₹50 crore for scaling your business operations and market expansion.",
        },
        {
            icon: TrendingUp,
            title: "Strategic Value Addition",
            description:
                "Benefit from strategic guidance, industry expertise, network access, and mentorship from experienced fund managers and advisory boards.",
        },
        {
            icon: Shield,
            title: "Flexible Investment Terms",
            description:
                "Negotiate favorable investment terms including equity stake, board composition, exit strategies, and performance-based milestones.",
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
                <Title>{seoData?.naiff_aiffService?.title}</Title>
                <Meta name="description" content={seoData?.naiff_aiffService?.description} />
                <Meta name="keywords" content={seoData?.naiff_aiffService?.keyword} />
                <Meta name="robots" content={seoData?.naiff_aiffService?.robots} />
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
                            Raise{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                NAIFF/AIFF
                            </span>{" "}
                            Equity Investment
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
                       
                        >
                            Scale your innovative business with strategic equity investments from NAIFF/AIFF funds.
                            Access ₹50 lakh to ₹50 crore funding along with expert guidance,
                            industry networks, and growth acceleration support.
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
                                Apply for Investment
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
                                NAIFF AIFF
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

                {/* What is NAIFF/AIFF */}
                <motion.section
                    ref={refNAIFFAIFF}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewNAIFFAIFF ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2
                            className="sub-heading text-white text-left font-2"
                         
                        >
                            What Is NAIFF/AIFF Investment?
                        </h2>
                        <p className="paragraph !text-white mx-auto text-left font-3"
                          
                        >
                            National Alternative Investment Fund (NAIFF) and Alternative Investment Fund (AIFF) are
                            specialized investment vehicles designed to provide equity funding to innovative startups,
                            MSMEs, and growth stage companies. These funds focus on venture capital, private equity,
                            and strategic investments in scalable businesses across technology, manufacturing, healthcare,
                            fintech, and other high-growth sectors, offering both capital and strategic value addition.
                        </p>
                    </div>
                </motion.section>

                {/* NAIFF/AIFF Investment Structure Section */}
                <motion.section
                    ref={refInvestmentStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                      
                    >
                        NAIFF/AIFF Investment Structure
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Early Stage Investment Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <PieChart className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"
                                      
                                    >
                                        Early Stage Investment
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">₹50L to  ₹5Cr</p>
                                        <p className="text-xs opacity-90">Investment range</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-700 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Seed and Series A funding stages</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>10-25% equity stake typically</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Product development and market entry</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Intensive mentorship and guidance</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Growth Stage Investment Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Building2 className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3 font-2"
                                       
                                    >
                                        Growth Stage Investment
                                    </h3>
                                    <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">₹5Cr to ₹50Cr</p>
                                        <p className="text-xs opacity-90">Investment range</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-700 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Series B and later stage funding</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>15-30% equity stake typically</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Market expansion and scaling</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strategic partnerships and networks</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* NAIFF/AIFF Benefits Section */}
                <motion.section
                    ref={refNAIFFAIFFBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewNAIFFAIFFBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                      
                    >
                        NAIFF/AIFF Benefits & Requirements
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                            
                        >
                            NAIFF/AIFF investments provide not just capital but strategic value addition through expertise,
                            networks, and guidance to accelerate business growth and market penetration.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewNAIFFAIFFBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-2 font-semibold text-gray-800"
                                   
                                >
                                    Key Benefits
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Substantial equity funding for growth scaling.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strategic guidance and industry expertise.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Access to extensive business networks.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Board representation and mentorship.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Follow-on investment opportunities.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewNAIFFAIFFBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-semibold text-gray-800 font-2"
                                    
                                >
                                    Investment Requirements
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Scalable business model with high growth potential.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strong management team with relevant experience.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Clear market opportunity and competitive advantage.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Demonstrable traction and financial metrics.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Exit strategy alignment and growth roadmap.</span>
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
                        How Abtik Helps You Secure NAIFF/AIFF Investment
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
                        Why Choose Abtik for NAIFF/AIFF
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

export default memo(NAIFFAIFF);
