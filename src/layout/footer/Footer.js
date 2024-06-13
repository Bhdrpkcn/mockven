import React from "react";
import contact_image from "../../assets/DSCF9972.jpg";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import "./footer.scss";

const footerConnectText =
  "Mobven provides more than simply staffing; when we work as part of your team, we give actual project management and technical experience. We won't simply be a helping hand—we'll help you plan your strategy, implement best practices to ensure long-term success, and assist your team advance. To schedule a complimentary session to discuss your concept, project, or goals, please contact us.";
const footerContactText =
  "Our aim is to expand & use technology in such a way that it inspires and enables individuals and organizations to reach their full potential.";

const footerMenuItems = [
  {
    name: "Company",
    extraItems: ["Our Story", "Contact Us", "Blog"],
    link: "/company",
  },
  {
    name: "Solutions",
    extraItems: [
      "Software Development",
      "Studio",
      "QA & DevOps",
      "Strategy & Consulting",
      "Support & Maintenance",
    ],
    link: "/solutions",
  },
  {
    name: "Products",
    extraItems: ["Momentum Suite", "Wallet", "MobKit"],
    link: "/products",
  },
  {
    name: "Industries",
    extraItems: ["Fintech", "Retailtech", "Travel", "Energy"],
    link: "/industries",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-connect">
        <div className="footer-background-image">
          <img src={contact_image} alt="footer-img" />
        </div>
        <div className="footer-connect-left">
          <div className="footer-connect-title">LET'S CONNECT</div>
          <div className="footer-connect-subTitle">We'd Love to Talk</div>
        </div>
        <div className="footer-connect-right">
          <div className="footer-connect-text">{footerConnectText}</div>
          <button
            className="footer-connect-button"
            onClick={() => (window.location.href = "/connect")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-home-logo">
          <img
            src="https://mobven.com/wp-content/uploads/2022/06/mobven-logo-5-1-2.svg"
            alt="mockven_logo_footer"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="footer-contact-text">{footerContactText}</div>
        <button
          className="footer-contact-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
        <div className="footer-contact-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="footer-links">
        {footerMenuItems.map((footerMenuItem, index) => (
          <div key={index} className="footer-links-item">
            <div className="footer-links-main">{footerMenuItem.name}</div>
            {footerMenuItem.extraItems.map((extraItem, idx) => (
              <div
                key={idx}
                className="footer-links-extraItem"
                onClick={() => (window.location.href = "/outerFlow")}
              >
                {extraItem}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-rights">Mobven © 2024. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
