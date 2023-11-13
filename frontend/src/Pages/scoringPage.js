import { Container, Flex, Text, Image, Box } from "@chakra-ui/react";
import NavBar from "../components/Authentication/NavBar";
import ScoreForm from "../components/formScoring/ScoreForm";
import blob1 from "./../assets/blob1.gif";
import blob2 from "./../assets/blob2.gif";
import { navItems } from "../constants";

const scoringPage = () => {
  return (
    <Container maxW={"100%"} centerContent>
      <Flex flexDir={"column"}>
        <NavBar items={navItems} />
        <Flex m={"50px 0 0 175px"}>
          <Flex flexDir={"column"}>
            <Text
              fontFamily={"lastica"}
              fontSize={"40px"}
              fontWeight={"bold"}
              color={"white"}
            >
              Scoring
            </Text>
            <ScoreForm />
          </Flex>
          <Box
            maxW={"275px"}
            w={"100%"}
            m={"0 0 0 200px"}
            position={"relative"}
          >
            <Image
              src={blob2}
              alt="blob2"
              w={"100%"}
              h={"auto"}
              position={"absolute"}
              m={"130px 0 0 0"}
              zIndex={1}
            />
            <Image
              src={blob1}
              alt="blob1"
              w={"100%"}
              h={"auto"}
              transform={"rotate(180deg)"}
              position={"absolute"}
              m={"0 0 200px 100px"}
              zIndex={0}
            />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default scoringPage;
