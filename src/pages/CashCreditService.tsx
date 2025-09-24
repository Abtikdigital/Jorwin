import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/CashCredit/CashCredit.jpg";
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
    CreditCard,

    Wallet,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const CashCredit = () => {
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
            question: "1. What is Cash Credit facility?",
            answer:
                "Cash Credit is a flexible working capital facility that allows businesses to withdraw funds up to a sanctioned limit as and when required. It's a revolving credit facility where businesses pay interest only on the amount utilized, making it ideal for managing day-to-day operational expenses and cash flow fluctuations.",
        },
        {
            question: "2. What is the maximum limit for Cash Credit?",
            answer:
                "Cash Credit limits typically range from ₹1 lakh to ₹50 crore, depending on the business size, turnover, financial strength, and lender policies. The limit is determined based on the borrower's working capital requirements and repayment capacity.",
        },
        {
            question: "3. Who is eligible for Cash Credit facility?",
            answer:
                "Eligible borrowers include proprietorships, partnerships, private limited companies, public limited companies, and other business entities with minimum 2to3 years of operations, good credit history, positive cash flows, and adequate security/collateral as required by the lender.",
        },
        {
            question: "4. What documents are required for Cash Credit application?",
            answer:
                "Required documents include business registration certificate, financial statements for last 2to3 years, bank statements, income tax returns, GST returns, project report, collateral documents, KYC documents of promoters, and auditor's certificate for working capital assessment.",
        },
        {
            question: "5. How is interest calculated on Cash Credit?",
            answer:
                "Interest on Cash Credit is calculated on daily outstanding balance basis. You pay interest only on the amount utilized, not on the entire sanctioned limit. Interest rates typically range from 9-18% per annum, depending on the borrower profile and market conditions.",
        },
        {
            question: "6. What is the difference between Cash Credit and Term Loan?",
            answer:
                "Cash Credit is a revolving facility for working capital needs where you can withdraw and repay multiple times within the limit, paying interest only on utilized amount. Term Loan is a fixed amount disbursed upfront with predetermined EMI repayments for specific purposes like asset purchase or expansion.",
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

    // What is Cash Credit
    const refCashCredit = useRef(null);
    const isInViewCashCredit = useInView(refCashCredit, { once: true, amount: 0.1 });

    // Credit Structure
    const refCreditStructure = useRef(null);
    const isInViewCreditStructure = useInView(refCreditStructure, { once: true, amount: 0.1 });

    // Cash Credit Benefits
    const refCashCreditBenefits = useRef(null);
    const isInViewCashCreditBenefits = useInView(refCashCreditBenefits, { once: true, amount: 0.1 });

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
            title: "Working Capital Assessment",
            description:
                "We analyze your business cash flow cycles, inventory requirements, and working capital needs to determine the optimal Cash Credit limit for your operations.",
        },
        {
            icon: Users,
            title: "Bank Partnership",
            description:
                "Our team connects you with leading banks and financial institutions offering competitive Cash Credit rates and flexible terms suited to your business profile.",
        },
        {
            icon: Headset,
            title: "Facility Management",
            description:
                "We provide ongoing support for limit enhancements, renewal processes, and help optimize your Cash Credit utilization for maximum efficiency.",
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
            title: "Flexible Credit Limit",
            description:
                "Access Cash Credit facilities from ₹1 lakh to ₹50 crore with the flexibility to withdraw and repay multiple times within your sanctioned limit.",
        },
        {
            icon: TrendingUp,
            title: "Pay Only for Usage",
            description:
                "Enjoy cost effective financing by paying interest only on the amount utilized, not on the entire sanctioned limit, optimizing your interest costs.",
        },
        {
            icon: Shield,
            title: "Revolving Credit Facility",
            description:
                "Benefit from continuous access to working capital with revolving credit that replenishes as you repay, ensuring uninterrupted business operations.",
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
            <Title>{seoData?.cashCreditService?.title}</Title>
            <Meta name="description" content={seoData?.cashCreditService?.description} />
            <Meta name="keywords" content={seoData?.cashCreditService?.keyword} />
            <Meta name="robots" content={seoData?.cashCreditService?.robots} />
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
                        Access{" "}
                        <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                            Cash Credit
                        </span>{" "}
                        Working Capital
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl font-3 lg:max-w-none mx-auto lg:mx-0 font-3"
                       
                    >
                        Manage your business cash flow with flexible Cash Credit facilities.
                        Withdraw funds as needed up to ₹50 crore limit and pay interest
                        only on the amount utilized for optimal working capital management.
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
                            Apply for Cash Credit
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
                                <p className="text-base text-gray-700 font-semibold font-3  ">
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
                                <p className="text-base font-3 text-gray-700 font-semibold font-3">
                                    Call Anytime
                                </p>
                                <p className="text-xs font-3 text-gray-600 font-3"><a href="tel:+917486 952 087">+91 7486 952 087</a></p>
                            </div>
                        </a>
                        <a
                            href="mailto:bharat@abtikservices.com"
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
                                <p className="text-xs text-gray-600 font-3"><a href="mailto:bharat@abtikservices.com">bharat@abtikservices.com</a></p>
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
                                Cash Credit
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

            {/* What is Cash Credit */}
            <motion.section
                ref={refCashCredit}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCashCredit ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading font-2 text-white text-left"
                       
                    >
                        What Is Cash Credit Facility?
                    </h2>
                    <p className="paragraph font-3 !text-white mx-auto text-left"
                       
                    >
                        Cash Credit is a revolving working capital facility that provides businesses with
                        flexible access to funds up to a sanctioned limit. Unlike term loans, businesses
                        can withdraw, repay, and re-withdraw funds multiple times within the approved limit,
                        paying interest only on the amount utilized. This makes it an ideal solution for
                        managing seasonal cash flow variations, inventory purchases, and day to day
                        operational expenses while maintaining optimal cost efficiency.
                    </p>
                </div>
            </motion.section>

            {/* Cash Credit Structure Section */}
            <motion.section
                ref={refCreditStructure}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCreditStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
               
                >
                    Cash Credit Facility Types
                </h2>

                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Secured Cash Credit Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCreditStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <CreditCard className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"
                                   
                                >
                                    Secured Cash Credit
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">₹5Lto₹50Cr</p>
                                    <p className="text-xs opacity-90">With collateral security</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Lower interest rates (9to14% per annum)</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Higher credit limits available</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Collateral: Property, inventory, receivables</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Longer-term facility arrangements</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Unsecured Cash Credit Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCreditStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Wallet className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold font-2 text-gray-800 mb-3"
                                   
                                >
                                    Unsecured Cash Credit
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">₹1Lto₹2Cr</p>
                                    <p className="text-xs opacity-90">No collateral required</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Quick approval (7to15 days)</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>No collateral security required</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Based on business cash flows and credit history</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Flexible documentation requirements</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Cash Credit Benefits Section */}
            <motion.section
                ref={refCashCreditBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCashCreditBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                  
                >
                    Cash Credit Benefits & Requirements
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm md:text-base font-3 text-gray-600 text-center"
                        
                    >
                        Cash Credit facilities provide the ultimate flexibility in working capital management,
                        allowing businesses to optimize their cash flow and interest costs while maintaining
                        operational efficiency throughout business cycles.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCashCreditBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-2 font-semibold text-gray-800"
                                
                            >
                                Key Benefits
                            </h3>
                            <ul className="space-y-2 text-sm font-3 text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Revolving credit facility with flexible withdrawals.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Interest charged only on utilized amount.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>No prepayment penalties on early repayments.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Suitable for seasonal business fluctuations.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Can be renewed annually based on performance.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCashCreditBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold font-2 text-gray-800"
                               
                            >
                                Eligibility Requirements
                            </h3>
                            <ul className="space-y-2 text-sm font-3 text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Minimum 2to3 years business operations.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Good credit score and repayment history.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Positive cash flows and profitability.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Adequate collateral for secured facilities.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Regular business activity and turnover.</span>
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
                    How Abtik Helps You Get Cash Credit
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
                    Why Choose Abtik for Cash Credit
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
                <h1 className="sub-heading font-2 bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                   
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

export default memo(CashCredit);
