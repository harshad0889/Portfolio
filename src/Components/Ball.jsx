import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const Ball = () => {
  const bounceTransition = {
    y: {
      duration: 0.5,
      ease: "easeOut",
      times: [0, 0.5, 1, 0.5, 1],
      loop: Infinity,
      repeatDelay: 0.5,
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  };
  return (
    <Box
      component={motion.div}
      initial={{ y: 0 }}
      transition={bounceTransition}
      animate={{
        y: [0, 30],
        backgroundColor: ["#ff6699", "#6666ff"],
      }}
    >
      <Box
        height={30}
        width={30}
        borderRadius={48}
        position={"absolute"}
        left={"55%"}
        top={"30%"}
        bgcolor={"#fff"}
        alignSelf={"center"}
        sx={{ boxShadow: "0px 0px 100px rgb(255,255,0)" }}
      ></Box>
    </Box>
  );
};

export default Ball;
