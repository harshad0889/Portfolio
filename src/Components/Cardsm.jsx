import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const Cardsm = () => {
  return (
    <Card variant="elevation" sx={{ height: 200, width: 250, borderRadius: 4}}>
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

export default Cardsm;
