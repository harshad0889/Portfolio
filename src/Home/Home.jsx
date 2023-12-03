import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Objective from "./Objective";
import { Expand } from "@mui/icons-material";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "black" }}>
      {/* Your content goes here */}

      <Header />
      <Box p={15}>
        <Objective />
        <TechStack />
        <Experience />
      </Box>
    </Box>
  );
};

export default Home;
