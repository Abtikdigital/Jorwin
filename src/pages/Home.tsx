import BgImage from "../assets/Hero/bgImg.svg";
import ClientStats from "../section/ClientStats";
import Contact from "../section/Contact";
import FaqSection from "../section/FaqSection";
import Mainlayout from "../section/Mainlayout";
import OurService from "../section/OurService";
import NewBlog from "../section/NewBlog";
import Testimonial from "../section/Testimonial";
import Recommended from "../section/Recommended";
import About from "../section/About";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const Home = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Client Stats
  const refClient = useRef(null);
  const isInViewClient = useInView(refClient, { once: true, amount: 0.1 });

  // About
  const refAbout = useRef(null);
  const isInViewAbout = useInView(refAbout, { once: true, amount: 0.1 });

  // Our Service
  const refService = useRef(null);
  const isInViewService = useInView(refService, { once: true, amount: 0.1 });

  // Recommended
  const refRecommended = useRef(null);
  const isInViewRecommended = useInView(refRecommended, {
    once: true,
    amount: 0.1,
  });

  // Testimonial
  const refTestimonial = useRef(null);
  const isInViewTestimonial = useInView(refTestimonial, {
    once: true,
    amount: 0.1,
  });

  // New Blog
  const refBlog = useRef(null);
  const isInViewBlog = useInView(refBlog, { once: true, amount: 0.1 });

  // Faq Section
  const refFaq = useRef(null);
  const isInViewFaq = useInView(refFaq, { once: true, amount: 0.1 });

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.1 });

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.homepage?.title}</Title>
        <Meta name="description" content={seoData?.homepage?.description} />
        <Meta name="keywords" content={seoData?.homepage?.keyword} />
        <Meta name="robots" content={seoData?.homepage?.robots} />
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
              Your One Stop{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Solution
              </span>{" "}
              for all Business Needs
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
            >
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Jorwin
              Startup Advisor Private Limited
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
                Schedule a call
              </button>
            </div>
          </motion.div>
        </section>

        {/* Client Stats */}
        <motion.section
          ref={refClient}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewClient ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <ClientStats />
        </motion.section>

        {/* About Us Section*/}
        <motion.section
          ref={refAbout}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewAbout ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.section>

        {/* Our Service Section */}
        <motion.section
          ref={refService}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewService ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <OurService />
        </motion.section>

        {/* Recommended Service */}
        <motion.section
          ref={refRecommended}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewRecommended ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Recommended />
        </motion.section>

        {/* Testimonial */}
        <motion.section
          ref={refTestimonial}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewTestimonial ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Testimonial />
        </motion.section>

        {/* New Blog */}
        <motion.section
          ref={refBlog}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <NewBlog />
        </motion.section>

        {/* Faq Section */}
        <motion.section
          ref={refFaq}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFaq ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaqSection />
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

export default memo(Home);
