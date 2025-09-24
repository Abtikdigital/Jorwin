import { useState, useEffect, memo } from 'react';
import Image1 from '../assets/AboutSection/business-people-talking-each-other (1).jpg';
import Image2 from "../assets/AboutSection/silhouette-confident-businesspeople.jpg"
import Image3 from "../assets/AboutSection/modern-equipped-computer-lab.jpg"
import { useNavigate } from 'react-router-dom';

const About = () => {
  const nav = useNavigate()
  const [visibleElements, setVisibleElements] = useState({
    text: false,
    topRowImages: false, // First two images load together
    bottomImage: false   // Third image loads separately
  });

  useEffect(() => {
    // Text section first
    const textTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, text: true }));
    }, 200);

    // Top row images (image1 and image2) load together
    const topRowTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, topRowImages: true }));
    }, 800);

    // Bottom image loads last
    const bottomImageTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, bottomImage: true }));
    }, 1400);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(topRowTimer);
      clearTimeout(bottomImageTimer);
    };
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
        {/* Text Section */}
        <div
          className={`space-y-10 transition-all duration-800 ease-out ${visibleElements.text
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
        >
          <h2
            className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA] font-1"

          >
            About Jorwin
          </h2>
          <p className="paragraph font-2"

          >
            At Jorwin , we connect ambition with opportunity, bringing together expert strategy, government backed funding, and complete business support under one roof. From the first spark of an idea to a fully established brand, we’re the partner that turns vision into measurable growth.
          </p>
          <p className="paragraph font-2"

          >
            From government grants and MSME loans to expert guidance in working capital finance, digital compliance, branding, and IP protection, we streamline the path from concept to success. Our experienced team has supported 50,000+ clients nationwide, including securing 7,500+ Startup India certificates, helping businesses transform ideas into thriving ventures.
          </p>
          <p className="paragraph font-2"

          >
            At Jorwin, we don’t just provide solutions,  we work alongside you. Our transparent, results driven approach ensures every business receives the right support at the right time, enabling confident growth from the first step to full scale expansion.
          </p>
          <div className="text-center md:text-left" onClick={() => {
            nav("/about")
          }}>
            <button className="custom-btn w-full max-w-[120px] !py-3 mx-auto font-2">Explore</button>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Image - Top Row */}
          <div
            className={`transition-all duration-800 ease-out ${visibleElements.topRowImages
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image1}
              className="rounded-4xl w-full max-h-48"
              alt="Team working"
              loading='lazy'
            />
          </div>

          {/* Second Image - Top Row */}
          <div
            className={`transition-all duration-800 ease-out ${visibleElements.topRowImages
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image3}
              className="rounded-4xl w-full max-h-48"
              loading='lazy'
              alt="Team collaboration"
            />
          </div>

          {/* Third Image - Bottom Row (Full Width) */}
          <div
            className={`md:col-span-2 transition-all duration-800 ease-out ${visibleElements.bottomImage
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image2}
              loading='lazy'
              className="rounded-4xl max-h-48 w-full"
              alt="Professional workspace"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(About);
