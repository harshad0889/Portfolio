import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Cardxl = () => {
  return (
    <Card sx={{ height: 300, width: 500,borderRadius:6 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          content
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cardxl;
