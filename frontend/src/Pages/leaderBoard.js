import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { navItems } from "../constants";
import {
  Container,
  Heading,
  Box,
  Text,
  VStack,
  Image,
  Flex,
  useToast,
} from "@chakra-ui/react";
import mainPageBlob from "./../assets/mainpageBlob.gif";
import axios from "axios";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);
  const toast = useToast();
  const fetchTop = async () => {
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
      const { data } = await axios.post("/api/team/fetch", { eventId }, config);
      setScores(data.teams);
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
  useEffect(() => {
    fetchTop();
  });

  return (
    <Container maxW={"100%"}>
      <NavBar items={navItems} />
      <Heading
        color="white"
        fontFamily="lastica"
        m={"20px 0 0 150px"}
        fontSize={"5xl"}
      >
        LEADERBOARD
      </Heading>
      <Flex flexDir={"row"} pos={"relative"}>
        <Box m={"30px 0 0 120px"} pos={"absolute"}>
          <VStack>
            <Text
              fontFamily={"lastica"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"white"}
              m={"0 300px 10px 0"}
            >
              team name
            </Text>
            {scores.map((score, index) => (
              <Box
                borderWidth={"3px"}
                borderColor={"gray"}
                h={"60px"}
                w={"450px"}
                mb={"10px"}
                display={"flex"}
                alignItems={"center"}
                key={index}
              >
                <Text
                  fontFamily={"lastica"}
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                  color={"white"}
                  ml={"20px"}
                >
                  {score.teamName}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box m={"30px 0 0 600px"} pos={"absolute"}>
          <VStack>
            <Text
              fontFamily={"lastica"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"white"}
              m={"0 400px 10px 0"}
            >
              score
            </Text>
            {scores.map((score, index) => (
              <Box
                borderWidth={"3px"}
                borderColor={"gray"}
                h={"60px"}
                w={"300px"}
                mb={"10px"}
                display={"flex"}
                alignItems={"center"}
                mr={"200px"}
                key={index}
              >
                <Text
                  fontFamily={"lastica"}
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  color={"white"}
                  ml={"20px"}
                >
                  {score.score}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box w={"270px"} h={"100%"} pos={"absolute"} m={"120px 0 0 1000px"}>
          <Image
            src={mainPageBlob}
            alt="Blob"
            w={"100%"}
            h={"auto"}
            draggable={false}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default LeaderBoard;
