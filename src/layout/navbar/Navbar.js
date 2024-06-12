import React, { useRef, useState } from "react";
import { MobilMenu } from "./MobilMenu";
import { SearchBar } from "./SearchBar";
import { useTheme } from "../../utils/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import SwitchButton from "../../components/SwitchButton";

import "./style.scss";

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

  const { theme, toggleTheme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);

  const showMenuBar = () => {
    headRef.current.classList.toggle("responsiveHeader");
    document.body.style.overflow = "hidden";
  };

  const closeMenuBar = () => {
    headRef.current.classList.remove("responsiveHeader");
    document.body.style.overflow = "auto";
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleItemClick = (navbarMenuItem) => {
    if (!navbarMenuItem.extraItems) {
      window.location.href = navbarMenuItem.link;
    }
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
        {navbarMenuItems.map((navbarMenuItem, index) => (
          <div
            className="navbar-item"
            key={navbarMenuItem.name}
            onFocus={() => handleMouseEnter(index)}
            onClick={() => handleItemClick(navbarMenuItem)}
            tabIndex={0}
          >
            {navbarMenuItem.name}
            {navbarMenuItem.extraItems && (
              <div
                className={`navbar-item-dropdown ${
                  hoveredItem === index ? "open" : ""
                }`}
              >
                {navbarMenuItem.extraItems.map((item, i) => (
                  <div
                    className="navbar-item-dropdown-item"
                    key={i}
                    onClick={() =>
                      (window.location.href = `${navbarMenuItem.link}`)
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <MobilMenu
        closeMenuBar={closeMenuBar}
        headRef={headRef}
        navbarMenuItems={navbarMenuItems}
        theme={theme}
      />

      <div className="navbar-buttons">
        <SwitchButton onClick={toggleTheme} theme={theme} />
        <SearchBar />
        <RxHamburgerMenu
          className="navbar-buttons-menu"
          onClick={showMenuBar}
        />
      </div>
    </div>
  );
};

export default Navbar;
