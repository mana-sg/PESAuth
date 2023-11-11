import React from "react";
import NavBar from "../components/Authentication/NavBar";
import {
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  Container,
  Box,
} from "@chakra-ui/react";

const eventPages = () => {
  return (
    <Container maxW={"full"} centerContent>
      <Flex>
        <VStack>
          <NavBar />
          <HStack>
            <VStack>
              <Text
                fontFamily={"lastica"}
                fontSize={"5xl"}
                fontWeight={"bold"}
                color={"white"}
                m={"90px 0 50px 0"}
              >
                Coupons
              </Text>
              <Button
                variant={"outline"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 125px 32px 125px"}
                m={"0px 0 40px 0px"}
              >
                Lunch
              </Button>
              <Button
                variant={"outline"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 117px 32px 117px"}
                m={"0px 0 40px 0px"}
              >
                Goodies
              </Button>
              <Button
                variant={"outline"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 122px 32px 121px"}
                m={"0px 0 40px 0px"}
              >
                Snacks
              </Button>
            </VStack>
            <Flex
              display={"flex"}
              justifyContent={"center"}
              textColor={"black"}
              m={"130px 0 0 200px"}
            >
              <Box
                padding={"150px 100px 150px 100px"}
                borderWidth={2}
                backgroundColor={"white"}
              >
                <Text
                  fontFamily={"lastica"}
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                >
                  Scanner
                </Text>
              </Box>
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default eventPages;
