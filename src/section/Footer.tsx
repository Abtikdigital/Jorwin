import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo/JorwinLogo.jpg";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { memo } from "react";

const Footer = () => {
  return (
    <>
      <section className="grid  grid-cols-1 lg:grid-cols-4 font-3 space-y-5 px-7 md:px-14 py-6 md:py-10 bg-[#F7F7F7]">
        <div className="space-y-5">
          <div>
            <img src={Logo} className="h-14" />
          </div>
          <h2 className="paragraph">
            © 2022 Jorwinservices - All rights reserved.
          </h2>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/share/1aKQvTf7NU/"
              target="_blank"
              className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white "
                size="xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/Jorwin-services/"
              target="_blank"
              className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white "
                size="xl"
              />
            </a>
            <a
              href="https://www.instagram.com/Jorwinservices?igsh=MTk3cWxteWswbTFidQ=="
              target="_blank"
              className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white "
                size="xl"
              />
            </a>
          </div>
        </div>
        <div>
          <h2 className="heading  ">Contact Info</h2>
          <ul className="space-y-3 py-1.5">
            <li className="flex gap-3 items-center">
              <Phone className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a
                href="tel:+91 88667 70439"
                className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                +91 88667 70439
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a
                href="mailto:info@jorwin.co.in.co.in "
                className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                info@jorwin.co.in.co.in
              </a>
            </li>
            <li className="flex gap-3 items-center ">
              <MapPin className="hover:from-[#2178B5] text-white min-h-8 min-w-8 hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a
                href="https://maps.app.goo.gl/Ft1bFj9a5NQEXo5R7"
                target="_balnk"
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                811-12, Maple Trade Centre, Near Surdhara Circle, Thaltej
                Ahmedabad 380052
              </a>
            </li>
          </ul>
        </div>
        <div className="grid  grid-cols-1 space-y-5 md:grid-cols-3 lg:col-span-2">
          <div className="space-y-3">
            <h2 className="heading">Company</h2>
            <ul className="flex flex-col space-y-3">
              <Link
                to={"/"}
                className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="heading">Our Popular Services</h2>
            <ul className="flex flex-col space-y-3">
              <Link
                to={"/services/funding/grants"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Grants
              </Link>
              <Link
                to={"/services/certificate/startup-india"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                StartUp India Certificate
              </Link>
              <Link
                to={"/services/certificate/msme"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Msme Certificate
              </Link>
              <Link
                to={"/services/funding/seed-fund"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Seed Fund
              </Link>
              <Link
                to={"/services/legal/trademark-registration"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Trade Mark Registration
              </Link>
              <Link
                to={"/services/certificate/iso"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                ISO Certificate
              </Link>
              <Link
                to={"/services/certificate/zed"}
                className="text-sm font-semibold  text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                ZED Certificate
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="heading">Legal</h2>
            <ul className="flex flex-col space-y-3">
              <Link
                to={"/legal/privacy-policy"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Privacy Policy
              </Link>
              {/* <Link
                to={"/legal/refund-policy"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Cancellation & Refund Policy
              </Link> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Footer);
