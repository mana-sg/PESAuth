import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";
import logo from "./../../assets/logo.svg";

const NavBar = () => {
  return (
    <div>
      <Flex
        as="nav"
        justify="space-between"
        padding="1rem"
        color="white"
        margin={"20px 0 0 75px"}
      >
        <Link
          href="#"
          fontSize="xl"
          fontWeight="bold"
          marginRight={"2rem"}
          marginTop={"5px"}
        >
          <Image src={logo} alt="logo" w={"70px"} />
        </Link>
        <Flex
          fontFamily={"lastica"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          m={"25px 0 0 0"}
          fontSize={"15px"}
        >
          <Link href="/" marginRight="8.2rem">
            Home
          </Link>
          <Link href="/events" marginRight="8.2rem">
            Events
          </Link>
          <Link href="/coupons" marginRight="8.2rem">
            Coupons
          </Link>
          <Link href="/leaderboard" marginRight="8.2rem">
            Leaderboard
          </Link>
          <Link href="/scoring" marginRight="8.2rem">
            Scoring
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default NavBar;
