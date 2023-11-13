import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const AddEvent = (props) => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!name || !date) {
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
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/event/create",
        { name, date },
        config
      );
      console.log(data);
      toast({
        title: "Added Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      props.setSubmit((p) => !p);
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

  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button
            rounded={"full"}
            m={"25px 300px 0 0"}
            p={"25px 50px 25px 50px"}
            bg={"#C138B0"}
            _hover={{ opacity: 0.8 }}
          >
            <Text
              fontFamily={"lastica"}
              fontSize={"1xl"}
              fontWeight={"bold"}
              color={"white"}
            >
              Add Event
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Event Name</FormLabel>
                <Input
                  placeholder="Event Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  placeholder={"(DD/MM/YYYY)"}
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
              <Button
                variant="solid"
                bg={"#C138B0"}
                textColor={"white"}
                _hover={{ opacity: 0.8 }}
                onClick={handleSubmit}
                isLoading={loading}
              >
                Add
              </Button>
            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddEvent;
