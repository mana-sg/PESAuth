import React from "react";
import {
  Container,
  Flex,
  Image,
  Box,
  Spacer,
  Text,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import mainPageBlob from "./../assets/mainpageBlob.gif";
import logo from "./../assets/logo.svg";
import buttonImage from "./../assets/buttonImage.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/events");
  };

  return (
    <Container maxW={"100%"}>
      <Flex>
        <Flex flexDir={"column"}>
          <HStack>
            <Image src={logo} alt="logo" w={"75px"} m={"70px 0 10px 70px"} />
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
          <VStack color={"white"}>
            <Text
              fontFamily={"lastica"}
              fontSize={"7xl"}
              fontWeight={"bold"}
              m={"110px 0 0 110px"}
            >
              pes-auth
            </Text>
            <Text
              fontSize={"4xl"}
              fontWeight={"semi-bold"}
              m={"10px 0 0 110px"}
            >
              AUTHENTICATION AT IT'S BEST
            </Text>
            <Button
              display={"flex"}
              justifyContent={"center"}
              rounded={"full"}
              p={"30px 100px 30px 100px"}
              m={"50px 0 0 110px"}
              backgroundImage={buttonImage}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              _hover={{ opacity: 0.5 }}
              onClick={handleClick}
            >
              <Text fontFamily={"lastica"} fontSize={"2xl"} color={"white"}>
                start
              </Text>
            </Button>
          </VStack>
        </Flex>
        <Spacer />
        <Box maxW={"400px"} m={"200px 150px 0 0"}>
          <Image src={mainPageBlob} alt="blob" draggable="false"></Image>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
