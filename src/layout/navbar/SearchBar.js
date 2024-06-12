import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import "./searchBar.scss";

export const SearchBar = ({ theme }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <Box role="presentation">
      <HiOutlineMagnifyingGlass onClick={handleOpenSearch} />
      <Drawer anchor="top" open={openSearch} onClose={handleCloseSearch}>
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

          <div className="searchBar-search">SEARCH BAR</div>
        </div>
      </Drawer>
    </Box>
  );
};
