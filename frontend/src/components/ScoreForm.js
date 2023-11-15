import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";

const ScoreForm = () => {
  const [teamName, setTeamName] = useState();
  const [score, setscore] = useState();
  const [comment, setcomment] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleAddScore = async () => {
    setLoading(true);
    const eventId = localStorage.getItem("eventId");
    if (!teamName || !score || !comment) {
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
      const { data } = await axios.post(
        "/api/score/add",
        {
          teamName,
          score,
          comment,
          eventId,
        },
        config
      );
      console.log(data);
      toast({
        title: "Added the scores!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
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
    <Flex
      justifyContent={"center"}
      color={"white"}
      m={"30px 0 0 10px"}
      flexDir={"column"}
    >
      <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
        <FormLabel
          ml={1}
          fontSize={"2xl"}
          fontFamily={"lastica"}
          fontWeight="bold"
        >
          Team Name
        </FormLabel>
        <Input
          type="text"
          borderRadius={0}
          padding={"5px 5px 0 5px"}
          width={"450px"}
          m={"10px 0 0 10px"}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </FormControl>
      <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
        <FormLabel
          ml={1}
          fontSize={"2xl"}
          fontFamily={"lastica"}
          fontWeight="bold"
        >
          Score
        </FormLabel>
        <Input
          type="text"
          borderRadius={0}
          padding={"5px 5px 0 5px"}
          width={"450px"}
          m={"10px 0 0 10px"}
          onChange={(e) => setscore(e.target.value)}
        />
      </FormControl>
      <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
        <FormLabel
          ml={1}
          fontSize={"2xl"}
          fontFamily={"lastica"}
          fontWeight="bold"
        >
          Comment
        </FormLabel>
        <Input
          type="text"
          borderRadius={0}
          padding={"5px 5px 0 5px"}
          width={"450px"}
          m={"10px 0 0 10px"}
          onChange={(e) => setcomment(e.target.value)}
        />
      </FormControl>
      <Button
        w={"450px"}
        borderRadius={0}
        m={"0 0 0 9px"}
        backgroundColor={"#676AC7"}
        _hover={{ opacity: 0.5 }}
        onClick={handleAddScore}
        isLoading={loading}
      >
        <Text
          fontFamily={"lastica"}
          fontWeight={"bold"}
          fontSize={"1xl"}
          color={"white"}
        >
          Add Score
        </Text>
      </Button>
    </Flex>
  );
};

export default ScoreForm;
