import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/Authentication/NavBar";

const scoringPage = () => {
  return (
    <Container maxW={"100%"} centerContent>
      <Flex flexDir={"column"}>
        <NavBar />
        <Flex m={"50px 0 0 175px"}>
          <Flex flexDir={"column"}>
            <Text
              fontFamily={"lastica"}
              fontSize={"40px"}
              fontWeight={"bold"}
              color={"white"}
            >
              Scoring
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default scoringPage;
