import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Typography
      component="div"
      fontSize={35}
      fontWeight={800}
      sx={{
        backgroundImage: "linear-gradient(180deg, #5BADFF 0%, #1373D1 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      style={{ fontFamily: '"Poppins"' }}
      textAlign={"center"}
      textTransform={"uppercase"}
    >
      {title}
    </Typography>
  );
};

export default Title;
