import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import { useDispatch } from "react-redux";
import seoData from "../data/seoData.json";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Privacy Policy Content
  const refPrivacyContent = useRef(null);
  const isInViewPrivacyContent = useInView(refPrivacyContent, {
    once: true,
    amount: 0.1,
  });

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  return (
    <>
      <HeadProvider>
        <Title>
          {seoData?.privacyPolicy?.title ||
            "Privacy Policy - Abtik Startup Advisor Private Limited"}
        </Title>
        <Meta
          name="description"
          content={
            seoData?.privacyPolicy?.description ||
            "Learn how Abtik Startup Advisor Private Limited collects, uses, and protects your personal information."
          }
        />
        <Meta
          name="keywords"
          content={
            seoData?.privacyPolicy?.keyword ||
            "privacy policy, data protection, personal information, Abtik Startup Advisor"
          }
        />
        <Meta
          name="robots"
          content={seoData?.privacyPolicy?.robots || "index, follow"}
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
          {/* Overlay for better text readability on tablets */}
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
              Privacy{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Policy
              </span>{" "}
              & Data Protection
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-3"
            >
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information with transparency and security
              at Abtik Startup Advisor Private Limited.
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
                Contact Us
              </button>
            </div>
          </motion.div>
        </section>

        {/* Privacy Policy Content */}
        <motion.section
          ref={refPrivacyContent}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewPrivacyContent ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            {/* Effective Date */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-sm border">
                <p
                  className="text-sm text-gray-600 font-3"

                >
                  <strong>Effective Date:</strong> August 4, 2025 |{" "}
                  <strong>Last Updated:</strong> August 4, 2025
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2
                className="text-3xl font-2 sm:text-4xl font-bold text-gray-900 mb-6 text-center"

              >
                Introduction
              </h2>
              <p
                className="text-lg font-3 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"

              >
                Welcome to{" "}
                <strong>Abtik Startup Advisor Private Limited</strong> ("we,"
                "our," or "us"). We are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website, use our services,
                or interact with us.
              </p>
            </div>

            {/* Privacy Policy Sections */}
            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"

                >
                  1. Information We Collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-2 font-semibold text-gray-800 mb-3"

                    >
                      1.1 Personal Information
                    </h3>
                    <p
                      className="text-gray-700 font-3 leading-relaxed mb-4"

                    >
                      We may collect personal information that you voluntarily
                      provide to us, including:
                    </p>
                    <ul
                      className="list-disc pl-6 font-3 text-gray-700 space-y-2"

                    >
                      <li>
                        Full name and contact details (email address, phone
                        number, mailing address)
                      </li>
                      <li>
                        Business information (company name, position, industry)
                      </li>
                      <li>Financial information relevant to our services</li>
                      <li>Communication preferences and feedback</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold font-2 text-gray-800 mb-3"

                    >
                      1.2 Automatically Collected Information
                    </h3>
                    <p
                      className="text-gray-700 font-3 leading-relaxed mb-4"

                    >
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul
                      className="list-disc pl-6 font-3 text-gray-700 space-y-2"

                    >
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"

                >
                  2. How We Use Your Information
                </h2>
                <p
                  className="text-gray-700  font-3 leading-relaxed mb-4"

                >
                  We use the information we collect for various purposes,
                  including:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"

                >
                  <li>
                    <strong>Service Delivery:</strong> To provide, maintain, and
                    improve our business advisory services
                  </li>
                  <li>
                    <strong>Communication:</strong> To respond to inquiries,
                    send updates, and provide customer support
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable
                    laws, regulations, and legal processes
                  </li>
                  <li>
                    <strong>Business Operations:</strong> To manage accounts,
                    process transactions, and maintain records
                  </li>
                  <li>
                    <strong>Marketing:</strong> To send promotional materials
                    and newsletters (with your consent)
                  </li>
                  <li>
                    <strong>Analytics:</strong> To analyze usage patterns and
                    improve our website and services
                  </li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"

                >
                  3. Information Sharing and Disclosure
                </h2>
                <p
                  className="text-gray-700 leading-relaxed mb-4 font-3"

                >
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul
                  className="list-disc pl-6 text-gray-700 space-y-2 font-3"

                >
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party
                    vendors who assist in our operations
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    court order, or government regulation
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with
                    mergers, acquisitions, or asset sales
                  </li>
                  <li>
                    <strong>Consent:</strong> When you have given explicit
                    consent for sharing
                  </li>
                  <li>
                    <strong>Protection:</strong> To protect our rights,
                    property, or safety, or that of others
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-2"

                >
                  4. Data Security
                </h2>
                <p
                  className="text-gray-700 leading-relaxed mb-4 font-3"

                >
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul
                  className="list-disc pl-6 text-gray-700 space-y-2 font-3"

                >
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure data storage and backup systems</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-2"

                >
                  5. Your Rights and Choices
                </h2>
                <p
                  className="text-gray-700 leading-relaxed mb-4 font-3"

                >
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul
                  className="list-disc pl-6 text-gray-700 space-y-2 font-3"

                >
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information we hold
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service provider
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications at any time
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request limitation on how we
                    process your information
                  </li>
                </ul>
              </div>

              {/* Cookies Policy */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-2"

                >
                  6. Cookies and Tracking Technologies
                </h2>
                <p
                  className="text-gray-700 leading-relaxed font-3"

                >
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience, analyze website traffic, and
                  personalize content. You can control cookie settings through
                  your browser preferences. However, disabling cookies may
                  affect website functionality.
                </p>
              </div>

              {/* Data Retention */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-2"

                >
                  7. Data Retention
                </h2>
                <p
                  className="text-gray-700 leading-relaxed font-3"

                >
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, comply with legal obligations, resolve disputes, and
                  enforce our agreements. When information is no longer needed,
                  we securely delete or anonymize it.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-2"

                >
                  8. Contact Us
                </h2>
                <p
                  className="text-gray-700 leading-relaxed mb-6 font-3"

                >
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <div className="text-center space-y-2">
                    <p
                      className="text-gray-700 font-semibold font-3"

                    >
                      <strong>Abtik Startup Advisor Private Limited</strong>
                    </p>
                    <p
                      className="text-gray-700 font-3"

                    >
                      <strong>Email:</strong> <a href="mailto:info@abtikservices.com"> info@abtikservices.com</a>
                    </p>
                    <p
                      className="text-gray-700 font-3"

                    >
                      <strong>Phone:</strong><a href="tel:+91 89281 38434">   +91 89281 38434</a>
                    </p>
                    <p
                      className="text-gray-700 font-3"

                    >
                      <strong>Address:</strong> <a href="https://maps.app.goo.gl/Ft1bFj9a5NQEXo5R7">       313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-2 font-bold text-gray-900 mb-6"

                >
                  9. Compliance and Jurisdiction
                </h2>
                <p
                  className="text-gray-700 leading-relaxed font-3"

                >
                  This Privacy Policy is governed by the laws of India and
                  complies with applicable data protection regulations including
                  the Information Technology Act, 2000 and the Personal Data
                  Protection Bill. Any disputes arising from this policy will be
                  subject to the exclusive jurisdiction of the courts in [Your
                  City], India.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 text-center">
              <div className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-6 rounded-2xl">
                <p
                  className="text-white text-sm font-3"

                >
                  By using our services, you acknowledge that you have read and
                  understood this Privacy Policy and agree to our data practices
                  as described herein.
                </p>
              </div>
            </div>
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

export default memo(PrivacyPolicy);
