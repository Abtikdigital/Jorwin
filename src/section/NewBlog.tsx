import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/NewBlog/Budget1.jpg";
import Image2 from "../assets/NewBlog/Startup.jpg";
import Image3 from "../assets/NewBlog/Image2.jpg";
import Image4 from "../assets/NewBlog/BussinessWomen.jpg"

const blogs = [
  {
    title: "Budget 2025: A Strategic Shift for MSMEs",
    description:
      "India’s Union Budget 2025 has set",
    img: Image1,
    slug: "Budget-2025-A-Strategic-Shift-for-MSMEs",
  },
  // ... other blog objects ...
  {
    title: "India’s Startups Get a Boost: Budget 2025 Unlocks New Pathways",
    description:
      "First time entrepreneurs are front",
    img: Image2,
    slug: "Indias-Startups-Get-a-Boost-Budget-2025-Unlocks-New-Pathways",
  },
  {
    title: " Budget 2025 Simplifies the Journey for New Founders",
    description:
      "For first time entrepreneurs, Budget",
    img: Image3,
    slug: "Budget-2025-Simplifies-the-Journey-for-New-Founders",
  },

  {
    title: "A Budget That Strengthens Local Industries and Women-Led Enterprises",
    description:
      "Beyond big cities and large companies, Budget 2025 has acknowledged the power of local, women-led, and artisan-driven enterprises. Targeted investments in tribal crafts, khadi clusters, and agri-based businesses highlight the government’s commitment to inclusive economic growth.",
    img: Image4,
    slug: "A-Budget-That-Strengthens-Local-Industries-and-Women-Led-Enterprises",
  },

  // (add all your blog objects as above)
];

const BlogSection = () => {
  const nav = useNavigate();
  const refBlog = useRef(null);
  const isInViewBlog = useInView(refBlog, { once: true, amount: 0.1 });

  // Responsive cols (4 for md+, 1 for <md)
  const getCols = () => (window.innerWidth >= 768 ? 4 : 4);
  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(1);

  // Update cols on resize, and ensure correct visible blogs if cols change
  useEffect(() => {
    const updateCols = () => {
      const currentCols = getCols();
      setCols(currentCols);
      setRows(prevRows => {
        // Ensure all blogs currently visible stay shown
        const visible = prevRows * cols;
        return Math.ceil(visible / currentCols) || 1;
      });
    };
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
    // eslint-disable-next-line
  }, [cols]);

  const itemsToShow = rows * cols;
  const canLoadMore = itemsToShow < blogs.length;

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1;
  };

  return (
    <motion.section
      ref={refBlog}
      initial={{ y: 100, opacity: 0 }}
      animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="px-7 md:px-14 py-7 space-y-6 bg-[#f7f7f7]"
    >
      <h2
       
        className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent font-1"
      >
        New Blog's
      </h2>
      <p
        className="paragraph text-center font-2"

      >
      Explore expert insights, tips, and updates to grow your business with ease.
      </p>
      <div className={`grid ${cols === 1 ? 'grid-cols-1' : 'md:grid-cols-4'} gap-6`}>
        {blogs.slice(0, itemsToShow).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            className="space-y-3"
          >
            <img src={blog?.img} alt={blog?.title} loading="lazy" className="rounded-lg h-50 cursor-pointer hover:scale-105 duration-300 w-full transition-all" />
            <h2
              className="text-xl text-[#3CA2E2] font-semibold line-clamp-2 font-4"
           
            >
              {blog?.title}
            </h2>
            <p className="paragraph line-clamp-1 font-4">{blog?.description}</p>
            <div>
              <button
                className="custom-btn font-2 w-full max-w-[120px] !py-3 mx-auto font-2"
                onClick={() => nav(`/expandedBlog/${blog?.slug}`)}
              >
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            className="custom-btn font-2 w-full max-w-[120px] !py-3 mx-auto font-2"
            onClick={() => setRows(r => r + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default memo(BlogSection);
