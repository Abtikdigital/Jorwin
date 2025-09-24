import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Fssai/Fssai.jpg";
import {
    Mail,
    User,
    Phone,
    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,
    Shield,
    Clock,
    Award,
    Building,
    BookOpen,
    AlertCircle,
    Star,
    Globe,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";

const FSSAILicense = () => {
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
            question: "1. What is an FSSAI License and why do I need it?",
            answer:
                "FSSAI License is mandatory for all food businesses in India. It ensures food safety standards and is required by law under the Food Safety and Standards Act, 2006. Without it, you cannot legally operate any food related business.",
        },
        {
            question: "2. What are the different types of FSSAI licenses?",
            answer:
                "There are three types: Basic Registration (turnover up to ₹12 lakhs), State License (turnover ₹12 lakhs to ₹20 crores), and Central License (turnover above ₹20 crores or specific categories like importers, manufacturers of certain products).",
        },
        {
            question: "3. What documents are required for FSSAI registration?",
            answer:
                "You need Form A/B application, ID proof, address proof, NOC from municipality/gram panchayat, water test report, layout plan of premises, list of food products, and partnership deed/MOA (if applicable).",
        },
        {
            question: "4. How long does it take to get an FSSAI License?",
            answer:
                "Basic Registration: 7,10 days, State License: 15,30 days, Central License: 30,60 days. Processing time may vary based on completeness of documents and verification requirements.",
        },
        {
            question: "5. What is the validity and renewal process?",
            answer:
                "FSSAI licenses are valid for 1,5 years based on your choice. Renewal applications should be submitted 30 days before expiry. Late renewals attract penalties and may require fresh applications in extreme cases.",
        },
        {
            question:
                "6. What are the penalties for operating without FSSAI License?",
            answer:
                "Operating without FSSAI license can result in fines up to ₹5 lakhs, imprisonment up to 6 months, or both. The business may also be shut down by food safety officers.",
        },
    ];

    const toggleIsExpanded = (index: any) => {
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

    // License Types
    const refLicenseTypes = useRef(null);
    const isInViewLicenseTypes = useInView(refLicenseTypes, {
        once: true,
        amount: 0.1,
    });

    // Benefits & Requirements
    const refBenefits = useRef(null);
    const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });

    // Process Steps
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

    // Why Choose Jorwin
    const refWhyChoose = useRef(null);
    const isInViewWhyChoose = useInView(refWhyChoose, {
        once: true,
        amount: 0.1,
    });
    const [whyChooseCols, setWhyChooseCols] = useState(1);
    useEffect(() => {
        const updateCols = () => setWhyChooseCols(window.innerWidth >= 768 ? 3 : 1);
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getWhyChooseDelay = (index: any) => {
        const row = Math.floor(index / whyChooseCols);
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
            title: "Document Preparation",
            description:
                "Gather all required documents including business registration, premises details, and identity proofs for FSSAI application.",
        },
        {
            icon: BookOpen,
            title: "FSSAI Application Filing",
            description:
                "Submit the appropriate FSSAI form (Basic/State/Central) with complete documentation through online portal or offline process.",
        },
        {
            icon: Shield,
            title: "License Approval & Compliance",
            description:
                "Track application status, receive your FSSAI license, and get guidance on ongoing compliance requirements and renewals.",
        },
    ];

    // === Why Choose Jorwin Cards ===
    const whyChooseData = [
        {
            icon: Shield,
            title: "Legal Compliance",
            description:
                "Ensure full compliance with Indian food safety laws and avoid penalties, fines, or business closure.",
        },
        {
            icon: Award,
            title: "Consumer Trust",
            description:
                "Build customer confidence with official FSSAI license display, showing commitment to food safety standards.",
        },
        {
            icon: Clock,
            title: "Quick Processing",
            description:
                "Get expert assistance for faster license approval with proper documentation and compliance guidance.",
        },
    ];

    // === Main JSX ===
    return (
        <>
            <HeadProvider>
                <Title>
                    {seoData?.fssaiLicenseService?.title ||
                        "FSSAI License Registration  Get Food License Online | Jorwin"}
                </Title>
                <Meta
                    name="description"
                    content={
                        seoData?.fssaiLicenseService?.description ||
                        "Get FSSAI License registration online with Jorwin. Expert assistance for Basic Registration, State License & Central License. Fast approval, complete documentation support."
                    }
                />
                <Meta
                    name="keywords"
                    content={
                        seoData?.fssaiLicenseService?.keyword ||
                        "FSSAI license, food license, FSSAI registration, food safety license, FSSAI online application"
                    }
                />
                <Meta
                    name="robots"
                    content={seoData?.fssaiLicenseService?.robots || "index, follow"}
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
                        className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
                        space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                        text-center lg:text-left"
                    >
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight font-1 text-white lg:text-inherit tracking-wide main-heading"
                        >
                            Get Your{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                FSSAI Food License
                            </span>{" "}
                            Fast & Easy
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none font-3 sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
                        >
                            Secure your FSSAI License for legal food business operations.
                            Expert guidance for Basic Registration, State License, and Central
                            License with complete documentation support.
                        </p>
                        <div className="pt-2 sm:pt-4">
                            <button
                                onClick={handleOpenDialog}
                                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 transition-transform duration-300 shadow-lg hover:shadow-xl"
                            >
                                Apply for FSSAI License
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
                        <h3 className="text-lg font-2 sm:text-xl font-semibold text-gray-800 mb-4">
                            Get in Touch
                        </h3>
                        <div className="space-y-4">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                                aria-label="Contact our representative"
                            >
                                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <User className="w-5 h-5 text-white" />
                                </span>
                                <div>
                                    <p className="text-base font-3 text-gray-700 font-semibold">
                                        Sumit Radadiya
                                    </p>
                                    <p className="text-xs font-3 text-gray-600">
                                        HOD-Sales Department
                                        <br />
                                    </p>
                                </div>
                            </a>
                            <a
                                href="tel:+916358169584"
                                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                                aria-label="Call us at +91 6358 169 584"
                            >
                                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Phone className="w-5 h-5 text-white" />
                                </span>
                                <div>
                                    <p className="text-base font-3 text-gray-700 font-semibold">
                                        Call Anytime
                                    </p>
                                    <p className="text-xs font-3 text-gray-600">
                                        <a href="tel:+916358169584">+91 6358 169 584</a>
                                    </p>
                                </div>
                            </a>
                            <a
                                href="mailto:sumitradadiya@Jorwinservices.in"
                                className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                                aria-label="Email us at sumitradadiya@Jorwinservices.in"
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
                                Fssai Liecence
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

                {/* What is FSSAI License */}
                <motion.section
                    ref={refAbout}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewAbout ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2 className="sub-heading font-2 text-white text-left">
                            What Is FSSAI License?
                        </h2>
                        <p className="paragraph font-3 !text-white mx-auto text-left">
                            FSSAI (Food Safety and Standards Authority of India) License is a
                            mandatory certification for all food businesses in India. It
                            ensures compliance with food safety standards and regulations.
                            Whether you're running a restaurant, manufacturing food products,
                            or selling food items, FSSAI registration is legally required. Let
                            Jorwin handle your FSSAI license application process with expert
                            guidance and complete documentation support.
                        </p>
                    </div>
                </motion.section>

                {/* FSSAI License Types Section */}
                <motion.section
                    ref={refLicenseTypes}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewLicenseTypes ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        Types of FSSAI Licenses
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Basic Registration Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewLicenseTypes ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-2 font-bold text-gray-800 mb-3">
                                        Basic Registration
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-lg font-bold">Up to ₹12 Lakhs</p>
                                        <p className="text-xs opacity-90">Annual Turnover</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Small food businesses & vendors</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Home based food operators</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Local food retailers</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Fee: ₹100 for 1 year</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* State License Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewLicenseTypes ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Building className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-2 font-bold text-gray-800 mb-3">
                                        State License
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-lg font-bold">₹12L to ₹20 Cr</p>
                                        <p className="text-xs opacity-90">Annual Turnover</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Medium food businesses</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Restaurants & food services</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Food manufacturers</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Fee: ₹2,000 to 7,500</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Central License Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewLicenseTypes ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold font-2 text-gray-800 mb-3">
                                        Central License
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-lg font-bold">Above ₹20 Cr</p>
                                        <p className="text-xs opacity-90">Annual Turnover</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Large manufacturers</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Importers & exporters</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Multi state operations</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Fee: ₹7,500 to 10,000</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* FSSAI Benefits & Requirements */}
                <motion.section
                    ref={refBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        FSSAI Benefits & Requirements
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm font-3 md:text-base text-gray-600 text-center">
                            FSSAI license provides legal authorization to operate food
                            businesses in India, ensuring compliance with food safety
                            standards while building customer trust and enabling business
                            growth opportunities.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-2 font-semibold text-gray-800">
                                    Key Benefits
                                </h3>
                                <ul className="space-y-2 font-3 text-sm text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Legal authorization to operate food business</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Enhanced customer trust and credibility</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Access to government tenders and contracts</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Bank loan eligibility for food businesses</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Protection from legal penalties and fines</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-2 font-semibold text-gray-800">
                                    Required Documents
                                </h3>
                                <ul className="space-y-2 font-3 text-sm text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Form A/B application (as applicable)</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Identity and address proof of applicant</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>NOC from municipality/gram panchayat</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Water testing report from approved lab</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Layout plan of premises with dimensions</span>
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        How Jorwin Helps with FSSAI License
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
                                <h3 className="text-lg font-2 font-semibold text-gray-800 mb-2">
                                    {process.title}
                                </h3>
                                <p className="text-sm font-3 text-gray-600">
                                    {process.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Why Choose Jorwin Section */}
                <motion.section
                    ref={refWhyChoose}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        Why Choose Jorwin for FSSAI License
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {whyChooseData?.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: getWhyChooseDelay(index) }}
                                className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-3 font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm font-3 text-gray-600">
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
                    className="bg-[#f7f7f7] py-8 md:py-16 space-y-6"
                >
                    <h1 className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <div className="px-6 font-3 md:px-24 space-y-4">
                        {faq.map((data, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
                            >
                                <h2
                                    className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between text-base font-medium ${isExpanded.isOpen && isExpanded.index === index
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

export default memo(FSSAILicense);
