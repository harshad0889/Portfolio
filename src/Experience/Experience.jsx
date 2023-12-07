import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Capsule from "../Components/Capsule";
const Experience = () => {
  const ExpArray = [
    {
      companyName: "Software Engineer at TechinWallet LLP",
      logo: "tw_logo.png",
      duration: "July 2023 - Present",
      desc: `Developed and maintained responsive websites using HTML, CSS, Mantine UI, TypeScript, and React.js.
      Designed and implemented a robust backend infrastructure utilizing Node.js, Fastify, Prisma, and
      PostgreSQL.
      Built a React Native application using Expo and integrated API’s.
      Enhanced website performance by implementing lazy loading and code minification.
      Designed and integrated the admin part of the application.`,
      techStack: [
        "React js",
        "Node js",
        "React Native",
        "Express js",
        "HTML",
        "CSS",
      ],
    },
    {
      companyName: "Software Engineer at Hidile LLP",
      logo: "hidile-logo.webp",
      duration: "June 2021 - July 2023",
      desc: `Designed and developed both front-end and back-end applications using HTML, CSS, React.js, Next.js,
      Node.js, and ExpressJs.
      Utilized Agile methodologies to enhance project management efficiency, fostering collaboration and
      adaptability in a dynamic development environment.
      Designed, integrated, and built mobile applications using React Native, focusing on creating user-friendly
      interfaces.
      Implemented UI mockups, integrated third-party React libraries, and managed/created Redux store data
      for efficient state management.`,
      techStack: [
        "React js",
        "Node js",
        "React Native",
        "Express js",
        "HTML",
        "CSS",
      ],
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
          transition={{ duration: index * 1.3, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
        >
          <Box
            sx={{display:{xs:"block",sm:"block",md:"flex"}}}
            justifyContent={"space-between"}
            alignItems={"center"}
            key={index}
          >
            <Box sx={{display:{xs:"block",sm:"block",md:"flex"}}} alignItems={"center"}>
              <Box
                component="img" mr={2}
                sx={{ height: 50, width: 90, objectFit: "contain" }}
                alt="hello image"
                src={item?.logo}
              />

              <Typography
                fontSize={21}
                fontWeight={600}
                
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
          <Box display={"flex"} flexWrap={"wrap"} mt={5} gap={2}>
            {item?.techStack.map((tech, key) => (
              <Capsule title={tech} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
