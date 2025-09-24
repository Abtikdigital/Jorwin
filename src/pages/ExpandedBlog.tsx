import { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/ExpandedBlog/bgImg.svg";
import Image1 from "../assets/NewBlog/Budget1.jpg";
import Image2 from "../assets/NewBlog/Startup.jpg";
import Image3 from "../assets/NewBlog/Image2.jpg";
import Image4 from "../assets/NewBlog/BussinessWomen.jpg"
import { useDispatch } from "react-redux";

interface BlogListItem {
  title: string;
  lists: string[];
  description: string;
}

interface BlogData {
  title: string;
  description: string;
  img: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  list: BlogListItem[];
}

const ExpandedBlog = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const blogsData: BlogData[] = [
    {
      title: "Budget 2025: A Strategic Shift for MSMEs",
      description:
        `India’s Union Budget 2025 has set a bold tone for the future of Micro, Small, and Medium Enterprises (MSMEs). With ₹23,100 crore allocated directly to support this backbone of the Indian economy, the government is finally moving from symbolic announcements to actionable, structural reforms.`,

      img: Image1,
      slug: "Budget-2025-A-Strategic-Shift-for-MSMEs",
      date: "July 20, 2024",
      readTime: "5 min read",
      category: "Marketing",
      list: [
        {
          title: "Focused Financial Allocation: ₹23,100 Crore for MSMEs",
          lists: [
            "Long term vision for scalability and global competitiveness",
            "₹23,100 crore allocation for MSME support",
            "Structural approach rather than one time relief packages",
          ],
          description:
            "For years, MSMEs have demanded more than just recognition they’ve needed real, accessible support. The 2025 Budget delivers that with a dedicated allocation that targets growth, sustainability, and resilience.",
        },
        {
          title: "Major Reforms Driving the Shift",
          lists: [
            "Expansion of the Credit Guarantee Fund Scheme",
            "Introduction of MSME Credit Cards",
            "Reduction of Import Duties on Essential Raw Materials",
          ],
          description:
            "Several key announcements in Budget 2025 highlight a firm commitment to making business easier, credit more accessible, and systems more transparent for MSMEs:",
        },
      ],
    },
    {
      title: "India’s Startups Get a Boost: Budget 2025 Unlocks New Pathways",
      description:
        "Startups are no longer fringe players they are now central to India’s economic story. Budget 2025 backs this shift with tax reliefs, easier capital access, and major investments in innovation.",
      img: Image2,
      slug: "Indias-Startups-Get-a-Boost-Budget-2025-Unlocks-New-Pathways",
      date: "July 18, 2024",
      readTime: "7 min read",
      category: "Technology",
      list: [
        {
          title: "Key Budget Highlights for Startups",
          lists: [
            "Extended tax benefits for eligible startups",
            "Simplified capital gains tax structure",
            "Launch of a ₹1,000 Cr Innovation Fund focused on: 1. Artificial Intelligence (AI) 2. Biotechnology 3. Sustainable Technology",
          ],
          description:
            "For years, MSMEs have demanded more than just recognition they’ve needed real, accessible support. The 2025 Budget delivers that with a dedicated allocation that targets growth, sustainability, and resilience.",
        },
        {
          title: "Expanding Innovation Beyond Metro Cities",
          lists: [
            "More incubation programs in Tier 2 & Tier 3 cities",
            "Push for geographic diversity in startup growth",
            "Eased regulatory environment for new founders",
            "Greater access to institutional funding",
          ],
          description:
            "",
        },
      ],
    },
    {
      title: "Budget 2025 Simplifies the Journey for New Founders",
      description:
        "First time entrepreneurs are front and center in Budget 2025. With a streamlined digital portal and structured mentorship, starting up in India just got easier and faster.",
      img: Image3,
      slug: "Budget-2025-Simplifies-the-Journey-for-New-Founders",
      date: "July 15, 2024",
      readTime: "6 min read",
      category: "Legal",
      list: [],
    }, {
      title: "A Budget That Strengthens Local Industries and Women Led Enterprises",
      description:
        "Beyond big cities and large companies, Budget 2025 has acknowledged the power of local, women led, and artisan driven enterprises. Targeted investments in tribal crafts, khadi clusters, and agri based businesses highlight the government’s commitment to inclusive economic growth.",
      img: Image4,
      slug: "A-Budget-That-Strengthens-Local-Industries-and-Women-Led-Enterprises",
      date: "July 15, 2024",
      readTime: "6 min read",
      category: "Legal",
      list: [
        {
          title: "New initiatives for solar powered equipment",
          lists: [],
          description: "New initiatives for solar powered equipment, cold storage support, and digital training for micro entrepreneurs will directly benefit small business owners in rural and semi urban regions. These aren’t just incentives they are enablers."
        },
        {
          title: "By turning local industries into competitive,",
          lists: [],
          description: "By turning local industries into competitive, high quality suppliers and exporters, Budget 2025 is not only uplifting livelihoods but also placing India’s cultural industries on the global map."
        },
      ],
    },


  ];

  const { slug } = useParams<{ slug: string }>();
  const [selectedBlogData, setSelectedBlogData] = useState<BlogData | null>(
    null
  );

  useEffect(() => {
    const data = blogsData?.find((blog) => blog?.slug === slug);
    setSelectedBlogData(data || null);
  }, [slug]);

  if (selectedBlogData === null) {
    return (
      <Mainlayout>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] flex items-center justify-center">
                <span className="text-2xl text-white font-bold">404</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Blog Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved. Please check the URL or browse our other articles.
            </p>
            <Link
              to="/blogs"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Back to All Blogs
            </Link>
          </div>
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      {/* Hero Section - Your Original Design */}
      <section
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

        <div
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
        </div>
      </section>

      {/* Detailed Blog Section - Enhanced */}
      <section className="px-4 sm:px-7 md:px-14 py-6 md:py-12 bg-[#f7f7f7] min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Left Part - Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Blog Image with Overlay Info */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
              <img
                loading="lazy"
                src={selectedBlogData.img}
                className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                alt={selectedBlogData.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-xs md:text-sm mb-3">
                  <span className="px-2 md:px-3 py-1 bg-[#3CA2E2] rounded-full font-medium">
                    {selectedBlogData.category || "Article"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {selectedBlogData.date || "July 23, 2024"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {selectedBlogData.readTime || "5 min read"}
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content Card */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8">
              {/* Blog Title */}
              <h2

                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent mb-4 md:mb-6 leading-tight font-1"
              >
                {selectedBlogData.title}
              </h2>

              {/* Blog Description */}
              <div className="prose max-w-none mb-6 md:mb-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-[#3CA2E2] pl-4 md:pl-6 bg-blue-50 p-3 md:p-4 rounded-r-lg font-2">
                  {selectedBlogData.description}
                </p>
              </div>

              {/* Blog Content Lists */}
              <div className="space-y-6 md:space-y-8">
                {selectedBlogData.list?.map((listItem, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border-l-4 border-[#3CA2E2]"
                  >
                    {listItem?.title && (
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 font-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                          {index + 1}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                          {listItem.title}
                        </h3>
                      </div>
                    )}

                    {listItem?.lists && listItem.lists.length > 0 && (
                      <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6 ml-4 md:ml-6 font-3">
                        {listItem.lists.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 md:gap-4 text-gray-700"
                          >
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#3CA2E2] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed text-sm md:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {listItem?.description && (
                      <div className="bg-white font-3 rounded-lg p-3 md:p-4 border-l-4 border-[#3CA2E2] ml-4 md:ml-6">
                        <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                          {listItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Part - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-6">
              {/* Latest Blogs Card */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold text-white font-2">
                    Latest Blogs
                  </h2>
                </div>
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {blogsData?.slice(0, 5).map((blog, index) => (
                    <Link
                      key={index}
                      to={blog.slug ? `/expandedBlog/${blog.slug}` : "/"}
                      className="group block hover:bg-gray-50 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                    >
                      <div className="grid grid-cols-4 gap-2 md:gap-3">
                        <div className="overflow-hidden rounded-md md:rounded-lg">
                          <img
                            loading="lazy"
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-10 md:h-12 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="col-span-3 space-y-1 md:space-y-2">
                          <h3 className="font-semibold text-xs md:text-sm font-2 text-gray-800 line-clamp-2 group-hover:text-[#3CA2E2] transition-colors leading-tight">
                            {blog.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {blog.date || "Recent"}
                            </span>
                            <span className="text-xs font-3 text-[#3CA2E2] font-medium group-hover:translate-x-1 transition-transform">
                              Read →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-[#3CA2E2] via-[#2691d9] to-[#052EAA] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-[#2691D9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-xs md:text-sm text-blue-100 leading-relaxed font-3">
                    Schedule a consultation with our experts today and transform
                    your business.
                  </p>
                  <button className="custom-btn "
                    onClick={handleOpenDialog}
                  >Schedule a Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mainlayout>
  );
};

export default memo(ExpandedBlog);
