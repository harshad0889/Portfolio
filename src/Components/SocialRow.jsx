import {
  Code,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const SocialRow = () => {
  const social = [
    {
      name: "git",
      icon: <GitHub style={{ color: "#fff" }} />,
    },
    {
      name: "linkedin",
      icon: <LinkedIn style={{ color: "#fff" }} />,
    },
    {
      name: "insta",
      icon: <Instagram style={{ color: "#fff" }} />,
    },
    {
      name: "email",
      icon: <Email style={{ color: "#fff" }} />,
    },

    {
      name: "leetcode",
      icon: <Code style={{ color: "#fff" }} />,
    },
    {
      name: "twitter",
      icon: <Twitter  style={{ color: "#fff" }}  />,
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        rowGap={5}
        sx={{ cursor: "pointer" }}
      >
        {social.map((item, index) => (
          <Box
            component={motion.div}
            whileHover={{ opacity:1}}
            initial={{opacity:0.5}}
          >
            {item.icon}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SocialRow;
