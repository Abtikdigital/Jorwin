// src/components/FadeIn.tsx

import { motion } from 'framer-motion';
import React from 'react';

// Define the props for our component
interface FadeInProps {
  children: React.ReactNode;
  // You can optionally pass a className to the wrapper div
  className?: string;
}

// Define the animation variants. We're keeping it fast and simple.
const fadeInVariants: any = {
  // The state an element is in before it animates
  hidden: {
    opacity: 0,
    y: 15, // Start 15px below its final position
  },
  // The state an element animates to
  visible: {
    opacity: 1,
    y: 0, // Animate to its final position
    transition: {
      duration: 0.4, // A fast animation duration
      ease: 'easeOut', // A smooth easing function
    },
  },
};

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden" // Start with the 'hidden' variant
      whileInView="visible" // Animate to the 'visible' variant when it enters the viewport
      // `viewport` settings make the animation smoother
      // `once: true` ensures the animation only runs once
      // `amount: 0.25` triggers the animation when 25% of the element is visible
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
