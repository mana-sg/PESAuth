import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ScoreForm = () => {
  const [teamName, setTeamName] = useState();
  const [teamScore, setTeamScore] = useState();
  const [teamComment, setTeamComment] = useState();

  return (
    <Flex
      justifyContent={"center"}
      fontFamily={"lastica"}
      fontWeight="bold"
      color={"white"}
      m={"30px 0 0 10px"}
      flexDir={"column"}
    >
      <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
        <FormLabel ml={1} fontSize={"2xl"}>
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
        <FormLabel ml={1} fontSize={"2xl"}>
          Score
        </FormLabel>
        <Input
          type="text"
          borderRadius={0}
          padding={"5px 5px 0 5px"}
          width={"450px"}
          m={"10px 0 0 10px"}
          onChange={(e) => setTeamScore(e.target.value)}
        />
      </FormControl>
      <FormControl id="Team Name" m={"0 0 30px 0"} isRequired>
        <FormLabel ml={1} fontSize={"2xl"}>
          Comment
        </FormLabel>
        <Input
          type="text"
          borderRadius={0}
          padding={"5px 5px 0 5px"}
          width={"450px"}
          m={"10px 0 0 10px"}
          onChange={(e) => setTeamComment(e.target.value)}
        />
      </FormControl>
      <Button
        w={"450px"}
        borderRadius={0}
        m={"0 0 0 9px"}
        backgroundColor={"#676AC7"}
        _hover={{ opacity: 0.5 }}
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
