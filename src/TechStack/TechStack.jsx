import { Box, Typography } from "@mui/material";
import React from "react";

const TechStack = () => {
  const techStackArray = [
    "html5.png",
    "css3.png",
    "javascript.png",
    "logo192.png",
    "nodejs.png",
    "npm.png",
    "gitlab.png",
    "postgresql.png",
    "atom.png",
  ];
  return (
    <Box>
      <Typography
        component="div"
        fontSize={35}
        fontWeight={800}
        sx={{
          backgroundImage: "linear-gradient(180deg, #C5C5C5 0%, #fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        style={{ fontFamily: '"Poppins"' }}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        Tech Stack
      </Typography>

      {/* //------stack list area----------- */}
      <Box
        my={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        flexWrap={"wrap"}
      >
        {techStackArray.map((item, index) => (
          <Box key={index}>
            <Box
              component="img"
              sx={{ height: 50, width: 90, objectFit: "contain" }}
              alt="stack image"
              src={item}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
