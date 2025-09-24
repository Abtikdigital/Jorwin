import { ArrowRight, ArrowUpRight } from "lucide-react";
import { memo, useState } from "react";

const FaqSection = () => {
  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "1. Who is Jorwin ?",
      answer:
        "Jorwin  is a Start up India recognized consultancy helping MSMEs and startups grow with expert support in funding, branding, legal compliance, and government schemes all under one roof.",
    },
    {
      question: "2. What makes Jorwin different from others?",
      answer:
        "Jorwin offers everything a business needs funding help, legal guidance, digital services all in one place. We support you at every step, not just with advice but with real action.",
    },
    {
      question: "3. How has Jorwin helped businesses so far?",
      answer:
        "We’ve successfully helped over 6,500 startups get recognized under the Start up India scheme and guided thousands of MSMEs in accessing funding, compliance, and digital growth opportunities.",
    },
    {
      question: "4. Is Jorwin only for new businesses?",
      answer:
        "Not at all! Whether you’re just starting out or scaling up, Jorwin offers customized solutions for every stage of business from idea validation to expansion and beyond.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  return (
    <section className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6">
      <h1 className="sub-heading bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent font-1">
        Frequently Asked Questions
      </h1>

      <div className="px-6  md:px-24 space-y-4  font-2"
     
      >
        {faq.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
          >
            <h2
              className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between  text-base font-medium ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "border-b border-gray-200"
                  : ""
              }`}
              onClick={() => toggleIsExpanded(index)}
            >
              <span>{data.question}</span>
              <button className="border-2 p-1 transition-all duration-300 hover:scale-105 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA]">
                {isExpanded.isOpen && isExpanded.index === index ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </button>
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                {data.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FaqSection);
