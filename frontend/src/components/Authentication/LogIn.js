import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import buttonImage from "./../../assets/buttonImage.svg";

const LogIn = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleShow = () => setShow(!show);
  const history = useHistory();
  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
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
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Succesfull",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/events");
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
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel ml={1}>Email</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel ml={1}>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="purple"
        width={"50%"}
        mt={15}
        borderRadius={"full"}
        onClick={submitHandler}
        isLoading={loading}
        backgroundImage={buttonImage}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        _hover={{ opacity: 0.8 }}
      >
        Log In
      </Button>
    </VStack>
  );
};

export default LogIn;
