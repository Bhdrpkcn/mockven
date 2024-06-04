import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../utils/ThemeContext";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import "./style.scss";
import SwitchButton from "../../components/SwitchButton";

const navbarMenuItems = [
  {
    name: "Solutions & Services",
    extraItems: [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "Studio",
      "QA & DevOps",
      "Strategy & Consulting",
      "Support & Maintenance",
    ],
    link: "/solutions",
  },
  {
    name: "Experiences",
    extraItems: ["Clients", "Industries", "Success Stories"],
    link: "/experiences",
  },
  {
    name: "Products",
    extraItems: ["Momentum Suite", "MobKit (Mobile SDK)", "Digital Wallet"],
    link: "/products",
  },
  {
    name: "Company",
    extraItems: ["Our Story", "Contact Us"],
    link: "/company",
  },
  {
    name: "Blog",
    extraItems: null,
    link: "/blog",
  },
  {
    name: "Careers",
    extraItems: null,
    link: "/careers",
  },
];

const Navbar = () => {
  const headRef = useRef();
  const [expanded, setExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const showMenuBar = () => {
    headRef.current.classList.toggle("responsiveHeader");
    document.body.style.overflow = "hidden";
  };

  const closeMenuBar = () => {
    headRef.current.classList.remove("responsiveHeader");
    document.body.style.overflow = "auto";
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="navbar-logo">
        <img
          src="https://mobven.com/wp-content/uploads/2022/05/mobven-logo-1.svg"
          alt="mockven_logo"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <div className="navbar-items">
        {navbarMenuItems.map((navbarMenuItem) => (
          <div className="navbar-item" key={navbarMenuItem.name}>
            {navbarMenuItem.name}
          </div>
        ))}
      </div>

      <div className="navbar-open" ref={headRef}>
        <div className="navbar-open-left">
          <div className="navbar-open-left-logo">
            <div
              onClick={() => (window.location.href = "/")}
              className="logo-name"
            >
              Mobven
            </div>
            <div className="logo-motto">Rediscover the power of digital</div>
          </div>
          <div className="navbar-menu-accordion-container">
            {navbarMenuItems.map((navbarMenuItem, index) => (
              <Accordion
                className="navbar-menu-accordion"
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  bgcolor: theme === "dark" ? "#f4f4f4" : "#222733",
                }}
              >
                <AccordionSummary
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography
                    sx={{
                      width: "100%",
                      color: theme === "dark" ? "#222733" : "#dfdfdf",
                      fontSize: "24px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    {navbarMenuItem.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    color: "white",
                  }}
                >
                  {navbarMenuItem.extraItems &&
                    navbarMenuItem.extraItems.map((item, i) => (
                      <Typography
                        sx={{
                          width: "100%",
                          cursor: "pointer",
                          flexShrink: 1,
                          color: theme === "dark" ? "#222733" : "#dfdfdf",
                          fontSize: "18px",
                          padding: "8px",
                          fontWeight: "400",
                          letterSpacing: "2px",
                        }}
                        key={i}
                        onClick={() =>
                          (window.location.href = `${navbarMenuItem.link}`)
                        }
                      >
                        {item}
                      </Typography>
                    ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="navbar-open-left-footer">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className="navbar-open-right">
          <div className="navbar-close-button" onClick={closeMenuBar}>
            Close
            <IoCloseOutline className="navbar-close-button-icon" />
          </div>
        </div>
      </div>

      <div className="navbar-buttons">
        <SwitchButton onClick={toggleTheme} theme={theme} />

        <HiOutlineMagnifyingGlass />
        <RxHamburgerMenu
          className="navbar-buttons-menu"
          onClick={showMenuBar}
        />
      </div>
    </div>
  );
};

export default Navbar;
