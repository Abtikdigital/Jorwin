import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg"; // Assuming a similar background image for Angel Investor
import Contact from "../section/Contact";
import Image1 from "../assets/AngelInvestor/Image1.png"; // Assuming a similar image for Angel Investor
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
    Leaf, // Can replace with relevant icon if needed
    Tractor, // Can replace with relevant icon if needed
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";

const AngelInvestor = () => {
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
            question: "1. What is Angel Investment?",
            answer:
                "Angel investment involves high net worth individuals providing capital to startups in exchange for equity or convertible debt, typically in early stages to help launch and grow innovative businesses.",
        },
        {
            question: "2. What is the investment range for Angel Investors?",
            answer:
                "Angel investors typically invest between ₹5 lakh to ₹5 crore per startup, depending on the business potential, stage, and investor's risk appetite.",
        },
        {
            question: "3. Who is eligible for Angel Investment?",
            answer:
                "Early stage startups with innovative ideas, strong teams, scalable business models, and high growth potential in sectors like technology, healthcare, fintech, and more are eligible.",
        },
        {
            question:
                "4. What documents are required for Angel Investment application?",
            answer:
                "Required documents include pitch deck, business plan, financial projections, incorporation documents, management team profiles, market analysis, and proof of concept or MVP.",
        },
        {
            question: "5. How many startups do Angel Investors support?",
            answer:
                "Angel investors may support multiple startups annually, with networks like Indian Angel Network investing in 10 to 20 deals per year, providing both funding and mentorship.",
        },
        {
            question: "6. What is the structure of Angel Investment?",
            answer:
                "Angel investments are typically structured as equity, convertible notes, or SAFE agreements, with investors often forming syndicates to pool resources and share risks.",
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
    const isInViewHero = useInView(refHero, { once: true, amount: 0.4 });

    // Get In Touch
    const refTouch = useRef(null);
    const isInViewTouch = useInView(refTouch, { once: true, amount: 0.4 });
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

    // What is Angel Investment
    const refAngel = useRef(null);
    const isInViewAngel = useInView(refAngel, { once: true, amount: 0.4 });

    // Investment Structure
    const refInvestmentStructure = useRef(null);
    const isInViewInvestmentStructure = useInView(refInvestmentStructure, {
        once: true,
        amount: 0.4,
    });

    // Angel Benefits
    const refAngelBenefits = useRef(null);
    const isInViewAngelBenefits = useInView(refAngelBenefits, {
        once: true,
        amount: 0.4,
    });

    // Jorwin Process
    const refProcess = useRef(null);
    const isInViewProcess = useInView(refProcess, { once: true, amount: 0.4 });
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
            title: "Startup Preparation",
            description:
                "We help you prepare comprehensive pitch decks, business plans, and financial models for attracting angel investors and ensuring application readiness.",
        },
        {
            icon: Users,
            title: "Investor Facilitation",
            description:
                "Our team connects you with angel investor networks and facilitates the funding process, ensuring proper documentation and pitch presentation.",
        },
        {
            icon: Headset,
            title: "Growth Support",
            description:
                "We provide ongoing support for scaling your startup, leveraging angel funding for product development, market expansion, and business growth.",
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
            title: "Flexible Investment Amounts",
            description:
                "Access funding from ₹5 lakh to ₹5 crore per startup through angel investors for scaling your innovation and business operations.",
        },
        {
            icon: TrendingUp,
            title: "Mentorship & Networking",
            description:
                "Benefit from experienced investors providing guidance, industry connections, and strategic support for business growth.",
        },
        {
            icon: Shield,
            title: "Early-Stage Focus",
            description:
                "Leverage specialized support for early stage startups with high growth potential, including validation and market access.",
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

    return (
        <>
            <HeadProvider>
                <Title>{seoData?.angelInvestorService?.title}</Title>{" "}
                {/* Assuming SEO data for Angel Investor */}
                <Meta
                    name="description"
                    content={seoData?.angelInvestorService?.description}
                />
                <Meta name="keywords" content={seoData?.angelInvestorService?.keyword} />
                <Meta name="robots" content={seoData?.angelInvestorService?.robots} />
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
                            Secure{" "}
                            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                                Angel Investment
                            </span>{" "}
                            for Startup Growth
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                             leading-relaxed sm:leading-relaxed md:leading-relaxed
                             text-white lg:text-white
                             paragraph !text-white
                             max-w-none sm:max-w-lg font-2 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
                        >
                            Fuel your startup journey with angel investment support. Access
                            flexible funding from experienced investors to launch innovative
                            ideas and drive business expansion.
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
                                Apply for Angel Investment
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
                        <h3 className="text-lg sm:text-xl font-2 font-semibold text-gray-800 mb-4">
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
                                    <p className="text-base text-gray-700 font-3 font-semibold ">
                                        Bharat Barot
                                    </p>
                                    <p className="text-xs text-gray-600 font-3">
                                        Vice President
                                        <br />
                                    </p>
                                </div>
                            </a>
                            <a
                                href="tel:++91 7486 952 087"
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
                                        <a href="tel:+917486 952 087">+91 7486 952 087</a>
                                    </p>
                                </div>
                            </a>
                            <a
                                href="mailto:bharat@Jorwinservices.com"
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
                                    <p className="text-xs text-gray-600 font-3">
                                        <a href="mailto:bharat@Jorwinservices.com">
                                            bharat@Jorwinservices.com
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
                                Angel Investor
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

                {/* What is Angel Investment */}
                <motion.section
                    ref={refAngel}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewAngel ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2 className="sub-heading text-white text-left font-2">
                            What Is Angel Investment?
                        </h2>
                        <p className="paragraph !text-white mx-auto text-left  font-3">
                            Angel investment refers to funding provided by affluent
                            individuals to startups and small businesses, often in exchange
                            for ownership equity or convertible debt. These investors support
                            early stage companies with high growth potential, offering not
                            just capital but also mentorship and industry connections to
                            foster innovation and business development.
                        </p>
                    </div>
                </motion.section>

                {/* Angel Investment Structure Section */}
                <motion.section
                    ref={refInvestmentStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        Angel Investment Structure
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Equity Investment Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={
                                    isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Leaf className="w-8 h-8 text-white" />{" "}
                                        {/* Replace with relevant icon */}
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-2">
                                        Equity Investment
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Ownership Stake</p>
                                        <p className="text-xs opacity-90">
                                            Direct equity in startup
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Investors receive shares</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>High risk reward potential</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Long term commitment</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Board seat possible</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Convertible Debt Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={
                                    isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Tractor className="w-8 h-8 text-white" />{" "}
                                        {/* Replace with relevant icon */}
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold font-2 text-gray-800 mb-3">
                                        Convertible Debt
                                    </h3>
                                    <div className="bg-gradient-to-r from-[#052EAA] font-3 to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Flexible Terms</p>
                                        <p className="text-xs opacity-90">Converts to equity</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-700 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Initial loan structure</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Converts at future valuation</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Discount rates apply</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Lower initial risk</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Angel Benefits Section */}
                <motion.section
                    ref={refAngelBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewAngelBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        Angel Investment Benefits & Eligibility
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base font-3 text-gray-600 text-center">
                            Angel investment provides essential early stage funding,
                            mentorship, and networks to startups, helping them validate ideas
                            and achieve rapid growth in competitive markets.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewAngelBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 font-2">
                                    Key Benefits
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Flexible funding amounts for early growth.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Expert mentorship and industry connections.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Validation of business model.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Access to investor networks.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Potential for follow on funding.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewAngelBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 font-2">
                                    Eligibility Criteria
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 font-3">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Registered startups with innovative ideas.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strong founding team.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Scalable business model.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Proof of concept or MVP.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>High growth potential.</span>
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
                        How Jorwin Helps You Secure Angel Investment
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
                                <p className="text-sm text-gray-600 font-3">
                                    {process.description}
                                </p>
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
                        Why Choose Jorwin for Angel Investment
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
                                <h3 className="text-lg font-2 font-semibold text-gray-800 mb-2">
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
                    className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6"
                >
                    <h1 className="sub-heading font-2 bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <div className="px-6 font-3 md:px-24 space-y-4 ">
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

export default memo(AngelInvestor);
