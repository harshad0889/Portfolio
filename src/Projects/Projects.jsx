import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Cardxl from "../Components/Cardxl";
import Cardsm from "../Components/Cardsm";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import shadows from "@mui/material/styles/shadows";
import { Link } from "react-router-dom";

const Projects = () => {
  const ProjectsArray = [
    {
      title: "Flexirecs",
      bg: "Flexirecs.webp",
      link: "https://app.flexirecs.com",
      content:
        "A UK-based manpower supply company in the healthcare sector. It recruits nurses from around the world for their employers who provide nursing services in Basildon. The company also had an educational line of business where they helped nursing job aspirants with their journey toward securing a job in the UK.",
    },
    {
      title: "Flexirecruits",
      bg: "frecruits.png",
      link: "https://flexirecs.com/",
      content:
        "A UK-based manpower supply company in the healthcare sector. It recruits nurses from around the world for their employers who provide nursing services in Basildon. The company also had an educational line of business where they helped nursing job aspirants with their journey toward securing a job in the UK.",
    },
    {
      title: "Business Kerala",
      bg: "/bkfinder.png",
      link: "https://bkfinder.com/",
      content:
        "BUSINESS KERALA is one of the largest business association networks in India founded by a team of young and innovative business people from KERALA. BUSINESS KERALA offers end-to-end services and solutions to all business categories. ",
    },
    {
      title: "Janbazar",
      bg: "/janb.webp",
      link: "https://janbazar.in/",
      content:
        "Janbazar CSC- Janseva Kendra an initiative of Janbazar “ with aim to support make India Digital and make availability of all services at door step",
    },
  ];

  return (
    <Box mt={20} id="Projects">
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
        Projects
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        justifyContent={"start"}
        flexWrap={"wrap"}
        mt={5}
      >
        <Grid container spacing={5}>
          {ProjectsArray.map((card, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Link
                to={card?.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    borderRadius: 6,

                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={card.bg}
                      alt="green iguana"
                      sx={{
                        objectFit: "contain",
                        transition: "transform .3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.1)", // Scale up on hover
                        },
                      }}
                    />
                  </Card>

                  <CardContent
                    sx={{
                      background:
                        "linear-gradient(to bottom, #2a2a2a, rgba(0, 0, 0, 0.8))",
                      // background:
                      //   "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))",

                      //   position: "absolute", bottom: 0, zIndex: 999
                    }}
                  >
                    <Typography
                      component="div"
                      fontSize={22}
                      fontWeight={500}
                      fontFamily={"Poppins"}
                      sx={{ color: "#fff" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily={"Poppins"}
                      sx={{ color: "#8491A0" }}
                      mt={1}
                    >
                      {`${card.content.substr(0, 100)}...`}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
