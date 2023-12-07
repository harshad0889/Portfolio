import { Email, Instagram, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialArray = [
    {
      name: "mail",
      value: "harshadofs@gmail.com",
      icon: <Email style={{ color: "#fff" }} />,
      link: `mailto:harshadofs@gmail.com`,
    },
    {
      name: "phone",
      value: "+91 9744520889",
      icon: <Phone style={{ color: "#fff" }} />,
    },
    {
      name: "insta",
      value: "harshad_muhd",
      icon: <Instagram style={{ color: "#fff" }} />,
      link: "https://www.instagram.com/harshad_muhd/",
    },
  ];
  return (
    <Box py={20} id="footer">
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
              <Box display={"flex"} alignItems={"center"} gap={1} mt={2}>
                <>{item?.icon}</>
                <Typography color={"#fff"}>{item.value}</Typography>{" "}
              </Box>
            ) : (
              <Link
                to={item?.link}
                target="_blank"
                style={{ textDecoration: "none", }}
                
              >
                <Box display={"flex"} alignItems={"center"} gap={1} mt={2}>
                  <>{item?.icon}</>
                  <Typography color={"#fff"}>{item.value}</Typography>{" "}
                </Box>
              </Link>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
