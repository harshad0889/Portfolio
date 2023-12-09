import { Copyright, Email, Instagram, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../Utils/colors";

const Footer = () => {
  const socialArray = [
    {
      name: "mail",
      value: "harshadofs@gmail.com",
      icon: <Email style={{ color: colors.offWhiteText }} />,
      link: `mailto:harshadofs@gmail.com`,
    },
    {
      name: "phone",
      value: "+91 9744520889",
      icon: <Phone style={{ color: colors.offWhiteText }} />,
    },
    {
      name: "insta",
      value: "harshad_muhd",
      icon: <Instagram style={{ color: colors.offWhiteText }} />,
      link: "https://www.instagram.com/harshad_muhd/",
    },
  ];
  return (
    <Box pt={20} pb={5} id="footer">
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Title title={"contact me"} />
        <Box
          sx={{ display: { xs: "block", sm: "flex", md: "flex" } }}
          alignItems={"center"}
          mt={10}
          gap={10}
        >
          {socialArray.map((item, index) =>
            item.name == "phone" ? (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                mt={2}
                component={motion.div}
                animate={{ scale: 1.1 }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <>{item?.icon}</>
                <Typography color={colors.offWhiteText}>{item.value}</Typography>{" "}
              </Box>
            ) : (
              <Link
                to={item?.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  mt={2}
                  component={motion.div}
                  animate={{ scale: 1.1 }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "tween" }}
                >
                  <>{item?.icon}</>
                  <Typography color={colors.offWhiteText}>{item.value}</Typography>{" "}
                </Box>
              </Link>
            )
          )}
        </Box>
      </Box>
      <Box justifyContent={"center"} display={"flex"} alignItems={"center"} mt={10} gap={1}>
        <Copyright style={{fontSize:14, color: colors.offWhiteText }}/>
        <Typography fontSize={14}  color={colors.offWhiteText}>
          muhammedharshad.in .All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
