import React from "react";
import { Box, Typography } from "@mui/material";

const BottomFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        pt: {
          xs: 3, // Reduce the top padding
          lg: 5,
        },
        pb: 0, // Set bottom padding to 0 to remove space
        position: "relative",
        textAlign: "center",
      }}
    >
      <Typography variant="caption" sx={{ color: "#161414" }}>
        Design by Md Shams Firoz | 
      </Typography>
      <Typography variant="caption" sx={{ color: "#161414", mt: 1 }}>
        Copyright © Antino Lab
      </Typography>
    </Box>
  );
};

export default BottomFooter;
