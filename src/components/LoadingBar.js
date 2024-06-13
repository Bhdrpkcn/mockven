import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

export const LoadingBar = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        bottom: "3%",
        height: "5px",
      }}
    >
      <LinearProgress
        sx={{
          height: "12px",
        }}
        color="inherit"
      />
    </Box>
  );
};
