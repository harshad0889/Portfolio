import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Objective from "./Objective";
import { Expand } from "@mui/icons-material";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";

const Home = () => {
  return (
    <Box style={{background:"#000" }}>
      {/* Your content goes here */}

      <Header />
      <Objective />
      <Box px={25}>
       
        <TechStack />
        <Experience />
        <Projects/>
        <Education/>
      </Box>
    </Box>
  );
};

export default Home;
