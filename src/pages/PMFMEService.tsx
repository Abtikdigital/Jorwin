import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/PMFME/pmfme1.png";
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
    Utensils,
    Leaf,

} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const PMFME = () => {
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
            question: "1. What is PMFME scheme?",
            answer:
                "PMFME (PM Formalization of Micro Food Processing Enterprises) is a centrally sponsored scheme launched to support micro food processing enterprises in the unorganized sector and help them transition to the formal sector with improved access to credit, technology, and markets.",
        },
        {
            question: "2. What is the financial assistance under PMFME?",
            answer:
                "Under PMFME, individual beneficiaries can get up to ₹10 lakh credit linked subsidy for setting up food processing units. Self Help Groups (SHGs) and cooperatives can get up to ₹10 lakh per member with a maximum of ₹1 crore per SHG.",
        },
        {
            question: "3. Who is eligible for PMFME scheme?",
            answer:
                "Individual food processors, SHGs, Farmer Producer Organizations (FPOs), cooperatives, and existing micro food processing enterprises are eligible. The applicant should be involved in food processing activities and should not have availed credit linked subsidy under other schemes.",
        },
        {
            question: "4. What documents are required for PMFME application?",
            answer:
                "Required documents include Aadhaar card, project report, bank account details, FSSAI license, business plan, quotations for machinery/equipment, proof of land/premises, and caste certificate (if applicable).",
        },
        {
            question: "5. What is the subsidy rate under PMFME?",
            answer:
                "PMFME provides 35% subsidy for individual applicants and SHGs/FPOs/cooperatives. The scheme covers working capital as well as equipment/machinery costs for food processing activities.",
        },
        {
            question: "6. What types of food processing activities are covered?",
            answer:
                "PMFME covers various food processing activities including fruits & vegetables processing, spice processing, dairy products, grain milling, oil processing, ready to eat foods, snacks, and traditional food products.",
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

    // What is PMFME
    const refPMFME = useRef(null);
    const isInViewPMFME = useInView(refPMFME, { once: true, amount: 0.1 });

    // Funding Structure
    const refFundingStructure = useRef(null);
    const isInViewFundingStructure = useInView(refFundingStructure, { once: true, amount: 0.1 });

    // PMFME Benefits
    const refPMFMEBenefits = useRef(null);
    const isInViewPMFMEBenefits = useInView(refPMFMEBenefits, { once: true, amount: 0.1 });

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
            title: "Business Plan Development",
            description:
                "We help you prepare comprehensive project reports and business plans tailored for food processing enterprises under PMFME scheme.",
        },
        {
            icon: Users,
            title: "License & Registration",
            description:
                "Our team assists with FSSAI licensing, business registration, and all regulatory compliance required for food processing units.",
        },
        {
            icon: Headset,
            title: "End to End Support",
            description:
                "We provide complete guidance from application submission to fund disbursement and post approval business development support.",
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
            title: "Up to ₹10 Lakh Funding",
            description:
                "Access credit linked subsidy up to ₹10 lakh for individual beneficiaries and comprehensive support for food processing ventures.",
        },
        {
            icon: TrendingUp,
            title: "35% Government Subsidy",
            description:
                "Benefit from 35% government subsidy on project cost for both individual applicants and group enterprises under PMFME.",
        },
        {
            icon: Shield,
            title: "Complete Formalization",
            description:
                "Transform your informal food processing business into a formal enterprise with proper licensing, branding, and market access.",
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
                <Title>{seoData?.pmfmeService?.title}</Title>
                <Meta name="description" content={seoData?.pmfmeService?.description} />
                <Meta name="keywords" content={seoData?.pmfmeService?.keyword} />
                <Meta name="robots" content={seoData?.pmfmeService?.robots} />
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
                            Launch{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                PMFME Food
                            </span>{" "}
                            Processing Business
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-3"
                            
                        >
                            Transform your food processing dreams into reality with PMFME scheme benefits.
                            Get up to ₹10 lakh funding with 35% government subsidy and formalize your
                            micro food enterprise.
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
                                Apply for PMFME
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
                            href="mailto:Jorwin.funding@Jorwinservices.in"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@jorwin.co.in.com"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold font-3">
                                    Write Email
                                </p>
                                <p className="text-xs text-gray-600 font-3"><a href="mailto:Jorwin.funding@Jorwinservices.in">Jorwin.funding@Jorwinservices.in</a></p>
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
                                PMFME
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

                {/* What is PMFME */}
                <motion.section
                    ref={refPMFME}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewPMFME ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2
                            className="sub-heading text-white text-left font-2"
                          
                        >
                            What Is PMFME Scheme?
                        </h2>
                        <p className="paragraph !text-white mx-auto text-left font-3"
                       
                        >
                            PM Formalization of Micro Food Processing Enterprises (PMFME) is a centrally
                            sponsored scheme designed to support micro food processing enterprises in the
                            unorganized sector. The scheme aims to help them transition to the formal sector
                            by providing financial, technical, and business support for establishing modern
                            food processing units with improved access to credit, technology, and markets.
                        </p>
                    </div>
                </motion.section>

                {/* PMFME Funding Structure Section */}
                <motion.section
                    ref={refFundingStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                       
                    >
                        PMFME Funding Structure
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Individual Enterprises Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Utensils className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3 font-2"
                                      
                                    >
                                        Individual Enterprises
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Up to ₹10 Lakh</p>
                                        <p className="text-xs opacity-90">Credit-linked subsidy</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>35% government subsidy on project cost</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Equipment and working capital support</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>FSSAI licensing and compliance support</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Brand development and marketing</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Group Enterprises Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Leaf className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"
                                      
                                    >
                                        SHGs/FPOs/Cooperatives
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Up to ₹1 Crore</p>
                                        <p className="text-xs opacity-90">Maximum per group</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>₹10 lakh per member with 35% subsidy</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Common infrastructure development</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Collective branding and marketing</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Training and capacity building</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* PMFME Benefits Section */}
                <motion.section
                    ref={refPMFMEBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewPMFMEBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                        
                    >
                        PMFME Benefits & Eligibility
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                           
                        >
                            PMFME scheme provides comprehensive support for establishing and formalizing micro food
                            processing enterprises with financial assistance, technology support, and market linkages.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewPMFMEBenefits ? { y: 0, opacity: 1 } : {}}
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
                                        <span>35% credit linked subsidy on project cost.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Complete business formalization support.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>FSSAI licensing and regulatory compliance.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Brand development and marketing support.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Training and skill development programs.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewPMFMEBenefits ? { y: 0, opacity: 1 } : {}}
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
                                        <span>Individual food processors and entrepreneurs.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Self Help Groups (SHGs) and cooperatives.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Farmer Producer Organizations (FPOs).</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Existing micro food processing enterprises.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Should not have availed credit linked subsidy before.</span>
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
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                       
                    >
                        How Jorwin Helps You Get PMFME Benefits
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                       
                    >
                        Why Choose Jorwin for PMFME
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
                    <h1 className="sub-heading bg-gradient-to-t text-center font-2  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                        
                    >
                        Frequently Asked Questions
                    </h1>
                    <div
                        className="px-6  md:px-24 space-y-4 font-2"
                      
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

export default memo(PMFME);
