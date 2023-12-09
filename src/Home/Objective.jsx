import {
  Box,
  Button,
  Collapse,
  Fade,
  Grow,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import Ball from "../Components/Ball";
import SocialRow from "../Components/SocialRow";
import { HashLink } from "react-router-hash-link";

const Objective = () => {
  const bounceAnimation = {
    y: [0, -10, -5, 0], // Bouncing motion along the Y-axis
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      type: "tween",
    },
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1My3mEwFFHy3O8eGBZHkM-_9DJHxH2isX/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Box
      id="Home"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box  position={"absolute"}  right={"3%"}   alignItems={"center"} sx={{top:{md:"30%",sm:"30%",xs:"20%"}}}>
        <SocialRow />
      </Box>

      <Box
        display={"flex"}
        py={20}
        sx={{
          backgroundImage:
            "linear-gradient(180deg,transparent 65%,#181818 80%),linear-gradient(0deg,transparent 70%,#181818 100%)",
        }}
        height={"90%"}
      >
        <Box
          flex={1}
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Typography
            component={motion.div}
            sx={{ fontSize: { xs: "26px", sm: "5vw", md: "6vw" } }}
            fontWeight={800}
            style={{ fontFamily: '"Poppins"' }}
            color={"#fff"}
            textTransform={"uppercase"}
            mt={"10%"}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 3 }}
          >
            MUHAMMED HARSHAD
          </Typography>

          <Typography
            component={motion.div}
            sx={{ fontSize: { xs: "6px", sm: "10px", md: "20px" } }}
            fontWeight={500}
            style={{ fontFamily: '"Roboto Mono"' }}
            color={"#fff"}
            textTransform={"uppercase"}
            letterSpacing={"2.2px"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{
              delay: 0.8,
              duration: 1,
              type: "tamalsen",
              stiffness: 5,
            }}
          >
            &#60;Software Engineer, Front end & App Developer/&#62;.
          </Typography>

          {true && (
            <Box mt={5} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={5} sx={{flexDirection:{md:"row",xs:"column",sm:"column"}}}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#000",
                  borderRadius: 48,
                  px: 4,
                  py: 1.2,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <HashLink
                  to={`/#footer`}
                  smooth={true}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <Typography
                    fontSize={"small"}
                    style={{
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "inherit",
                    }}
                    fontWeight={800}
                  >
                    contact me
                  </Typography>
                </HashLink>
              </Button>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#000",
                  color: "#000",
                  borderRadius: 48,
                  padding: 2,
                  border: 2,
                  borderColor: "#fff",
                  px: 4,
                  py: 1.2,
                }}
                onClick={handleDownload}
              >
                <Typography
                  fontSize={"small"}
                  style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  fontWeight={600}
                  color={"#fff"}
                >
                  Download CV
                </Typography>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Objective;
