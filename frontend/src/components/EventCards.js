import { Box, Text, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";

const EventCards = ({ event, submit, setSubmit }) => {
  const history = useHistory();
  const toast = useToast();

  const handleDetailSubmit = () => {
    localStorage.setItem("eventId", event._id);
    history.push("attendance");
  };
  const handleDelete = async () => {
    const eventId = event._id;
    const userInfo = localStorage.getItem("userInfo");

    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        },
      };
      const { data } = await axios.post(
        "/api/event/delete",
        { eventId },
        config
      );
      console.log(data);
      toast({
        title: "Deleted Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setSubmit((p) => !p);
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
    }
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
      <Button bg={"transparent"} onClick={handleDelete}>
        <DeleteIcon color={"red"} />
      </Button>
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
