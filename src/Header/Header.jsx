import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Hidden } from "@mui/material";
import { colors } from "../Utils/colors";
const Header = () => {
  const menus = ["Home", "Experience", "Education", "About us", "Contact us"];

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="static" sx={{ backgroundColor: colors.primaryDark }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Box
            component="img"
            sx={{ height: 60, width: 60, objectFit: "cover" }}
            alt="hello image"
            src="coffee_coder.jpg"
          />
        </IconButton>
        {/* //--------center box--------- */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Hidden smDown>
            <Box
              sx={{ gap: 5, display: { xs: "none", sm: "none", md: "flex" } }}
            >
              {menus.map((item, index) => (
                <Typography
                  component="div"
                  fontSize={15}
                  fontWeight={400}
                  
                  style={{ fontFamily: '"Plus Jakarta Sans"',cursor:"pointer" }}
                  //   style={{ fontFamily: '"Poppins", Arial' }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Hidden>
        </Box>

        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
