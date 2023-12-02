import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Objective from "./Objective";
import { Expand } from "@mui/icons-material";
import Experience from "../Experience/Experience";

const Home = () => {
  return (
    <Box style={{  backgroundColor: 'black' }}>
  {/* Your content goes here */}
 
      <Header />
      <Objective />
      <Experience/>
    </Box>
  );
};

export default Home;
