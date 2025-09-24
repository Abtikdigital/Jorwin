import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Grants/goverment grants.jpg";
import {
    Mail,
    User,
    Phone,
    Headset,
    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,

    Users,

    Globe,
    Award,
    Zap,
    Target,
    BookOpen,
    Calculator,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const Grants = () => {
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
            question: "1. What are government grants and how do they work?",
            answer:
                "Government grants are financial assistance provided by government agencies to support specific projects, research, or business activities. Unlike loans, grants don't need to be repaid if you meet the specified conditions and deliverables outlined in the grant agreement.",
        },
        {
            question: "2. Who is eligible for government grants?",
            answer:
                "Eligibility varies by grant type but typically includes startups, SMEs, research institutions, NGOs, and individuals working on innovative projects. Common criteria include business registration, project viability, compliance with grant guidelines, and meeting specific sector requirements.",
        },
        {
            question: "3. What documents are required for grant applications?",
            answer:
                "Required documents typically include business registration certificates, project proposals, financial statements, bank details, Aadhaar/PAN cards, GST registration, audited accounts, and specific technical documentation depending on the grant category.",
        },
        {
            question: "4. How long does the grant approval process take?",
            answer:
                "Grant approval timelines vary from 30 days to 6 months depending on the grant scheme, application complexity, and review process. Research grants and large funding schemes typically take longer than standard business grants.",
        },
        {
            question: "5. Can I apply for multiple grants simultaneously?",
            answer:
                "Yes, you can apply for multiple grants provided there's no overlap in funding for the same project or activity. However, you must disclose other grant applications and ensure compliance with each scheme's terms and conditions.",
        },
        {
            question: "6. What happens if I don't utilize the grant properly?",
            answer:
                "Improper utilization can lead to grant recovery, penalties, blacklisting from future schemes, and legal action. It's crucial to maintain proper documentation, follow utilization guidelines, and submit required reports on time.",
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

    // What are Grants
    const refGrantsInfo = useRef(null);
    const isInViewGrantsInfo = useInView(refGrantsInfo, { once: true, amount: 0.1 });

    // Grant Categories
    const refGrantCategories = useRef(null);
    const isInViewGrantCategories = useInView(refGrantCategories, { once: true, amount: 0.1 });

    // Grant Benefits
    const refGrantBenefits = useRef(null);
    const isInViewGrantBenefits = useInView(refGrantBenefits, { once: true, amount: 0.1 });

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
            icon: Target,
            title: "Grant Identification",
            description:
                "We identify the most suitable grant schemes for your business or project based on your sector, requirements, and eligibility criteria.",
        },
        {
            icon: FileText,
            title: "Application Preparation",
            description:
                "Our experts prepare comprehensive grant applications with detailed project proposals, financial projections, and supporting documentation.",
        },
        {
            icon: Headset,
            title: "Post-Approval Support",
            description:
                "We provide ongoing support for grant utilization, compliance reporting, milestone tracking, and renewal applications.",
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
            icon: BookOpen,
            title: "Expert Grant Knowledge",
            description:
                "Our team has extensive experience in various grant schemes and understands the nuances of different funding programs and their requirements.",
        },
        {
            icon: Calculator,
            title: "High Success Rate",
            description:
                "We have a proven track record of successful grant applications with detailed project planning and comprehensive documentation.",
        },
        {
            icon: Users,
            title: "End to End Support",
            description:
                "From initial consultation to grant utilization and reporting, we provide complete assistance throughout the grant lifecycle.",
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
            <Title>{seoData?.grantsService?.title}</Title>
            <Meta name="description" content={seoData?.grantsService?.description} />
            <Meta name="keywords" content={seoData?.grantsService?.keyword} />
            <Meta name="robots" content={seoData?.grantsService?.robots} />
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
                            Government Grants
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
                        Access a wide range of government grants and funding schemes designed to
                        support business growth, innovation, research, and development across various sectors.
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
                            Explore Grant Opportunities
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
                                Grants
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

            {/* What are Government Grants */}
            <motion.section
                ref={refGrantsInfo}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewGrantsInfo ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading text-white text-left font-2"

                    >
                        What Are Government Grants?
                    </h2>
                    <p className="paragraph !text-white mx-auto text-left font-3"

                    >
                        Government grants are financial assistance programs provided by central and state
                        governments to support businesses, startups, research institutions, and individuals
                        in achieving specific objectives. These non repayable funds are designed to promote
                        innovation, economic growth, social development, and technological advancement across
                        various sectors including agriculture, manufacturing, IT, healthcare, and renewable energy.
                    </p>
                </div>
            </motion.section>

            {/* Grant Categories Section */}
            <motion.section
                ref={refGrantCategories}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewGrantCategories ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    Types of Government Grants
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Startup Grants Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGrantCategories ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
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
                                    Startup & Innovation Grants
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">₹10L to ₹50L</p>
                                    <p className="text-xs opacity-90">Funding Range</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Startup India Seed Fund Scheme</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>BIRAC BioNEST and other biotech grants</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Technology Business Incubators support</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Innovation challenges and competitions</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Research Grants Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGrantCategories ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"

                                >
                                    Research & Development
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">₹25L to ₹2Cr</p>
                                    <p className="text-xs opacity-90">Funding Range</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>SERB research grants and fellowships</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>DST technology development programs</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>CSIR industrial research support</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Academic and industry collaboration grants</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Sector Specific Grants Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGrantCategories ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-2 font-bold text-gray-800 mb-3"

                                >
                                    Sector Specific Grants
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-lg font-bold">₹5L to ₹5Cr</p>
                                    <p className="text-xs opacity-90">Funding Range</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs font-3 text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Agriculture and allied sector schemes</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Renewable energy and clean tech grants</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Textile, handicrafts, and MSME support</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Healthcare and pharmaceutical schemes</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Grant Benefits Section */}
            <motion.section
                ref={refGrantBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewGrantBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"

                >
                    Government Grant Benefits & Features
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm md:text-base font-3 text-gray-600 text-center"

                    >
                        Government grants provide non-repayable financial assistance to eligible
                        businesses and organizations, enabling growth, innovation, and social impact
                        without the burden of debt repayment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGrantBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 font-2"

                            >
                                Key Advantages
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>No repayment required if conditions are met.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Substantial funding for business expansion.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Government credibility and validation.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Access to government networks and resources.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Support for innovative and social projects.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGrantBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 font-2"

                            >
                                Application Process
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Detailed project proposal preparation required.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Thorough documentation and compliance needed.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Multi-stage evaluation and approval process.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Regular progress reporting and monitoring.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Milestone based fund disbursement system.</span>
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
                    How Abtik Helps You Secure Grants
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
                    Why Choose Abtik for Grant Applications
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

export default memo(Grants);
