import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Agrisure/AgrisureLatest.jpg";
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
    Leaf,
    Tractor,

} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const AgriSURE = () => {
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
            question: "1. What is AgriSURE scheme?",
            answer:
                "AgriSURE (Agri Fund for Startups & Rural Enterprises) is a ₹750 crore Category, II Alternative Investment Fund launched by the Government of India and NABARD to support innovative agritech startups and rural enterprises in agriculture and allied sectors.",
        },
        {
            question: "2. What is the investment range under AgriSURE?",
            answer:
                "AgriSURE provides investments up to ₹25 crore in a single startup. The fund has two schemes: AgriSURE,FoF (₹450 crore) for investing in other AIFs and AgriSURE, Direct (₹300 crore) for direct equity investments in early stage startups.",
        },
        {
            question: "3. Who is eligible for AgriSURE funding?",
            answer:
                "Early stage startups recognized by DPIIT and incorporated in India, working in agriculture & rural development sectors like Agritech, Food Processing, Animal husbandry, Fisheries, Supply Chain Management, Farm Mechanization, Biotechnology, and Climate change are eligible.",
        },
        {
            question: "4. What documents are required for AgriSURE application?",
            answer:
                "Required documents include DPIIT startup recognition certificate, detailed business plan, financial projections, incorporation documents, management team profiles, market analysis, technology details, and proof of agriculture/allied sector focus.",
        },
        {
            question: "5. How many startups will AgriSURE support?",
            answer:
                "AgriSURE is structured to support approximately 85 startups with investment sizes of up to ₹25 crore each by the end of its 10year operational period, which can be extended by two or more years.",
        },
        {
            question: "6. What is the fund structure of AgriSURE?",
            answer:
                "AgriSURE has a total corpus of ₹750 crore with ₹250 crore each contributed by the Government of India and NABARD, and ₹250 crore mobilized from banks, insurance companies, and private investors. It's managed by NABVENTURES.",
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

    // What is AgriSURE
    const refAgriSURE = useRef(null);
    const isInViewAgriSURE = useInView(refAgriSURE, { once: true, amount: 0.4 });

    // Investment Structure
    const refInvestmentStructure = useRef(null);
    const isInViewInvestmentStructure = useInView(refInvestmentStructure, { once: true, amount: 0.4 });

    // AgriSURE Benefits
    const refAgriSUREBenefits = useRef(null);
    const isInViewAgriSUREBenefits = useInView(refAgriSUREBenefits, { once: true, amount: 0.4 });

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
                "We help you prepare comprehensive business plans, financial models, and DPIIT registration for AgriSURE funding eligibility and application readiness.",
        },
        {
            icon: Users,
            title: "Investment Facilitation",
            description:
                "Our team connects you with NABVENTURES and facilitates the AgriSURE funding process, ensuring proper documentation and compliance with AIF regulations.",
        },
        {
            icon: Headset,
            title: "Growth Support",
            description:
                "We provide ongoing support for scaling your agritech startup, leveraging AgriSURE funding for technology development, market expansion, and rural impact.",
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
            title: "Up to ₹25 Crore Investment",
            description:
                "Access substantial funding up to ₹25 crore per startup through AgriSURE's ₹750 crore corpus for scaling your agritech innovation and rural enterprise.",
        },
        {
            icon: TrendingUp,
            title: "Government Backing",
            description:
                "Benefit from strong government and NABARD backing with SEBI registered Category,II AIF status, ensuring credibility and strategic support for growth.",
        },
        {
            icon: Shield,
            title: "Agricultural Focus",
            description:
                "Leverage specialized focus on agriculture and allied sectors with expert guidance from NABVENTURES and access to rural development networks.",
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
            <Title>{seoData?.agrisureService?.title}</Title>
            <Meta name="description" content={seoData?.agrisureService?.description} />
            <Meta name="keywords" content={seoData?.agrisureService?.keyword} />
            <Meta name="robots" content={seoData?.agrisureService?.robots} />
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
                            AgriSURE Funding
                        </span>{" "}
                        for Agritech Innovation
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"

                    >
                        Transform agriculture with AgriSURE funding support. Access up to ₹25 crore
                        investment from the ₹750 crore government fund for innovative agritech
                        startups and rural enterprises driving agricultural revolution.
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
                            Apply for AgriSURE
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
                                <p className="text-base font-2 text-gray-700 font-semibold ">
                                    Sumit Radadiya

                                </p>
                                <p className="text-xs font-2 text-gray-600">
                                    HOD-Sales Department
                                    <br />

                                </p>
                            </div>
                        </a>
                        <a
                            href="tel:+916358169584"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Call us at +91 98765 43210"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Phone className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base font-2 text-gray-700 font-semibold">
                                    Call Anytime
                                </p>
                                <p className="text-xs font-2 text-gray-600"><a href="tel:+917486 952 087">+91 6358 169 584</a></p>
                            </div>
                        </a>
                        <a
                            href="mailto:sumitradadiya@Jorwinservices.in"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@Jorwin.com"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base font-2 text-gray-700 font-semibold">
                                    Write Email
                                </p>
                                <p className="text-xs font-2 text-gray-600"><a href="mailto:sumitradadiya@Jorwinservices.in">sumitradadiya@Jorwinservices.in</a></p>
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
                Agrisure
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

            {/* What is AgriSURE */}
            <motion.section
                ref={refAgriSURE}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewAgriSURE ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading font-2 text-white text-left"

                    >
                        What Is AgriSURE Fund?
                    </h2>
                    <p className="paragraph font-3 !text-white mx-auto text-left"

                    >
                        AgriSURE (Agri Fund for Startups & Rural Enterprises) is a pioneering ₹750 crore
                        Category,II Alternative Investment Fund launched by the Government of India and NABARD
                        to revolutionize the agricultural landscape. This innovative fund focuses on supporting
                        technology driven, high risk, high impact ventures in agriculture and allied sectors,
                        providing both equity and debt financing to fuel growth and foster innovation in the
                        agricultural and rural startup ecosystem.
                    </p>
                </div>
            </motion.section>

            {/* AgriSURE Investment Structure Section */}
            <motion.section
                ref={refInvestmentStructure}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    AgriSURE Investment Structure
                </h2>

                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* AgriSURE-FoF Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
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
                                    AgriSURE,FoF Scheme
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">₹450 Crore</p>
                                    <p className="text-xs opacity-90">Fund of Funds corpus</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Invests in SEBI registered AIFs</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Maximum ₹25 crore in one AIF</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Sector specific and sector agnostic funds</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Category I and II AIF support</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* AgriSURE-Direct Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewInvestmentStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Tractor className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"

                                >
                                    AgriSURE Direct Scheme
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">₹300 Crore</p>
                                    <p className="text-xs opacity-90">Direct investment corpus</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Direct equity investment in startups</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Up to ₹25 crore per startup</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>DPIIT recognized startups eligible</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Early stage focus with growth potential</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* AgriSURE Benefits Section */}
            <motion.section
                ref={refAgriSUREBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewAgriSUREBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    AgriSURE Benefits & Eligibility
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm font-3 md:text-base text-gray-600 text-center"

                    >
                        AgriSURE provides comprehensive support to agricultural startups and rural enterprises
                        through substantial funding, strategic guidance, and access to agricultural value chains
                        for transforming India's agricultural landscape.[22]
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewAgriSUREBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-2 font-semibold text-gray-800"

                            >
                                Key Benefits
                            </h3>
                            <ul className="space-y-2 font-3 text-sm text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Investment up to ₹25 crore per startup.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Government and NABARD backing for credibility.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>SEBI registered Category,II AIF status.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Access to rural development networks.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Ten year fund duration with extension possibility.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewAgriSUREBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-2 font-semibold text-gray-800"

                            >
                                Eligibility Criteria
                            </h3>
                            <ul className="space-y-2 font-3 text-sm text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>DPIIT recognized startups incorporated in India.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Focus on agriculture and allied sectors.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Agritech, food processing, and rural development.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Technology driven innovative solutions.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>High impact agricultural transformation potential.</span>
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
                    How Jorwin Helps You Secure AgriSURE Funding
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
                                className="text-lg font-semibold font-2 text-gray-800 mb-2"

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
                    Why Choose Jorwin for AgriSURE
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

export default memo(AgriSURE);
