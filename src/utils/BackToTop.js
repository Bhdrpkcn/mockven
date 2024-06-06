import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import { FaArrowUpLong } from "react-icons/fa6";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function BackToTop(props) {
  const { window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 1000,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 80, right: 16, zIndex: 99 }}
        >
          <Fab size="small" aria-label="scroll back to top">
            <FaArrowUpLong />
          </Fab>
        </Box>
      </Fade>
    </React.Fragment>
  );
}

BackToTop.propTypes = {
  window: PropTypes.func,
};

export default BackToTop;
