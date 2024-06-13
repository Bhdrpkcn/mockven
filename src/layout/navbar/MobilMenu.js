import React, { useState } from "react";
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

export const MobilMenu = ({
  closeMenuBar,
  headRef,
  navbarMenuItems,
  theme,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleCloseMenuBar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeMenuBar();
    }, 1200);
  };

  return (
    <div
      className={`navbar-open ${isClosing ? "closing" : ""}` /**CHANGED */}
      ref={headRef}
    >
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
        <div
          className="navbar-close-button"
          onClick={handleCloseMenuBar} /**CHANGED */
        >
          Close
          <IoCloseOutline className="navbar-close-button-icon" />
        </div>
      </div>
    </div>
  );
};
