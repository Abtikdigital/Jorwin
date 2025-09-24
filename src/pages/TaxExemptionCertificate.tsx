import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/TaxExemption/Tax.jpeg"; // Placeholder, can be replaced with a relevant image
import {
    Mail,
    User,
    Phone,
    // Headset,
    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,
    IndianRupee ,
    Shield,
    Banknote,
    Award, // New Icon
    BookMarked, // New Icon
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json"; // Assuming this file will have a key for taxAssumptionCertificate

const TaxExemptionCertificate = () => {
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
            question: "1. What is a Tax Exemption  Certificate?",
            answer:
                "A Tax Exemption  Certificate is an official document verifying that all tax liabilities related to a specific asset or transaction have been settled or formally assumed by another party. It provides legal assurance to all parties involved.",
        },
        {
            question: "2. When is a Tax Exemption  Certificate required?",
            answer:
                "It is commonly required during major financial transactions like real estate sales, business mergers or acquisitions, and the transfer of inherited assets to ensure a clean transfer of ownership without hidden tax liabilities.",
        },
        {
            question: "3. Who issues the Tax Exemption  Certificate?",
            answer:
                "The certificate is issued by a certified financial or legal services firm after a thorough due diligence process, which includes reviewing financial records, assessing tax liabilities, and confirming payment or transfer of obligations.",
        },
        {
            question: "4. What documents are needed to apply for the certificate?",
            answer:
                "Required documents typically include proof of identity, transaction agreements (e.g., sales deeds), recent financial statements, tax payment records, and any other documents relevant to the asset or transaction.",
        },
        {
            question: "5. How long is the certificate valid?",
            answer:
                "The certificate is specific to the transaction for which it is issued. Its validity is tied to the completion of that transaction, confirming that tax obligations were settled at that point in time.",
        },
        {
            question: "6. Can this certificate prevent future tax disputes?",
            answer:
                "Yes, a primary benefit of the certificate is to minimize the risk of future tax disputes related to the transaction by creating a clear, legally-recognized record of settled tax liabilities.",
        },
    ];

    const toggleIsExpanded = (index: any) => {
        setIsExpanded((prev) =>
            prev.index === index && prev.isOpen
                ? { isOpen: false, index: -1 }
                : { isOpen: true, index }
        );
    };

    // Animation Refs and Hooks
    const refHero = useRef(null);
    const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

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
    const getTouchDelay = (index: any) => {
        const row = Math.floor(index / touchCols);
        return 0.5 + row * 0.5;
    };

    const refTaxCertInfo = useRef(null);
    const isInViewTaxCertInfo = useInView(refTaxCertInfo, { once: true, amount: 0.1 });

    const refFeatures = useRef(null);
    const isInViewFeatures = useInView(refFeatures, { once: true, amount: 0.1 });

    const refBenefitsUseCases = useRef(null);
    const isInViewBenefitsUseCases = useInView(refBenefitsUseCases, { once: true, amount: 0.1 });

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
    const getProcessDelay = (index: any) => {
        const row = Math.floor(index / processCols);
        return 0.5 + row * 0.5;
    };
    const processData = [
        {
            icon: FileText,
            title: "Document Submission & Review",
            description:
                "We guide you in collecting and submitting all necessary financial and transactional documents for a comprehensive review.",
        },
        {
            icon: Banknote,
            title: "Tax Liability Assessment",
            description:
                "Our experts conduct a thorough due diligence to assess and verify all tax liabilities associated with the asset or transaction.",
        },
        {
            icon: Award,
            title: "Certificate Issuance",
            description:
                "Upon successful verification, we issue a legally sound Tax Exemption  Certificate to secure your transaction.",
        },
    ];

    const refWhyChoose = useRef(null);
    const isInViewWhyChoose = useInView(refWhyChoose, { once: true, amount: 0.4 });
    const [benefitsCols, setBenefitsCols] = useState(1);
    useEffect(() => {
        const updateCols = () => {
            setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
        };
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getBenefitsDelay = (index: any) => {
        const row = Math.floor(index / benefitsCols);
        return 0.5 + row * 0.5;
    };
    const benefitsData = [
        {
            icon: Shield,
            title: "Legal Protection",
            description:
                "Gain peace of mind with a certificate that provides robust legal protection against unforeseen tax claims post transaction.",
        },
        {
            icon: IndianRupee ,
            title: "Enhance Credibility",
            description:
                "Boost the confidence of buyers, investors, and financial institutions by demonstrating complete fiscal transparency.",
        },
        {
            icon: BookMarked,
            title: "Simplify Due Diligence",
            description:
                "Streamline the due diligence process for all parties, enabling faster and smoother transaction closures.",
        },
    ];

    const refFAQ = useRef(null);
    const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });
    const getFaqDelay = (index: any) => {
        const row = Math.floor(index / 1);
        return 0.2 + row * 0.1;
    };

    const refContact = useRef(null);
    const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

    return (<>
        <HeadProvider>
            <Title>{seoData?.taxAssumptionCertificate?.title || "Tax Exemption  Certificate Service"}</Title>
            <Meta name="description" content={seoData?.taxAssumptionCertificate?.description || "Secure your financial transactions with a Tax Exemption  Certificate."} />
            <Meta name="keywords" content={seoData?.taxAssumptionCertificate?.keyword || "Tax Exemption , tax certificate, financial due diligence"} />
            <Meta name="robots" content={seoData?.taxAssumptionCertificate?.robots || "index, follow"} />
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
                        Secure Your Transactions with a {" "}
                        <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                            Tax Exemption  Certificate
                        </span>{" "}
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                                   leading-relaxed sm:leading-relaxed md:leading-relaxed
                                   text-white lg:text-white
                                   paragraph !text-white
                                   max-w-none sm:max-w-lg md:max-w-xl font-2 lg:max-w-none mx-auto lg:mx-0"
                    >
                        Ensure seamless asset and business transfers with a certificate that verifies all tax liabilities are settled.
                        Protect your investments and simplify due diligence with our expert certification service.
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
                            Get Your Certificate
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
            className="w-full md:w-[320px]    flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 box-border"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-2">
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
                  <p className="text-base text-gray-700 font-semibold font-2">
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
                  <p className="text-base text-gray-700 font-semibold font-2">
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
                aria-label="Email us at info@jorwin.co.in"
              >
                <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-base text-gray-700 font-semibold font-2">
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
                            Tax Exemption Certificate
                        </h2>
                        <p className="font-3 text-white">
                            Empowering Businesses through Comprehensive Solutions From Fund
                            Management to Legal Empowering.
                        </p>
                    </div>
                    <div className="p-2 bg-white rounded-4xl box-border grid h-full ">
                        <img src={Image1} className="rounded-3xl w-full h-64" loading="lazy" alt="Tax Services" />
                    </div>
                </motion.div>
            </motion.section>

            {/* What is Tax Exemption  Certificate */}
            <motion.section
                ref={refTaxCertInfo}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewTaxCertInfo ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading text-white text-left font-2"
                    >
                        What Is a Tax Exemption  Certificate?
                    </h2>
                    <p className="paragraph !text-white mx-auto text-left font-3"
                    >
                        A Tax Exemption  Certificate is a crucial document that provides official verification that all outstanding tax liabilities on an asset (like property or a business) have been paid or are legally assumed by a new owner. This protects buyers from inheriting hidden tax debts and ensures a clean, transparent transaction, fostering trust and security for everyone involved.
                    </p>
                </div>
            </motion.section>

            {/* Key Features Section */}
            <motion.section
                ref={refFeatures}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewFeatures ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                >
                    Key Features of Our Certificate Service
                </h2>

                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* For Asset Sales Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewFeatures ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Banknote className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3 font-2"
                                >
                                    For Asset Sales
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">Full Liability Coverage</p>
                                    <p className="text-xs opacity-90">Real Estate & Valuables</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Verifies clearance of property and capital gains taxes.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Provides assurance for buyers and lenders.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Facilitates smooth title and ownership transfer.</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* For Business Transfers Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewFeatures ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3 font-2"
                                >
                                    For Business Transfers
                                </h3>
                                <div className="bg-gradient-to-r font-3 from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">Comprehensive Audit</p>
                                    <p className="text-xs opacity-90">Mergers & Acquisitions</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Covers corporate, payroll, and sales taxes.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Crucial for M&A due diligence processes.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Protects new owners from previous liabilities.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Benefits & Use Cases Section */}
            <motion.section
                ref={refBenefitsUseCases}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewBenefitsUseCases ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                >
                    Benefits & Common Use Cases
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm md:text-base text-gray-600 text-center font-3"
                    >
                        Our Tax Exemption  Certificate provides critical assurance across a range of high stakes financial scenarios, ensuring every transaction is secure and transparent.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewBenefitsUseCases ? { y: 0, opacity: 1 } : {}}
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
                                    <span>Prevents financial losses from hidden tax debts.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Accelerates transaction closing times.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Provides indisputable proof for legal and financial records.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Increases buyer and investor confidence.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewBenefitsUseCases ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 font-2"
                            >
                                Common Use Cases
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 font-3">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Real Estate Transactions.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Mergers and Acquisitions (M&A).</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Inheritance and Estate Settlements.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Corporate Restructuring and Asset Sales.</span>
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
                    Our Simple 3 Step Certification Process
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

            {/* Why Choose Jorwin Section */}
            <motion.section
                ref={refWhyChoose}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8 "
            >
                <h2 className="sub-heading text-center font-2 bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                >
                    Why Choose Jorwin for Your Tax Certificate
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {benefitsData?.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
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
                <h1 className="sub-heading bg-gradient-to-t font-2 text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
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

export default memo(TaxExemptionCertificate);
