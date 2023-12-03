import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Objective = () => {
  return (
    <Box
      sx={{
        height: "80vh",
      }}
    >
      <Box  display={"flex"}>
        <Box display={"flex"} flex={1}>
          <Box flex={1} textAlign={"center"} justifyContent={"center"}>
            <Typography
              component="div"
              fontSize={55}
              fontWeight={800}
              style={{ fontFamily: '"Poppins", Arial' }}
              color={"#fff"}
              textTransform={"uppercase"}
              sx={{
                backgroundImage:
                  "linear-gradient(116deg, #FF8660 71.79%, #9A33FF 95.51%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              I do code and make content about it!
            </Typography>
            <Typography
              component="div"
              fontSize={18}
              fontWeight={300}
              mt={5}
              color={"#fff"}
              style={{ fontFamily: '"Plus Jakarta Sans"' }}
              textAlign={"justify"}
            >
              I am a seasoned full-stack software engineer with over 8 years of
              professional experience, specializing in backend development. My
              expertise lies in crafting robust and scalable SaaS-based
              architectures on the Amazon AWS platform.
            </Typography>

            <Box mt={5} display={"flex"} justifyContent={"center"} gap={5}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#000",
                  borderRadius: 48,
                  px:2,
                  py:3,
                  
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
                  pt: 2,
                  pl: 3,
                  pb: 2,
                  pr: 3,
                  //   '&:hover': {
                  //     backgroundColor: 'black',
                  //   },
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
          </Box>
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={48}
          >
            <Box
              component="img"
              sx={{ height: 255, width: 255, objectFit: "cover" }}
              alt="hello image"
              src="Avatar.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Objective;
