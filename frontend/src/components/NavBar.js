import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";
import logo from "./../../assets/logo.svg";

const NavBar = ({ items }) => {
  return (
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
        {items.map((item, index) => (
          <Link key={index} href={`/${item}`} marginRight="8.2rem">
            {item}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
