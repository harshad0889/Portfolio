import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Objective from "./Objective";
import { Expand } from "@mui/icons-material";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Footer from "../Components/Footer";
import Certification from "../Certification/Certification";
import Achievements from "../Achievements/Achievements";
import { useParallax, Parallax } from "react-scroll-parallax";
import Topbutton from "../Components/Topbutton";
import Ball from "../Components/Ball";
const Home = () => {
  const [showTopButton, setshowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
    };
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showTopButton]);
  return (
    <Box style={{ background: "#000" }}>
      {/* Your content goes here */}
      <Header />
      <Objective />
      {showTopButton && <Topbutton />}
      <Box sx={{px:{xs:5,sm:5,md:25}}}>
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Certification />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
