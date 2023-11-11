/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Spacer,
  Tabs,
  TabPanel,
  TabList,
  TabPanels,
  Tab,
  HStack,
} from "@chakra-ui/react";
import mainPageBlob from "./mainpageBlob.gif";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";
import logo from "./../assets/logo.svg";

const entryPages = () => {
  const [view, setView] = useState(true);

  return (
    <Container maxW={"100%"}>
      <Flex>
        <Flex flexDirection={"column"}>
          <HStack>
            <Image src={logo} alt="logo" w={"75px"} m={"30px 0 10px 160px"} />
            <Text
              color={"white"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              fontFamily={"lastica"}
              m={"35px 0 10px 20px "}
            >
              PES University
            </Text>
          </HStack>
          <Box
            display={"flex"}
            justifyContent={"center"}
            w={"450px"}
            h={"45px"}
            borderWidth={"3px"}
            borderTopRadius={12}
            m={view ? "20px 0 4px 150px" : "70px 0 4px 150px"}
          >
            <Text fontSize={"3xl"} fontFamily={"lastica"} color={"white"}>
              PESAUTH
            </Text>
          </Box>
          <Box
            w={"450px"}
            borderWidth={"1px"}
            borderBottomRadius={12}
            m={"0 0 0 150px"}
            bg={"white"}
          >
            <Tabs
              variant="soft-rounded"
              colorScheme="purple"
              onChange={() => setView(!view)}
            >
              <TabList m={"1em"}>
                <Tab width="50%">SignUp</Tab>
                <Tab width="50%">LogIn</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SignUp />
                </TabPanel>
                <TabPanel>
                  <LogIn />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
        <Spacer />
        <Box maxW={"400px"} m={"200px 150px 0 0"}>
          <Image src={mainPageBlob} alt="blob" draggable="false"></Image>
        </Box>
      </Flex>
    </Container>
  );
};

export default entryPages;
