import React, { useEffect, useState } from "react";
import NavBar from "../components/Authentication/NavBar";
import { Container, Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import { navItemsEventPage as navItems } from "../constants";
import blob1 from "./../assets/blob1.gif";
import EventCards from "../components/EventCards";
import AddEvent from "../components/AddEvent";
import axios from "axios";

const EventPages = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleNextClick = () => {
    if (startIndex + 2 < events.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const fetchEvents = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/event/fetch", config);
    setEvents(data.results);
  };

  useEffect(() => {
    fetchEvents();
  }, [submit]);

  const visibleCards = events.slice(startIndex, startIndex + 3);

  return (
    <Container maxW={"full"}>
      <Flex flexDir={"column"}>
        <Flex flexDir={"row"}>
          <Box
            m={"0 100px 0 0"}
            w={"65%"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <NavBar items={navItems} />
            <Text
              fontFamily={"lastica"}
              fontWeight={"bold"}
              fontSize={"6xl"}
              color={"white"}
              m={"50px 250px 0 0"}
            >
              events
            </Text>
            <AddEvent submit={submit} setSubmit={setSubmit} />
          </Box>
          <Box maxW={"270px"} w={"100%"} width={"35%"}>
            <Image
              src={blob1}
              alt="blob"
              w={"100%"}
              h={"auto"}
              transform={"rotate(270deg)"}
            />
          </Box>
        </Flex>
        <Flex flexDir={"row"} justifyContent={"center"} align={"center"}>
          <Button
            height={"300px"}
            borderRightRadius={0}
            color={"white"}
            mr={2}
            rounded={"50%"}
            onClick={handlePrevClick}
            disabled={startIndex === 0 ? true : false}
          >
            <Text color={"black"}>{"<"}</Text>
          </Button>
          {visibleCards.map((event, index) => (
            <Flex
              marginRight={
                index === Math.min(events.length - 1, 2) ? "0px" : "30px"
              }
              key={index}
            >
              <EventCards event={event} />
            </Flex>
          ))}
          <Button
            background={"currentcolor"}
            height={"300px"}
            borderLeftRadius={0}
            color={"white"}
            ml={2}
            rounded={"50%"}
            onClick={handleNextClick}
          >
            <Text color={"black"}>{">"}</Text>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default EventPages;
