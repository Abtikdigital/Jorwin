import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/PMEGP/pmegp1.png";
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
    Factory,

    Briefcase,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const PMEGP = () => {
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
            question: "1. What is PMEGP scheme?",
            answer:
                "PMEGP (Prime Minister's Employment Generation Programme) is a credit linked subsidy scheme that provides financial assistance for setting up micro enterprises in manufacturing, service, and trading sectors to generate employment opportunities.",
        },
        {
            question: "2. What is the maximum loan amount under PMEGP?",
            answer:
                "Under PMEGP, you can get up to ₹25 lakh for manufacturing units and ₹10 lakh for service/trading units. The scheme provides 15to35% subsidy on the project cost depending on category and location.",
        },
        {
            question: "3. Who is eligible for PMEGP scheme?",
            answer:
                "Individuals above 18 years, existing units under PMRY, Rural Employment Generation Programme, institutions, co operatives, charitable trusts, and self help groups are eligible. The beneficiary should not have availed subsidy under any other government scheme.",
        },
        {
            question: "4. What documents are required for PMEGP application?",
            answer:
                "Required documents include project report, passport size photographs, identity proof, address proof, caste certificate (if applicable), educational qualification certificates, experience certificate, and bank account details.",
        },
        {
            question: "5. How long does PMEGP loan approval take?",
            answer:
                "PMEGP loan approval typically takes 45 to 60 days from application submission, including verification, appraisal, and final approval by the lending institution.",
        },
        {
            question: "6. What is the repayment period for PMEGP loans?",
            answer:
                "PMEGP loans have a repayment period of 3 to 7 years with a moratorium period of 6 to 18 months depending on the type of activity and cash flow generation of the project.",
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

    // What is PMEGP
    const refPMEGP = useRef(null);
    const isInViewPMEGP = useInView(refPMEGP, { once: true, amount: 0.1 });

    // Funding Structure
    const refFundingStructure = useRef(null);
    const isInViewFundingStructure = useInView(refFundingStructure, { once: true, amount: 0.1 });

    // PMEGP Benefits
    const refPMEGPBenefits = useRef(null);
    const isInViewPMEGPBenefits = useInView(refPMEGPBenefits, { once: true, amount: 0.1 });

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
            title: "Documentation Support",
            description:
                "We help you prepare all necessary documents, project reports, and application forms required for PMEGP scheme approval.",
        },
        {
            icon: Users,
            title: "Bank Coordination",
            description:
                "Our team coordinates with empaneled banks and financial institutions to ensure smooth loan processing and approval.",
        },
        {
            icon: Headset,
            title: "Complete Guidance",
            description:
                "We provide end to end support from application submission to loan disbursement and post approval assistance.",
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
            title: "Up to ₹25 Lakh Funding",
            description:
                "Access funding up to ₹25 lakh for manufacturing and ₹10 lakh for service/trading with attractive subsidy rates.",
        },
        {
            icon: TrendingUp,
            title: "Government Subsidy",
            description:
                "Benefit from 15 to 35% government subsidy on project cost based on category, location, and type of enterprise.",
        },
        {
            icon: Shield,
            title: "Flexible Repayment",
            description:
                "Enjoy flexible repayment terms with 3 to 7 years tenure and moratorium period of 6 to 18 months for cash flow management.",
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
                <Title>{seoData?.pmegpService?.title}</Title>
                <Meta name="description" content={seoData?.pmegpService?.description} />
                <Meta name="keywords" content={seoData?.pmegpService?.keyword} />
                <Meta name="robots" content={seoData?.pmegpService?.robots} />
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
                          main-heading font-2"

                        >
                            Get{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                PMEGP Loan
                            </span>{" "}
                            for Your Business
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-3"

                        >
                            Launch your manufacturing or service business with PMEGP scheme benefits.
                            Get up to ₹25 lakh funding with government subsidy and create employment
                            opportunities in your community.
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
                                Apply for PMEGP
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
                                    <p className="text-base text-gray-700 font-semibold font-3 ">
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
                                aria-label="Email us at info@jorwin.co.in"
                            >
                                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Mail className="w-5 h-5 text-white" />
                                </span>
                                <div>
                                    <p className="text-base text-gray-700 font-semibold font-3">
                                        Write Email
                                    </p>
                                    <p className="text-xs text-gray-600 font-3"><a href="mailto:bharat@Jorwinservices.com">Jorwin.funding@Jorwinservices.in</a></p>
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
                               PMEGP
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

                {/* What is PMEGP */}
                <motion.section
                    ref={refPMEGP}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewPMEGP ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2
                            className="sub-heading text-white text-left font-2"

                        >
                            What Is PMEGP Scheme?
                        </h2>
                        <p className="paragraph !text-white mx-auto text-left font-3"

                        >
                            Prime Minister's Employment Generation Programme (PMEGP) is a flagship credit-linked
                            subsidy scheme launched by the Government of India to generate employment through
                            establishment of micro enterprises in manufacturing, service, and trading sectors.
                            The scheme provides financial assistance with government subsidy to promote
                            entrepreneurship among unemployed youth and traditional artisans.
                        </p>
                    </div>
                </motion.section>

                {/* PMEGP Funding Structure Section */}
                <motion.section
                    ref={refFundingStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                    >
                        PMEGP Funding Structure
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Manufacturing Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Factory className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3 font-2"

                                    >
                                        Manufacturing Sector
                                    </h3>
                                    <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Up to ₹25 Lakh</p>
                                        <p className="text-xs opacity-90">Maximum project cost</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-700 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>25% subsidy for General category</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>35% subsidy for SC/ST/OBC/Minorities</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Food processing, textiles, handicrafts</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Rural and urban areas covered</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Service/Trading Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFundingStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Briefcase className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3 font-2"

                                    >
                                        Service/Trading Sector
                                    </h3>
                                    <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Up to ₹10 Lakh</p>
                                        <p className="text-xs opacity-90">Maximum project cost</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-700 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>15% subsidy for General category</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>25% subsidy for SC/ST/OBC/Minorities</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>IT services, healthcare, education</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Urban areas only for trading</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* PMEGP Benefits Section */}
                <motion.section
                    ref={refPMEGPBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewPMEGPBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                    >
                        PMEGP Benefits & Eligibility
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base text-gray-600 text-center font-3"

                        >
                            PMEGP scheme offers comprehensive financial support with government subsidy to establish
                            micro enterprises and generate sustainable employment opportunities.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewPMEGPBenefits ? { y: 0, opacity: 1 } : {}}
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
                                        <span>Government subsidy of 15-35% on project cost.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>No collateral required for loans up to ₹10 lakh.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Flexible repayment terms with moratorium period.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Technical and marketing support provided.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Employment generation for local community.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewPMEGPBenefits ? { y: 0, opacity: 1 } : {}}
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
                                        <span>Individuals above 18 years of age.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Minimum 8th pass for project above ₹10 lakh.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Should not have availed subsidy under other schemes.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Self-help groups and institutions eligible.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Existing PMRY/REGP units can also apply.</span>
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
                        How Jorwin Helps You Get PMEGP Loan
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
                                    className="text-lg font-semibold text-gray-800 mb-2 font-3"

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
                        Why Choose Jorwin for PMEGP
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

export default memo(PMEGP);
