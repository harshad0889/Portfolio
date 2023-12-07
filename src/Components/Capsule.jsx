import { Chip } from "@mui/material";
import React from "react";

const Capsule = ({ title }) => {
  return (
    <Chip
      variant="outlined"
      sx={{
        color: "white",
        fontWeight: "400",
        fontFamily: "Plus Jakarta Sans",
        borderWidth:2,
        borderColor:" #1373D1 "
        // backgroundImage: "linear-gradient(180deg, #5BADFF 0%, #1373D1 100%)",
      }}
      size="medium"
      label={title}
    />
  );
};
// linear-gradient(116deg, #FF8660 71.79%, #9A33FF 95.51%))
export default Capsule;
