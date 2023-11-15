import React from "react";
import { navItemsEventPage as navItems } from "../constants";
import NavBar from "../components/Authentication/NavBar";
import { Container, Text, Box, Image, Flex, VStack } from "@chakra-ui/react";
import profileBlob from "../assets/profileBlob.gif";

const CreatorsPage = () => {
  return (
    <Container maxW={"full"} centerContent pos={"relative"}>
      <Flex m={"15px 500px 0 0"}>
        <NavBar items={navItems} />
      </Flex>
      <Text
        fontFamily={"lastica"}
        color={"white"}
        fontSize={"6xl"}
        fontWeight={"bold"}
        m={"200px 600px 0 0"}
        pos={"absolute"}
      >
        Creators
      </Text>
      <Flex flexDir={"row"}>
        <VStack spacing={0} m={"300px 0 0 0"}>
          <Box
            h={"250px"}
            w={"350px"}
            borderWidth={"4px"}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Text
              fontFamily={"lastica"}
              fontSize={"3xl"}
              fontWeight={"bold"}
              color={"white"}
              position={"absolute"}
              m={"0 150px 0 0"}
            >
              Manisha
            </Text>
            <Box w={"150px"} h={"100%"} m={"50px 0 0 0"} position={"absolute"}>
              <Image
                src={profileBlob}
                alt="profile blob"
                w={"full"}
                h={"auto"}
                transform={"rotate(180deg)"}
              />
            </Box>
          </Box>
          <Box
            borderWidth={"4px"}
            h={"75px"}
            w={"350px"}
            borderTopWidth={0}
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"lastica"}
              fontWeight={"bold"}
              fontSize={"2xl"}
              color={"white"}
              m={"0 0 0 10px"}
            >
              Socials
            </Text>
          </Box>
        </VStack>
        <VStack spacing={0} m={"225px 0 0 50px"}>
          <Box
            h={"250px"}
            w={"350px"}
            borderWidth={"4px"}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Text
              fontFamily={"lastica"}
              fontSize={"3xl"}
              fontWeight={"bold"}
              color={"white"}
              position={"absolute"}
              m={"0 150px 0 0"}
            >
              Manas
            </Text>
            <Box w={"150px"} h={"100%"} m={"50px 0 0 0"} position={"absolute"}>
              <Image
                src={profileBlob}
                alt="profile blob"
                w={"full"}
                h={"auto"}
                transform={"rotate(180deg)"}
              />
            </Box>
          </Box>
          <Box
            borderWidth={"4px"}
            h={"75px"}
            w={"350px"}
            borderTopWidth={0}
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"lastica"}
              fontWeight={"bold"}
              fontSize={"2xl"}
              color={"white"}
              m={"0 0 0 10px"}
            >
              Socials
            </Text>
          </Box>
        </VStack>
        <VStack spacing={0} m={"150px 0 0 50px"}>
          <Box
            h={"250px"}
            w={"350px"}
            borderWidth={"4px"}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Text
              fontFamily={"lastica"}
              fontSize={"3xl"}
              fontWeight={"bold"}
              color={"white"}
              position={"absolute"}
              m={"0 150px 0 0"}
            >
              Junaid
            </Text>
            <Box w={"150px"} h={"100%"} m={"50px 0 0 0"} position={"absolute"}>
              <Image
                src={profileBlob}
                alt="profile blob"
                w={"full"}
                h={"auto"}
                transform={"rotate(180deg)"}
              />
            </Box>
          </Box>
          <Box
            borderWidth={"4px"}
            h={"75px"}
            w={"350px"}
            borderTopWidth={0}
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"lastica"}
              fontWeight={"bold"}
              fontSize={"2xl"}
              color={"white"}
              m={"0 0 0 10px"}
            >
              Socials
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default CreatorsPage;
