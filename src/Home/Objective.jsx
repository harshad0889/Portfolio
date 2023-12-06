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

const Objective = () => {
  return (
    <Box id="Objective"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backgroundImage: `url(${"https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg"})`,
      }}
    >
      <Box
        display={"flex"}
        py={20}
        sx={{
          backgroundImage: "linear-gradient(180deg,transparent 50%,#000 80%)",
        }}
        height={"90%"}
      >
         

        <Box flex={1} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
          <Typography
            component={motion.div}
            fontSize={"5vw"}
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
            fontSize={22}
            fontWeight={500}
            style={{ fontFamily: '"Roboto Mono"' }}
            color={"#fff"}
            textTransform={"uppercase"}
            letterSpacing={"2.2px"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{
              delay: 2,
              duration: 1,
              type: "tamalsen",
              stiffness: 5,
            }}
          >
            Software Engineer, Front end & App Developer.
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

          {false && (
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
                <Typography
                  fontSize={18}
                  style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  fontWeight={800}
                >
                  Get In Touch
                </Typography>
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
                  py: 2,
                }}
              >
                <Typography
                  fontSize={18}
                  style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  fontWeight={800}
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
