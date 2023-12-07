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
  return (
    <Box
      id="Home"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backgroundImage: `url(${"https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg"})`,
      }}
    >
      <Box position={"absolute"} right={35} alignItems={"center"} top={"30%"}>
        <SocialRow />
      </Box>

      <Box
        display={"flex"}
        py={20}
        sx={{
          backgroundImage:
            "linear-gradient(180deg,transparent 65%,#000 80%),linear-gradient(0deg,transparent 70%,#000 100%)",
        }}
        height={"90%"}
      >
        {/* <motion.div animate={bounceAnimation} style={{position:"absolute", left:"50%"}}>
            <Ball/>
          </motion.div> */}

        <Box
          flex={1}
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Typography
            component={motion.div}
            sx={{fontSize:{xs:"4vw", sm:"5vw",md:"6vw" }}}
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
            sx={{fontSize:{xs:"2vw", sm:"2vw",md:"2vw" }}}
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

          {/* <Grow
            in={true}
            style={{ transformOrigin: "10 0 0 0" }}
            {...(true ? { timeout: 3000 } : {})}
          >
            <Typography
              component="div"
              fontSize={22}
              fontWeight={500}
              style={{ fontFamily: '"Roboto Mono"' }}
              color={"#fff"}
              textTransform={"uppercase"}
              letterSpacing={"2.2px"}
            >
              Software Engineer, Front end & App Developer.
            </Typography>
          </Grow> */}

          {true && (
            <Box mt={5} display={"flex"} justifyContent={"center"} gap={5}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#000",
                  borderRadius: 48,
                  px: 4,
                  py: 0,

                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <HashLink
                  to={`/#footer`}
                  smooth={true}
                  style={{ textDecoration: "none",color:"#000" }}
                >
                  <Typography
                    fontSize={"small"}
                    style={{ fontFamily: '"Plus Jakarta Sans"',color:"inherit" }}
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
