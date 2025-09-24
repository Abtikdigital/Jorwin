import Image1 from "../assets/Recommended/starup.jpg";
import Image2 from "../assets/Recommended/seed.jpeg";
import Image3 from "../assets/Recommended/msme.jpeg";
import Image4 from "../assets/Recommended/nbfc.jpeg";
import Image5 from "../assets/Recommended/pmegp.jpeg";
import Image6 from "../assets/Recommended/naiif.jpeg";
import Image7 from "../assets/Recommended/gst tax.jpg";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

const recommendedData = [
  {
    title: "Start Up India Registration",
    img: Image1,
    description:
      "A DPIIT recognized government program that enables eligible startups to access tax exemptions, self certification, and other incentives for rapid growth and compliance.",

    path: "/services/certificate/startup-india",
  },
  {
    title: "Seed Fund Scheme",
    img: Image2,
    description:
      "An initiative under Startup India that provides early stage funding through government approved incubators. It helps promising startups access vital capital to scale.",
    path: "/services/funding/seed-fund",
  },
  {
    title: "Msme Loans",
    img: Image3,
    description:
      "Loans provided to Micro, Small, and Medium Enterprises under various central and state government schemes. These help businesses grow and maintain healthy cash flow.",
    path: "/services/funding/msme-loans",
  },
  {
    title: "NBFC Loan",
    img: Image4,
    description:
      "Loans provided by Non Banking Financial Companies with simplified documentation and eligibility. These are tailored for startups and growing enterprises.",
    path: "/services/funding/private-funding/nbfc",
  },
  {
    title: "PMEGP Loan",
    img: Image5,
    description:
      "A credit linked subsidy scheme by the Government of India that supports new micro enterprises in the manufacturing or service sectors, including interest subsidies.",
    path: "/services/funding/subsidy/pmegp",
  },
  {
    title: "NAIIF Loan",
    img: Image6,
    description:
      "Equity based funding made available through SEBI registered Alternative Investment Funds (AIFs) under the National Alternative Investment and Infrastructure Fund (NAIIF).",
    path: "/services/funding/agriculture/naiff-aiff",
  },
  {
    title: "GST & Tax Compliance",
    img: Image7,
    description:
      "GST registration, monthly and annual return filings, income tax filing, TDS management, and audit preparation. Ensures your business always stays compliant.",
    path: "/services/tax/gst-filing",
  },
  {
    title: "MSME Certificate",
    img: Image1,
    description:
      "MSME Certificate is a government issued proof that your business is registered as a Micro, Small, or Medium Enterprise in India.",
    path: "/services/certificate/msme",
  },
];

const Recommended = () => {
  // Responsive cols (xl:4, lg:3, md:2, sm:1)
  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    return 1;
  };

  const [cols, setCols] = useState(getCols());
  const [visibleCount, setVisibleCount] = useState(4);

  // Listen for screen resize & update cols (for animation delays)
  useEffect(() => {
    const updateCols = () => {
      setCols(getCols());
    };
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const canLoadMore = visibleCount < recommendedData.length;

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1;
  };
  const nav = useNavigate();
  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[#f7f7f7] px-5 sm:px-7 md:px-12 lg:px-14 space-y-6 py-8 md:py-16"
    >
      <h2
        className="sub-heading bg-clip-text text-center font-1 text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] font-1"
      
      >
        Recommended For You
      </h2>
      <p
        className="paragraph text-center font-2"
  
      >
        Top picked services for your business goals get exactly what you need,
        when you need it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
        {recommendedData.slice(0, visibleCount).map((data: any, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            onClick={() => {
              nav(data?.path);
            }}
            className="bg-white cursor-pointer p-2.5 pb-3.5 shadow-lg  rounded-4xl space-y-3 duration-300 transition-all hover:scale-105 cursor-pointer"
          >
            <img
              src={data?.img}
              alt={data?.title}
              className="w-full rounded-t-3xl"
            />
            <h2
              className="text-xl font-2 text-[#3CA2E2] font-semibold text-center line-clamp-2 font-4"
            
            >
              {data?.title}
            </h2>
            <p className="paragraph font-3 text-center line-clamp-3 font-4 px-3 ">
              {data?.description}
            </p>
          </motion.div>
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-12">
          <button
            className="custom-btn font-2 w-full max-w-[120px] !py-3 mx-auto font-2"
            type="button"
            onClick={() => setVisibleCount((r) => r + 4)}
          >
            Load More
          </button>
        </div>
      )}
    </motion.section>
  );
};
export default memo(Recommended);
