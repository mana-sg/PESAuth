import React, { useState } from "react";
import NavBar from "../components/Authentication/NavBar";
import { navItems } from "../constants";
import {
  Container,
  VStack,
  Box,
  Image,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import blob1 from "./../assets/blob1.gif";
import blob2 from "./../assets/blob2.gif";
import axios from "axios";

const AttendancePage = () => {
  const [teamName, setTeamName] = useState("");
  const [participant1, setParticipant1] = useState("");
  const [participant2, setParticipant2] = useState("");
  const [participant3, setParticipant3] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    if (!teamName || !participant1 || !participant2 || !participant3) {
      toast({
        title: "Please fill in all the Fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
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
        "/api/team/add",
        {
          teamName,
          eventId,
        },
        config
      );
      const teamId = data._id;
      toast({
        title: "Added the team!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      const { data2 } = await axios.post(
        "/api/participant/create",
        {
          participant1,
          participant2,
          participant3,
          teamId,
          eventId,
        },
        config
      );
      console.log(data2);
      setLoading(false);
      return;
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Container maxW={"full"}>
      <Flex flexDir={"column"}>
        <NavBar items={navItems} />
        <Flex flexDir={"row"}>
          <Flex position={"relative"}>
            <Box w={"300px"} h={"100%"} m={"120px 0 0 380px"} pos={"absolute"}>
              <Image
                src={blob1}
                alt="blob1"
                w={"100%"}
                h={"auto"}
                transform={"rotate(250deg)"}
              />
            </Box>
            <Box
              w={"300px"}
              h={"100%"}
              m={"50px 100px 0 200px"}
              pos={"absolute"}
            >
              <Image
                src={blob2}
                alt="blob2"
                w={"100%"}
                h={"auto"}
                transform={"rotate(80deg)"}
              />
            </Box>
          </Flex>
          <Box
            h={"475px"}
            w={"450px"}
            borderTopRadius={"20px"}
            m={"50px 0 0 800px"}
            borderWidth={"3px"}
          >
            <VStack color={"white"}>
              <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
                <FormLabel
                  ml={1}
                  fontSize={"2xl"}
                  fontFamily={"lastica"}
                  fontWeight="bold"
                  m={"5px 0 0 20px"}
                >
                  Team Name
                </FormLabel>
                <Input
                  type="text"
                  borderRadius={10}
                  padding={"5px 5px 0 5px"}
                  width={"400px"}
                  m={"0 0 0 20px"}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </FormControl>
              <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
                <FormLabel
                  ml={1}
                  fontSize={"2xl"}
                  fontFamily={"lastica"}
                  fontWeight="bold"
                  m={"5px 0 0 20px"}
                >
                  PRN(participant 1)
                </FormLabel>
                <Input
                  type="text"
                  borderRadius={10}
                  padding={"5px 5px 0 5px"}
                  width={"400px"}
                  m={"0 0 0 20px"}
                  onChange={(e) => setParticipant1(e.target.value)}
                />
              </FormControl>
              <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
                <FormLabel
                  ml={1}
                  fontSize={"2xl"}
                  fontFamily={"lastica"}
                  fontWeight="bold"
                  m={"5px 0 0 20px"}
                >
                  PRN(participant 2)
                </FormLabel>
                <Input
                  type="text"
                  borderRadius={10}
                  padding={"5px 5px 0 5px"}
                  width={"400px"}
                  m={"0 0 0 20px"}
                  onChange={(e) => setParticipant2(e.target.value)}
                />
              </FormControl>
              <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
                <FormLabel
                  ml={1}
                  fontSize={"2xl"}
                  fontFamily={"lastica"}
                  fontWeight="bold"
                  m={"5px 0 0 20px"}
                >
                  PRN(participant 3)
                </FormLabel>
                <Input
                  type="text"
                  borderRadius={10}
                  padding={"5px 5px 0 5px"}
                  width={"400px"}
                  m={"0 0 0 20px"}
                  onChange={(e) => setParticipant3(e.target.value)}
                />
              </FormControl>
            </VStack>
            <Button
              w={"445px"}
              borderTopRadius={0}
              borderBottomRadius={"full"}
              m={"10px 10px 0 0"}
              onClick={handleSubmit}
              isLoading={loading}
            >
              <Text fontFamily={"lastica"} fontSize={"1xl"} fontWeight={"bold"}>
                Add Team
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AttendancePage;
