import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Education = () => {

  
  const EduArray = [
    {
      logo: "html5.png",
      course: "Master Of Computer Application",
      college: "APJ Abdul Kalam Technological University",
      desc: "Pursued master of computer Application with 8.5CGPA",
      year: "2019 - 2021",
    },
    {
      logo: "html5.png",
      course: "Master Of Computer Application",
      college: "APJ Abdul Kalam Technological University",
      desc: "Pursued master of computer Application with 8.5CGPA",
      year: "2019 - 2021",
    },
    {
      logo: "html5.png",
      course: "Master Of Computer Application",
      college: "APJ Abdul Kalam Technological University",
      desc: "Pursued master of computer Application with 8.5CGPA",
      year: "2019 - 2021",
    },
  ];
  return (
    <Box mt={20} id="Education">
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
        Education
      </Typography>
      {EduArray.map((item, index) => (
        <Box
          mt={5}
          component={motion.div}
          // animate={{ x: 0 }}
          // initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            key={index}
          >
            <Box display={"flex"} alignItems={"flex-start"}>
              <Box
                component="img"
                sx={{ height: 50, width: 90, objectFit: "contain" }}
                alt="hello image"
                src={item?.logo}
              />

              <Box>
                <Typography
                  fontSize={21}
                  fontWeight={600}
                  mb={1}
                  color={"#fff "}
                  style={{ fontFamily: '"Poppins"' }}
                  textAlign={"justify"}
                >
                  {item?.course}
                </Typography>
                <Typography
                  component="div"
                  fontSize={18}
                  fontWeight={500}
                  color={"#e2e2e2"}
                  style={{ fontFamily: '"Poppins"' }}
                  textAlign={"justify"}
                >
                  {item?.college}
                </Typography>
                <Typography
                  component="div"
                  fontSize={14}
                  fontWeight={400}
                  color={"#8491A0"}
                  style={{ fontFamily: '"Poppins"' }}
                  textAlign={"justify"}
                >
                  {item?.desc}
                </Typography>
              </Box>
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
                {item?.year}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
