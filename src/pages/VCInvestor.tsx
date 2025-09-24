import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg"; // Assuming a similar background image for Venture Capital
import Contact from "../section/Contact";
import Image1 from "../assets/VentureCapital/Image1.png"; // Assuming a similar image for Venture Capital
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

const VentureCapital = () => {
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
            question: "1. What is Venture Capital?",
            answer:
                "Venture Capital (VC) is a form of private equity financing provided by VC firms or funds to startups and small businesses with high growth potential in exchange for equity.",
        },
        {
            question: "2. What is the investment range under Venture Capital?",
            answer:
                "VC investments typically range from ₹1 crore to ₹100 crore or more, depending on the funding stage (Seed, Series A, B, C) and the startup's valuation and needs.",
        },
        {
            question: "3. Who is eligible for Venture Capital funding?",
            answer:
                "Startups with proven business models, significant market traction, scalable products, strong teams, and high growth potential in sectors like tech, biotech, and fintech are eligible.",
        },
        {
            question: "4. What documents are required for Venture Capital application?",
            answer:
                "Required documents include detailed pitch deck, comprehensive business plan, financial statements and projections, cap table, legal documents, market research, and traction metrics.",
        },
        {
            question: "5. How many startups will Venture Capital support?",
            answer:
                "VC firms typically invest in a portfolio of 10 to 50 startups per fund, with the goal of achieving high returns from a few successful exits over the fund's lifecycle.",
        },
        {
            question: "6. What is the fund structure of Venture Capital?",
            answer:
                "VC funds are structured as limited partnerships with capital from institutional investors, managed by general partners who invest in startups over a 7 to 10 year period.",
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

    // What is Venture Capital
    const refVC = useRef(null);
    const isInViewVC = useInView(refVC, { once: true, amount: 0.4 });

    // Investment Structure
    const refInvestmentStructure = useRef(null);
    const isInViewInvestmentStructure = useInView(refInvestmentStructure, { once: true, amount: 0.4 });

    // VC Benefits
    const refVCBenefits = useRef(null);
    const isInViewVCBenefits = useInView(refVCBenefits, { once: true, amount: 0.4 });

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
                "We help you prepare detailed pitch decks, business plans, and financial models for attracting VC firms and ensuring due diligence readiness.",
        },
        {
            icon: Users,
            title: "Investment Facilitation",
            description:
                "Our team connects you with top VC firms and facilitates the funding process, including term sheet negotiations and compliance.",
        },
        {
            icon: Headset,
            title: "Growth Support",
            description:
                "We provide ongoing support for scaling your startup, leveraging VC funding for rapid expansion, hiring, and market penetration.",
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
            title: "Large-Scale Funding",
            description:
                "Access significant capital from ₹1 crore upwards through VC firms for accelerating growth and scaling operations.",
        },
        {
            icon: TrendingUp,
            title: "Strategic Guidance",
            description:
                "Benefit from VC expertise, board representation, and networks for strategic decision-making and business acceleration.",
        },
        {
            icon: Shield,
            title: "Market Validation",
            description:
                "Gain credibility and market validation through association with reputable VC firms, attracting further investments.",
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
                <Title>{seoData?.ventureCapitalService?.title}</Title> {/* Assuming SEO data for Venture Capital */}
                <Meta name="description" content={seoData?.ventureCapitalService?.description} />
                <Meta name="keywords" content={seoData?.ventureCapitalService?.keyword} />
                <Meta name="robots" content={seoData?.ventureCapitalService?.robots} />
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
                                Venture Capital
                            </span>{" "}
                            for High Growth Startups
                        </h1>
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl
                             leading-relaxed sm:leading-relaxed md:leading-relaxed
                             text-white lg:text-white
                             paragraph !text-white
                             max-w-none sm:max-w-lg md:max-w-xl font-3 lg:max-w-none mx-auto lg:mx-0"

                        >
                            Accelerate your startup's growth with venture capital support. Access substantial funding from professional investors to scale innovative businesses and achieve market leadership.
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
                                Apply for Venture Capital
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
                                    <p className="text-base text-gray-700 font-semibold font-3">
                                        Bharat Barot
                                    </p>
                                    <p className="text-xs text-gray-600 font-3">
                                        Vice President
                                        <br />

                                    </p>
                                </div>
                            </a>
                            <a
                                href="tel:+91 7486 952 087"
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
                                    <p className="text-xs text-gray-600 font-3"><a href="tel:+917486 952 087">+91 7486 952 087</a></p>
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
                                    <p className="text-xs text-gray-600 font-3"><a href="mailto:bharat@Jorwinservices.com">bharat@Jorwinservices.com</a></p>
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
                                VC Investor
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

                {/* What is Venture Capital */}
                <motion.section
                    ref={refVC}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewVC ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                        <h2
                            className="sub-heading font-2 text-white text-left"

                        >
                            What Is Venture Capital?
                        </h2>
                        <p className="paragraph font-3 !text-white mx-auto text-left"

                        >
                            Venture Capital is a type of financing that investors provide to startups and small businesses believed to have long term growth potential. VC firms manage pooled investments from various sources to fund promising companies in exchange for equity, often providing strategic guidance and resources to help them succeed.
                        </p>
                    </div>
                </motion.section>

                {/* Venture Capital Investment Structure Section */}
                <motion.section
                    ref={refInvestmentStructure}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                    >
                        Venture Capital Investment Structure
                    </h2>

                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Early-Stage Funding Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Leaf className="w-8 h-8 text-white" /> {/* Replace with relevant icon */}
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"

                                    >
                                        Early Stage Funding
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Seed/Series A</p>
                                        <p className="text-xs opacity-90">Initial growth capital</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Product development focus</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Market entry support</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Team building</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Proof of concept</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Growth-Stage Funding Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                        <Tractor className="w-8 h-8 text-white" /> {/* Replace with relevant icon */}
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h3
                                        className="text-xl font-2 font-bold text-gray-800 mb-3"

                                    >
                                        Growth Stage Funding
                                    </h3>
                                    <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                        <p className="text-2xl font-bold">Series B/C</p>
                                        <p className="text-xs opacity-90">Scaling capital</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-xs font-3 text-gray-700">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Market expansion</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Operational scaling</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Revenue growth</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Exit preparation</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* VC Benefits Section */}
                <motion.section
                    ref={refVCBenefits}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInViewVCBenefits ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="px-7 md:px-14 bg-[#f7f7f7] py-8"
                >
                    <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                    >
                        Venture Capital Benefits & Eligibility
                    </h2>
                    <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                        <p className="text-sm md:text-base text-gray-600 text-center font-3"

                        >
                            Venture Capital provides substantial funding, expert guidance, and valuable networks to high-potential startups, enabling rapid scaling and market dominance in innovative sectors.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewVCBenefits ? { y: 0, opacity: 1 } : {}}
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
                                        <span>Large funding rounds for expansion.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strategic advice and mentorship.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Access to industry networks.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Credibility for future funding.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Support for exits and IPOs.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInViewVCBenefits ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-4"
                            >
                                <h3
                                    className="text-lg font-semibold text-gray-800 font-2"

                                >
                                    Eligibility Criteria
                                </h3>
                                <ul className="space-y-2 font-3 text-sm text-gray-600">
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Registered companies with traction.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Scalable business models.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Strong market potential.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Experienced management team.</span>
                                    </li>
                                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                        <span>Clear path to profitability.</span>
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
                        How Jorwin Helps You Secure Venture Capital
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
                    <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                    >
                        Why Choose Jorwin for Venture Capital
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

export default memo(VentureCapital);
