import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Blog/bgImg.svg";

import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import NewBlog from "../section/NewBlog";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const Blog = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };



  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.blog?.title}</Title>
        <Meta name="description" content={seoData?.blog?.description} />
        <Meta name="keywords" content={seoData?.blog?.keyword} />
        <Meta name="robots" content={seoData?.blog?.robots} />
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
              Abtik{" "}
              <span className="text-[#3CA2E2] font-extrabold sm:inline">
                Blog
              </span>{" "}
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
           
            >
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
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

        {/* Blog Section */}
        <NewBlog />
      </Mainlayout>
    </>
  );
};
export default memo(Blog);
