import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const Experience = () => {
  const ExpArray = [
    {
      companyName: "Software Engineer at Hidile LLP",
      logo: "hidile-logo.webp",
      duration: "June 2021 - July 2023",
      desc: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      companyName: "Software Engineer at TechinWallet LLP",
      logo: "tw_logo.png",
      duration: "July 2023 - Present",
      desc: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
  ];
  return (
    <Box mt={20} id="Experience">
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
        Experience
      </Typography>
      {ExpArray.map((item, index) => (
        <Box
          mt={5}
          component={motion.div}
          animate={{ x: 0 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: index*3,delay:0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            key={index}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box
                component="img"
                sx={{ height: 50, width: 90, objectFit: "contain" }}
                alt="hello image"
                src={item?.logo}
              />

              <Typography
                fontSize={21}
                fontWeight={600}
                ml={2}
                color={"#fff"}
                style={{ fontFamily: '"Poppins"' }}
                textAlign={"justify"}
              >
                {item?.companyName}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="div"
                fontSize={14}
                fontWeight={400}
                color={"#8491A0"}
                style={{ fontFamily: '"Poppins"' }}
                textAlign={"justify"}
              >
                {item?.duration}
              </Typography>
            </Box>
          </Box>

          {/* //-------desc area--------------- */}
          <Box>
            <Typography
              component="div"
              fontSize={14}
              fontWeight={400}
              mt={2}
              color={"#8491A0"}
              style={{ fontFamily: '"Poppins"' }}
              textAlign={"justify"}
            >
              {item?.desc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
