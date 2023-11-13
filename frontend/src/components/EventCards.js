import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EventCards = ({ event }) => {
  const history = useHistory();

  const handleDetailSubmit = () => {
    localStorage.setItem("eventId", event._id);
    history.push("attendance");
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"white"}
      w={"320px"}
      h={"300px"}
    >
      <Text
        align={"center"}
        fontFamily={"lastica"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"#D63CBE"}
      >
        {event.name}
      </Text>
      <Text
        m={"80px 0 0 0"}
        fontFamily={"lastica"}
        fontWeight={"semi-bold"}
        fontSize={"22px"}
      >
        {event.date}
      </Text>
      <Button
        bgColor={"#2C1E49"}
        w={"60%"}
        rounded={6}
        m={"10px 0 0 0"}
        h={"45px"}
        _hover={{ opacity: 0.9 }}
        onClick={handleDetailSubmit}
      >
        <Text fontWeight={"bold"} color={"white"} fontSize={"1xl"}>
          Details
        </Text>
      </Button>
    </Box>
  );
};

export default EventCards;
