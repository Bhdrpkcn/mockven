import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import "./searchBar.scss";

export const SearchBar = ({ theme }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const handleOpenSearch = () => {
    setIsClosing(false);
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenSearch(false);
      setIsClosing(false);
    }, 1000);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/outerflow?query=${searchQuery}`;
  };

  return (
    <Box role="presentation">
      <HiOutlineMagnifyingGlass onClick={handleOpenSearch} />
      <Drawer
        anchor="top"
        open={openSearch}
        onClose={handleCloseSearch}
        className={isClosing ? "closing" : ""}
      >
        <div className="searchBar-container">
          <div className="searchBar-header">
            <div className="searchBar-logo">
              <img
                src="https://mobven.com/wp-content/uploads/2022/05/mobven-logo-1.svg"
                alt="mockven_logo"
                onClick={() => (window.location.href = "/")}
              />
            </div>
            <div className="searchBar-close-container">
              <div
                className="searchBar-close-button"
                onClick={handleCloseSearch}
              >
                <IoCloseOutline className="searchBar-close-button-icon" />
              </div>
            </div>
          </div>

          <div className="searchBar-search">
            <form onSubmit={handleSearchSubmit} className="searchBar-form">
              <input
                type="text"
                placeholder="Type words and hit enter"
                value={searchQuery}
                onChange={handleSearchChange}
                className="searchBar-input"
              />
              <button type="submit" className="searchBar-button">
                <HiOutlineMagnifyingGlass />
              </button>
            </form>
            <div className="divider"></div>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};
