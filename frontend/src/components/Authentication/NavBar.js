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
        margin={"10px 0 0 75px"}
      >
        <Link href="#" fontSize="xl" fontWeight="bold">
          <Image src={logo} alt="logo" w={"75px"} />
        </Link>
        <Flex
          fontFamily={"lastica"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          m={"25px 0 0 0"}
          fontSize={"15px"}
        >
          <Link href="#" marginRight="10rem" marginLeft="2rem">
            Home
          </Link>
          <Link href="#" marginRight="10rem">
            About
          </Link>
          <Link href="#" marginRight="10rem">
            Services
          </Link>
          <Link href="#" marginRight="10rem">
            Contact
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default NavBar;
