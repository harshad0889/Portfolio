import { ArrowCircleUp } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { colors } from "../Utils/colors";

const Topbutton = () => {
  const bounceAnimation = {
    y: [0, -4, -2, 0], // Bouncing motion along the Y-axis
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box
      component={motion.div}
      position={"fixed"}
      top={"90vh"}
      right={"2%"}
      // animate={bounceAnimation}
      onClick={scrollToTop}
      zIndex={999}
    >
      <Tooltip
        title="Scroll to Top"
        sx={{ backgroundColor: colors.offDark, color: "#fff" }}
      >
        <ArrowCircleUp
          style={{ color: colors.white, fontSize: "30px", cursor: "pointer" }}
        />
      </Tooltip>
    </Box>
  );
};

export default Topbutton;
