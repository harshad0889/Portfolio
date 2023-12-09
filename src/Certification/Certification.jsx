import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../Components/Title";
import { motion } from "framer-motion";

const Certification = () => {
  const certArray = [
    {
      logo: "data:image/png;base64,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",
      course: "Microsoft Azure Administrator (2023)",

      desc: `Microsoft azure Administrator is a Program to master the Azure infrastructure by understanding Azure
      Cloud Architect Technology Solutions, implementing workloads and security in Azure, creating and
      deploying apps in Azure, and securing data in Azure.`,
      year: "2023",
    },
    {
      logo: "data:image/png;base64,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",
      course: "CCNA Routing and Switching (2018)",

      desc: `The CCNA Switching and Routing course provides essential networking skills. Covering Cisco technologies, it focuses on configuring and managing routers and switches, implementing secure and scalable networks. Students gain expertise in routing protocols, LAN switching, and network troubleshooting.`,
      year: "2018",
    },
  ];
  return (
    <Box mt={20} id="Certification" justifyContent={"flex-start"}>
      <Box sx={{display:{xs:"block",sm:"block",md:"flex"}}} flex={1} alignItems={"flex-start"}>
        <Box
          flex={2}
          component={motion.div}
          transition={{ duration: 1, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -500 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {" "}
          <Title title={"Certification"} />
        </Box>
        <Box flex={3} mt={5}>
          {certArray.map((item, index) => (
            <Box
              mt={5}
              component={motion.div}
              // animate={{ x: 0 }}
              // initial={{ x: "-100vw" }}
              // animate={{ x: 0 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1,  }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 500 },
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                key={index}
              >
                <Box sx={{display:{xs:"block",sm:"block",md:"flex"}}} alignItems={"flex-start"}>
                  <Box
                    component="img"
                    sx={{  width: 70, objectFit: "fill",borderRadius:2 }}
                    alt="certification image"
                    src={item?.logo}
                    mr={2}
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
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Certification;
