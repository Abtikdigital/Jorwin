import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/PatentFilling/Patent.jpg";
import {
    Mail,
    User,
    Phone,

    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,
    Shield,

    Search,

    TrendingUp,
    Globe,
    Lock,
    Layers,
    Zap,
    Lightbulb,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const PatentFiling = () => {
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
            question: "1. What is a Patent?",
            answer:
                "A patent is an exclusive legal right granted for an invention, which is a product or process that offers a new technical solution to a problem. It gives the inventor control over making, using, selling, or licensing the invention for a fixed period.",
        },
        {
            question: "2. Why should I patent my invention?",
            answer:
                "Patenting provides exclusive commercial rights, prevents others from using your invention without consent, increases business value, attracts investors, and gives you the legal standing to enforce your rights.",
        },
        {
            question: "3. How long does the patent registration process take?",
            answer:
                "In India, patent registration typically takes 2–3 years with regular processing. Expedited options are available. The stages include application, examination request, publication, examination, and grant.",
        },
        {
            question: "4. What inventions can be patented?",
            answer:
                "Inventions must be novel, involve an inventive step, and be capable of industrial application. Software, business methods, and naturally occurring substances are generally not patentable unless they meet strict conditions.",
        },
        {
            question: "5. How long does patent protection last?",
            answer:
                "A granted patent is valid for 20 years from the filing date, subject to payment of annual renewal fees. After expiry, the invention goes into the public domain.",
        },
        {
            question: "6. What if someone uses my patented invention without permission?",
            answer:
                "You can take legal action against infringement, including seeking damages, injunctions, and stopping unauthorized manufacture or sale of the invention.",
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

    // What is Patent
    const refPatent = useRef(null);
    const isInViewPatent = useInView(refPatent, { once: true, amount: 0.1 });

    // Patent Types
    const refPatentTypes = useRef(null);
    const isInViewPatentTypes = useInView(refPatentTypes, { once: true, amount: 0.1 });

    // Patent Benefits
    const refPatentBenefits = useRef(null);
    const isInViewPatentBenefits = useInView(refPatentBenefits, { once: true, amount: 0.1 });

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
            icon: Search,
            title: "Prior Art Search",
            description:
                "We conduct thorough prior art and patentability searches to ensure your invention is novel and eligible for patenting.",
        },
        {
            icon: FileText,
            title: "Patent Drafting & Filing",
            description:
                "Our professionals draft strong patent specifications and file your application with the Indian Patent Office, ensuring all procedures are followed.",
        },
        {
            icon: Shield,
            title: "Prosecution & Grant Support",
            description:
                "We handle examination reports, respond to objections, and provide continuous support until your patent is granted and enforceable.",
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
            icon: Lock,
            title: "Monopoly Rights",
            description:
                "Gain exclusive rights to make, use, and sell your invention, ensuring you maintain a competitive advantage.",
        },
        {
            icon: TrendingUp,
            title: "Commercial Value",
            description:
                "Patents are assets that boost your company value, attract funding, and can be licensed or sold for revenue.",
        },
        {
            icon: Globe,
            title: "IP Protection Globally",
            description:
                "With Indian patent registration, leverage international conventions (like PCT) for global protection opportunities.",
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

    return (<>

        <HeadProvider>
            <Title>{seoData?.patentfillingService?.title}</Title>
            <Meta name="description" content={seoData?.patentfillingService?.description} />
            <Meta name="keywords" content={seoData?.patentfillingService?.keyword} />
            <Meta name="robots" content={seoData?.patentfillingService?.robots} />
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
                        Safeguard Your Invention with{" "}
                        <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                            Patent
                        </span>{" "}
                        Registration
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

                    >
                        Protect your innovations with expert patent filing and prosecution services.
                        Secure government-backed intellectual property rights and unlock commercial opportunities for your invention.
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
                            Start Patent Application
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
                            href="tel:+91 9898 043 284"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Call us at +91 98765 43210"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Phone className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base font-3 text-gray-700 font-semibold">
                                    Call Anytime
                                </p>
                                <p className="text-xs font-3 text-gray-600"><a href="tel:+9898043284">+91 9898 043 284</a></p>
                            </div>
                        </a>
                        <a
                            href="heer@abtikservices.co.in"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@abtik.com"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base font-3 text-gray-700 font-semibold">
                                    Write Email
                                </p>
                                <p className="text-xs font-3 text-gray-600"><a href="mailto:heer@abtikservices.co.in">heer@abtikservices.co.in</a></p>
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
                            Patent Filing
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

            {/* What is Patent */}
            <motion.section
                ref={refPatent}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewPatent ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading font-1 text-white text-left"

                    >
                        What Is Patent Registration?
                    </h2>
                    <p className="paragraph font-3 !text-white mx-auto text-left"

                    >
                        Patent registration secures exclusive legal rights to your novel invention, protecting your ideas against unauthorized manufacture, sale, or distribution. A granted patent fosters commercialization, supports R&D investments, and allows you to take legal action if your technology is copied. It is a powerful business asset for startups and established companies alike.
                    </p>
                </div>
            </motion.section>

            {/* Patent Types Section */}
            <motion.section
                ref={refPatentTypes}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewPatentTypes ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    Types of Patents
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Utility Patent */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewPatentTypes ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"

                                >
                                    Utility Patents
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">Functional Inventions</p>
                                    <p className="text-xs opacity-90">Products & Processes</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Mechanical, electrical, chemical devices</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Methods and manufacturing processes</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Most common patent type in India</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Protects technical innovations</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Design Patent */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewPatentTypes ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Layers className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"

                                >
                                    Design Patents
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">Aesthetic Designs</p>
                                    <p className="text-xs opacity-90">Product Appearance</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Protects ornamental appearance</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Does not cover technical features</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Applies to new shapes, patterns, packaging</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Helps stop design copying</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Provisional Patent */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewPatentTypes ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 }}
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
                                    Provisional Patents
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">Early Filing</p>
                                    <p className="text-xs opacity-90">Secure Priority</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Temporary application (valid for 12 months)</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Allows “patent pending” status</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Must file complete specification within a year</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Secures early priority over competitors</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Patent Benefits Section */}
            <motion.section
                ref={refPatentBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewPatentBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    Patent Benefits & Requirements
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm font-3 md:text-base text-gray-600 text-center"

                    >
                        Patent registration provides exclusive nationwide rights, creates a high entry barrier for competition, and enables monetary returns through licensing or sale, driving innovation and business growth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewPatentBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold font-2 text-gray-800"

                            >
                                Key Benefits
                            </h3>
                            <ul className="space-y-2 text-sm font-3 text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Exclusive rights to your invention for 20 years.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Commercialize, license, or sell your patent.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Legal protection from copying and unauthorized use.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Stronger business profile for fundraising.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Enhance reputation as an innovator.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewPatentBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-2 font-semibold text-gray-800"

                            >
                                Registration Requirements
                            </h3>
                            <ul className="space-y-2 font-3 text-sm text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Subject matter must be patentable by law.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Novelty: invention must be new.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Inventive step: must be non-obvious.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Industrial applicability.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Enablement: complete and clear disclosure.</span>
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
                    How Abtik Helps with Patent Registration
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
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    Why Choose Abtik for Patent Filing
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
                <h1 className="sub-heading font-2 bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"

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

export default memo(PatentFiling);
