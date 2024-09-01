import React from "react";
import footerLogo from "../../assets/Logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaLocationArrow, // Mengimpor ikon dengan nama yang benar
  FaMobileAlt,
} from "react-icons/fa";

const Bannerimg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    links: "/#",
  },
  {
    title: "About",
    links: "/#about",
  },
  {
    title: "Contact",
    links: "/#contact",
  },
  {
    title: "Blog",
    links: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={Bannerimg} className="text-white mb-20">
      <div className="container">
        <div data-aos="zoom-in"
         className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              similique amet, sed optio reprehenderit.
            </p>
          </div>
          {/* footer links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.links}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                   Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.links}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Cipondoh, Kota Tangerang</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+62 8967 2727 7272</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
