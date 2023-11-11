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
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import buttonImage from "./../../assets/buttonImage.svg";

const SignUp = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // const history = useHistory();
  const toast = useToast();

  const handleShow = () => setShow(!show);
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match!",
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
        "/api/user",
        { name, email, password },
        config
      );
      toast({
        title: "Registration Succesfull",
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
        status: "error",
        description: error.response.data.message,
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack>
      <FormControl id="first-name" isRequired>
        <FormLabel ml={1}>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="confirm-password" isRequired>
        <FormLabel ml={1}>Confirm Password</FormLabel>
        <Input
          type={show ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="purple"
        width={"50%"}
        mt={15}
        borderRadius={"full"}
        isLoading={loading}
        onClick={submitHandler}
        backgroundImage={buttonImage}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        _hover={{ opacity: 0.8 }}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
