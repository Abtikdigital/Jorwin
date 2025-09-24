import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import { useDispatch } from "react-redux";
import seoData from "../data/seoData.json";

const RefundPolicy = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Refund Policy Content
  const refRefundContent = useRef(null);
  const isInViewRefundContent = useInView(refRefundContent, {
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
          {seoData?.refundPolicy?.title ||
            "Refund Policy - Abtik Startup Advisor Private Limited"}
        </Title>
        <Meta
          name="description"
          content={
            seoData?.refundPolicy?.description ||
            "Learn about our refund policy at Abtik Startup Advisor Private Limited. Understand the terms and conditions for refunds and cancellations."
          }
        />
        <Meta
          name="keywords"
          content={
            seoData?.refundPolicy?.keyword ||
            "refund policy, cancellation, money back guarantee, Abtik Startup Advisor"
          }
        />
        <Meta
          name="robots"
          content={seoData?.refundPolicy?.robots || "index, follow"}
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
              Refund{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Policy
              </span>{" "}
              & Terms
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-3"
          
            >
              We are committed to your satisfaction. Learn about our refund
              policy and the terms for cancellations at Abtik Startup Advisor
              Private Limited.
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

        {/* Refund Policy Content */}
        <motion.section
          ref={refRefundContent}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewRefundContent ? { y: 0, opacity: 1 } : {}}
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
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center font-2"
                
              >
                Introduction
              </h2>
              <p
                className="text-lg font-3 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
              
              >
                At <strong>Abtik Startup Advisor Private Limited</strong>, we
                strive to ensure complete customer satisfaction with our
                services. This Refund Policy outlines the terms and conditions
                under which refunds may be provided for our business advisory
                services.
              </p>
            </div>

            {/* Refund Policy Sections */}
            <div className="space-y-8">
              {/* Eligibility for Refunds */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
           
                >
                  1. Eligibility for Refunds
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed mb-4"
                
                >
                  Refunds may be considered under the following circumstances:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"
               
                >
                  <li>
                    <strong>Service Not Rendered:</strong> If we fail to provide
                    the agreed-upon services within the specified timeframe
                  </li>
                  <li>
                    <strong>Material Error:</strong> If there has been a clear
                    error or non-compliance with the service agreement
                  </li>
                  <li>
                    <strong>Duplicate Payment:</strong> If you have been charged
                    multiple times for the same service
                  </li>
                  <li>
                    <strong>Cancellation Before Service Commencement:</strong>{" "}
                    If you cancel before we begin providing the service
                  </li>
                  <li>
                    <strong>Unsatisfactory Service Quality:</strong> If the
                    service quality does not meet the standards outlined in our
                    agreement
                  </li>
                </ul>
              </div>

              {/* Requesting a Refund */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
                 
                >
                  2. How to Request a Refund
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed mb-4"
                 
                >
                  To initiate a refund request, please follow these steps:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"
                 
                >
                  <li>
                    <strong>Time Limit:</strong> Contact us within 15 days of
                    service purchase or delivery
                  </li>
                  <li>
                    <strong>Required Documentation:</strong> Provide proof of
                    purchase, service agreement, and reason for refund
                  </li>
                  <li>
                    <strong>Contact Method:</strong> Email us at
                    refund@abtikstartup.com or call +91-XXXXXXXXXX
                  </li>
                  <li>
                    <strong>Detailed Explanation:</strong> Include a clear
                    explanation of why you are requesting the refund
                  </li>
                  <li>
                    <strong>Supporting Evidence:</strong> Attach any relevant
                    documentation supporting your refund claim
                  </li>
                </ul>
              </div>

              {/* Refund Process */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
             
                >
                  3. Refund Process Timeline
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3CA2E2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3
                        className="font-semibold font-2 text-gray-800 mb-1"
                      
                      >
                        Request Review (1-3 Business Days)
                      </h3>
                      <p
                        className="text-gray-700 font-3 text-sm"
                       
                      >
                        We acknowledge receipt and begin reviewing your refund
                        request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3CA2E2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3
                        className="font-semibold font-2 text-gray-800 mb-1"
                       
                      >
                        Decision Notification (5-7 Business Days)
                      </h3>
                      <p
                        className="text-gray-700 text-sm font-3"
                      
                      >
                        We notify you of our decision regarding your refund
                        request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#3CA2E2] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3
                        className="font-semibold font-2 text-gray-800 mb-1"
                      
                      >
                        Processing (5-10 Business Days)
                      </h3>
                      <p
                        className="text-gray-700 font-3 text-sm"
                        
                      >
                        Approved refunds are processed back to your original
                        payment method
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-Refundable Services */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
                
                >
                  4. Non-Refundable Services
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed mb-4"
              
                >
                  The following services are generally non-refundable:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"
                 
                >
                  <li>
                    <strong>Completed Consultations:</strong> One-time
                    consultation services that have already been provided
                  </li>
                  <li>
                    <strong>Customized Reports:</strong> Tailored business
                    reports or plans delivered to you
                  </li>
                  <li>
                    <strong>Third-Party Costs:</strong> Government fees, filing
                    charges, or other third-party expenses
                  </li>
                  <li>
                    <strong>Partially Completed Services:</strong> Services that
                    are 50% or more completed
                  </li>
                  <li>
                    <strong>Digital Downloads:</strong> Documents, templates, or
                    resources that have been downloaded
                  </li>
                </ul>
                <p
                  className="text-gray-600 font-3 text-sm mt-4 italic"
                 
                >
                  *Exceptions may apply as required by applicable consumer
                  protection laws.
                </p>
              </div>

              {/* Partial Refunds */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
                
                >
                  5. Partial Refunds
                </h2>
                <p
                  className="text-gray-700 font-2 leading-relaxed mb-4"
                 
                >
                  In certain cases, partial refunds may be provided:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"
        
                >
                  <li>
                    <strong>Partially Delivered Services:</strong> Refund for
                    the undelivered portion of the service
                  </li>
                  <li>
                    <strong>Service Modifications:</strong> If you downgrade
                    your service package mid-way
                  </li>
                  <li>
                    <strong>Early Termination:</strong> If you terminate ongoing
                    services with advance notice
                  </li>
                  <li>
                    <strong>Quality Issues:</strong> Proportional refund based
                    on the extent of quality concerns
                  </li>
                </ul>
              </div>

              {/* Cancellations */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
         
                >
                  6. Modifications and Cancellations
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-lg font-2 font-semibold text-gray-800 mb-2"
                     
                    >
                      Cancellation Before Service Starts
                    </h3>
                    <p
                      className="text-gray-700 font-3"
                     
                    >
                      Full refund available if cancelled within 48 hours of
                      payment and before service commencement.
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold font-2 text-gray-800 mb-2"
                
                    >
                      Cancellation After Service Starts
                    </h3>
                    <p
                      className="text-gray-700 font-3"
                     
                    >
                      Cancellations after service commencement are subject to
                      the terms specified in your service agreement and may
                      result in partial charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
               
                >
                  7. Dispute Resolution
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed mb-4"
               
                >
                  If you disagree with our refund decision:
                </p>
                <ul
                  className="list-disc pl-6 font-3 text-gray-700 space-y-2"
               
                >
                  <li>
                    Contact our customer service manager within 7 days of our
                    decision
                  </li>
                  <li>
                    Provide additional documentation or clarification if
                    available
                  </li>
                  <li>Request an escalated review of your case</li>
                  <li>
                    We will conduct a final review and provide a definitive
                    response within 10 business days
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
                  
                >
                  8. Contact Information for Refunds
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed mb-6"
              
                >
                  For any refund-related queries, please reach out to us through
                  the following channels:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <div className="text-center space-y-2">
                    <p
                      className="text-gray-700 font-3 font-semibold"
                  
                    >
                      <strong>Refund Department</strong>
                    </p>
                    <p
                      className="text-gray-700 font-3"
                    
                    >
                      <strong>Email:</strong> <a href="mailto: info@abtikservices.com"> info@abtikservices.com</a>
                    </p>
                    <p
                      className="text-gray-700 font-3"
                 
                    >
                      <strong>Phone:</strong> <a href="tel:   +91 89281 38434">   +91 89281 38434</a>
                    </p>
                    <p
                      className="text-gray-700 font-3"
                   
                    >
                      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM
                      - 6:00 PM IST
                    </p>
                    <p
                      className="text-gray-700 font-3"
                    
                    >
                      <strong>Address:</strong> <a href="https://maps.app.goo.gl/Ft1bFj9a5NQEXo5R7">       313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-2 sm:text-3xl font-bold text-gray-900 mb-6"
             
                >
                  9. Changes to Refund Policy
                </h2>
                <p
                  className="text-gray-700 font-3 leading-relaxed"
                
                >
                  We reserve the right to update or modify this Refund Policy at
                  any time. Changes will be effective immediately upon posting
                  on our website. We recommend reviewing this policy
                  periodically. Continued use of our services after changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Compliance */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl sm:text-3xl font-2 font-bold text-gray-900 mb-6"
               
                >
                  10. Legal Compliance and Jurisdiction
                </h2>
                <p
                  className="text-gray-700 leading-relaxed font-3"
                
                >
                  This Refund Policy is governed by the laws of India and
                  complies with applicable consumer protection regulations. Any
                  disputes arising from this policy will be subject to the
                  exclusive jurisdiction of the courts in [Your City], India.
                  This policy does not affect your statutory rights as a
                  consumer.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 text-center">
              <div className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-6 rounded-2xl">
                <p
                  className="text-white text-sm font-3"
               
                >
                  <strong>Important:</strong> This refund policy is designed to
                  be fair to both our clients and our business. We encourage
                  open communication to resolve any concerns before requesting a
                  refund.
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

export default memo(RefundPolicy);
