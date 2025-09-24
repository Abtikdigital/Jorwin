import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, memo } from "react";
import React from "react";

const ClientStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: 50000, suffix: "+", label: "Clients" },
    { value: 107, suffix: "cr+", label: "Fund's" },
    { value: 30, suffix: "cr+", label: "Grant's" },
    { value: 76000, suffix: "+", label: "Certificates" },
  ];

  const numberVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const CountUp = ({ end, duration = 2 }: any) => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        if (start >= end) clearInterval(timer);
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section className="px-7 py-6  md:py-16  md:px-14 bg-[#f7f7f7] " ref={ref}>
      <div className="bg-gradient-to-r  from-[#3CA2E2]/10 to-[#052EAA]/10  rounded-2xl p-4 sm:p-6 flex flex-wrap justify-around gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={numberVariants}
            className="text-center min-w-[120px] flex-1  "
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#052EAA] font-bold">
              <CountUp end={stat.value} />
              {stat.suffix}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-[#052EAA] font-semibold mt-1">
              {stat.label}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(ClientStats);
