import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

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
        component={motion.div}
        // initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {techStackArray.map((item, index) => (
          <Box
            key={index}
            sx={{ cursor: "pointer" }}
            component={motion.div}
            whileHover={{ scale: 1.5 }}
            transition={{ type:"tween",duratio:2 }}
          >
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
