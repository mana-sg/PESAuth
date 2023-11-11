/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
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
} from "@chakra-ui/react";
import mainPageBlob from "./mainpageBlob.gif";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";

const entryPages = () => {
  return (
    <Container maxW={"80%"}>
      <Flex>
        <Flex flexDirection={"column"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            w={"450px"}
            h={"45px"}
            borderWidth={"3px"}
            borderTopRadius={12}
            m={"130px 0 4px 0"}
          >
            <Text fontSize={"2xl"} color={"white"}>
              PESAUTH
            </Text>
          </Box>
          <Box
            w={"450px"}
            borderWidth={"1px"}
            borderBottomRadius={12}
            bg={"white"}
          >
            <Tabs variant="soft-rounded" colorScheme="purple">
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
        <Box maxW={"400px"} m={"200px 0 0 0"}>
          <Image src={mainPageBlob} alt="blob" draggable="false"></Image>
        </Box>
      </Flex>
    </Container>
  );
};

export default entryPages;
