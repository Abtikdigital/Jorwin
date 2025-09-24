import { useNavigate } from "react-router-dom";
import Image1 from "../assets/Grants/goverment grants.jpg";
import Image2 from "../assets/StartUpIndia/startupindia1.png";
import Image3 from "../assets/MSMECertificate/msme1.png";
import Image4 from "../assets/OurService/seed.jpeg";
import Image5 from "../assets/TradeMark/Trademark.jpg";
import Image6 from "../assets/OurService/iso.png";
import Image7 from "../assets/OurService/zed.jpeg";
import Image8 from "../assets/OurService/pmegp.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const services = [
  {
    title: "Grants",
    description:
      "We assist in finding and applying for suitable government grants, ensuring your business receives deserved financial aid without any stress.",
    img: Image1,
    path: "/services/funding/grants",
  },
  {
    title: "Startup India Certificate",
    description:
      "Gain official startup recognition to access tax benefits, funding opportunities, and credibility via the Startup India initiative.",
    img: Image2,
    path: "/services/certificate/startup-india",
  },
  {
    title: "MSME Certificate",
    description:
      "Register as an MSME to access subsidies, priority loans, and various government schemes that support small business growth effectively.",
    img: Image3,
    path: "/services/certificate/msme",
  },
  {
    title: "Seed Fund",
    description:
      "We provide step by step guidance to secure government seed funding, helping your startup launch with reliable support from the beginning.",
    img: Image4,
    path: "/services/funding/seed-fund",
  },
  {
    title: "Trademark Registration",
    description:
      "Safeguard your brand name, logo, or tagline through trademark registration, ensuring your unique identity remains protected and exclusive.",
    img: Image5,
    path: "/services/legal/trademark-registration",
  },
  {
    title: "ISO Certificate",
    description:
      "Demonstrate quality commitment with ISO certification, which we help obtain to meet global standards and build trust in your operations.",
    img: Image6,
    path: "/services/certificate/iso",
  },
  {
    title: "ZED Certificate",
    description:
      "Obtain Zero Defect Zero Effect certification to ensure high quality, eco friendly practices aligned with recognized government standards.",
    img: Image7,
    path: "/services/certificate/zed",
  },
  {
    title: "PMEGP Loan Scheme",
    description:
      "Start your venture with up to ₹25 lakh via PMEGP, where we streamline applications for government loans and subsidies to ease the process.",
    img: Image8,
    path: "/services/funding/subsidy/pmegp",
  },
];

const OurService = () => {
  const nav = useNavigate();

  // Responsive column tracking (for grid and animation only)
  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    return 1;
  };

  const [cols, setCols] = useState(getCols());
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 items

  // Update columns on resize (no need to adjust visibleCount)
  useEffect(() => {
    const updateCols = () => {
      setCols(getCols());
    };
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const HandleClick = (path: any) => nav(path);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const canLoadMore = visibleCount < services.length;

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1; // Start after section animation, stagger rows
  };

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-[#f7f7f7] px-5 sm:px-7 md:px-12 lg:px-14 py-8 md:py-16"
    >
      <div className="w-full space-y-6">
        <h2
          className="sub-heading text-center bg-clip-text bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] text-transparent font-1"
        
        >
          Our Service
        </h2>
        <p
          className="paragraph text-center font-2"
         
        >
          “Smart business solutions from registration to funding, licensing &
          certification all in one place.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {services.slice(0, visibleCount).map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index) }}
              className="space-y-4"
            >
              <img
                src={service.img}
                className="w-full rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer max-h-46"
                alt={service.title}
              />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold font-4">
                {service?.title}
              </h2>
              <p className="text-center paragraph line-clamp-3 font-4">
                {service?.description}
              </p>
              <div className="text-center">
                <button
                  onClick={() => HandleClick(service?.path)}
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto font-2"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {canLoadMore && (
          <div className="flex justify-center mt-12">
            <button
              className="custom-btn w-full max-w-[120px] !py-3 mx-auto font-2"
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)} // Load next 4
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};
export default memo(OurService);
