import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const socialArray = ["insta", "linkedin", "stackoverslow"];
  return (
    <Box height={"20vw"} >
      <Box
        display={"flex"}
        height={"100%"}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {socialArray.map((item, index) => (
          <Box>
            <Typography color={"#fff"}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
