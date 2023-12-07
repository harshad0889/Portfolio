import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Hidden } from "@mui/material";
import { motion } from "framer-motion";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Header = () => {
  const menus = [
    "Home",
    "Experience",
    "Projects",
    "Education",
    "Certification",
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log(window.scrollY, ">>.scrollliol");
    const handleScroll = () => {
      const isScrolled = window.scrollY > 750; // Change 500 to the pixel value where you want the color change to occur
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // cleanup the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: scrolled ? "#000" : "transparent", boxShadow: 0 }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HashLink to={`/#Home`} smooth={true}>
            <Box
              component="img"
              sx={{ height: 60, width: 60, objectFit: "cover" }}
              alt="hello image"
              src="coffee_coder.jpg"
              
            />
          </HashLink>
        </IconButton>
        {/* //--------center box--------- */}
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          component={motion.div}
        >
          <Hidden smDown>
            <Box
              sx={{ gap: 5, display: { xs: "none", sm: "none", md: "flex" } }}
            >
              {menus.map((item, index) => (
                <HashLink
                  to={`/#${item}`}
                  smooth={true}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Typography
                    component={motion.div}
                    fontSize={15}
                    fontWeight={400}
                    color={"grey"}
                    style={{
                      fontFamily: '"Plus Jakarta Sans"',
                      cursor: "pointer",
                      textDecoration: "st",
                    }}
                    whileHover={{
                      scale: 1.2,
                      // textShadow: "0px 0px 3px rgb(255,255,255)",
                      color: "#fff",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    //   style={{ fontFamily: '"Poppins", Arial' }}
                  >
                    {item}{" "}
                  </Typography>
                </HashLink>

                // </HashLink>
              ))}
            </Box>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
