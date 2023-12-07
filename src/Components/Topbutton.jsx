import { ArrowCircleUp } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Topbutton = () => {
  const bounceAnimation = {
    y: [0, -10, -5, 0], // Bouncing motion along the Y-axis
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
      top={"80vh"}
      right={"2%"}
      animate={bounceAnimation}
      onClick={scrollToTop}
      zIndex={999}
    >
      <Tooltip
        title="Scroll to Top"
        sx={{ backgroundColor: "black", color: "#fff" }}
      >
        <ArrowCircleUp
          style={{ color: "#f2f2f2", fontSize: "45px", cursor: "pointer" }}
        />
      </Tooltip>
    </Box>
  );
};

export default Topbutton;
