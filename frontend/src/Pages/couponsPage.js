import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  Container,
  Box,
  Image,
  FormControl,
  InputRightElement,
  InputGroup,
  Input,
  useToast,
} from "@chakra-ui/react";
import { navItems } from "../constants";
import blob3 from "../assets/blob3.gif";
import axios from "axios";

const CouponsPage = () => {
  const [selection, setSelection] = useState();
  const [teamName, setTeamName] = useState();
  const toast = useToast();

  const handleClick = async () => {
    if (!teamName) {
      toast({
        title: "Please fill in the team name",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (!selection) {
      toast({
        title: "Please select a coupon",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      };
      const eventId = localStorage.getItem("eventId");
      const { data } = await axios.post(
        "/api/coupons/addCoupon",
        { teamName, selection, eventId },
        config
      );
      toast({
        title: "Coupon Redeemed Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      console.log(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <Container maxW={"full"}>
      <Flex>
        <VStack>
          <NavBar items={navItems} />
          <HStack>
            <VStack>
              <Text
                fontFamily={"lastica"}
                fontSize={"5xl"}
                fontWeight={"bold"}
                color={"white"}
                m={"50px 0 20px 0"}
              >
                Coupons
              </Text>
              <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
                <InputGroup>
                  <Input
                    color={"white"}
                    type="text"
                    borderRadius={0}
                    width={"300px"}
                    h={"60px"}
                    placeholder="Team name"
                    m={"0 0 0 15px"}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                  <InputRightElement w={"4.5rem"} m={"10px 10px 0 0"}>
                    <Button
                      h="2.75rem"
                      size={"sm"}
                      color={"white"}
                      rounded={2}
                      bgColor={"#7102AB"}
                      onClick={handleClick}
                    >
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                variant={"outline"}
                bgColor={selection === "lunch" ? "#7102AB" : "transparent"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 125px 32px 125px"}
                m={"0px 0 40px 0px"}
                onClick={() => setSelection("lunch")}
              >
                Lunch
              </Button>
              <Button
                variant={"outline"}
                bgColor={selection === "goodies" ? "#7102AB" : "transparent"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 117px 32px 117px"}
                m={"0px 0 40px 0px"}
                onClick={() => setSelection("goodies")}
              >
                Goodies
              </Button>
              <Button
                variant={"outline"}
                bgColor={selection === "snacks" ? "#7102AB" : "transparent"}
                colorScheme="white"
                borderRadius={0}
                borderWidth={"1px"}
                textColor={"white"}
                padding={"32px 122px 32px 121px"}
                m={"0px 0 40px 0px"}
                onClick={() => setSelection("snacks")}
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
              <Box w={"350px"} h={"100%"}>
                <Image src={blob3} alt="blob" w={"100%"} h={"auto"} />
              </Box>
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default CouponsPage;
