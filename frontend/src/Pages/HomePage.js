import React from "react";
import { Container, Flex, Image, Box, Spacer } from "@chakra-ui/react";
import mainPageBlob from "./../assets/mainpageBlob.gif";

const HomePage = () => {
  return (
    <Container maxW={"100%"}>
      <Flex>
        <Spacer />
        <Box maxW={"400px"} m={"200px 150px 0 0"}>
          <Image src={mainPageBlob} alt="blob" draggable="false"></Image>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
