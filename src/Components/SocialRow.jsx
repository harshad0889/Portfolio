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
import { Link } from "react-router-dom";

const SocialRow = () => {
  const social = [
    {
      name: "git",
      icon: <GitHub style={{ color: "#fff" }} />,
      link: "https://github.com/harshad0889",
    },
    {
      name: "linkedin",
      icon: <LinkedIn style={{ color: "#fff" }} />,
      link: "https://www.linkedin.com/in/muhammed-harshad-265b461b1/",
    },
    {
      name: "insta",
      icon: <Instagram style={{ color: "#fff" }} />,
      link: "https://www.instagram.com/harshad_muhd/",
    },
    {
      name: "email",
      icon: <Email style={{ color: "#fff" }} />,
      link: `mailto:harshadofs@gmail.com`,
    },

    {
      name: "leetcode",
      icon: <Code style={{ color: "#fff" }} />,
      link: "",
    },
    {
      name: "twitter",
      icon: <Twitter style={{ color: "#fff" }} />,
      link: "",
    },
  ];
  return (
    <>
      <Box
        component={motion.div}
        animate={{ x: 0 }}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        display={"flex"}
        sx={{flexDirection:{md:"column",xs:"column",sm:"column"}}}
        rowGap={5}
        columnGap={3}
      >
        {social.map((item, index) => (
          <>
            {item?.link != "" ? (
              <Link
                to={item?.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0.5 }}
                >
                  {item.icon}
                </Box>
              </Link>
            ) : (
              <Box
                component={motion.div}
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              >
                {item.icon}
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  );
};

export default SocialRow;
