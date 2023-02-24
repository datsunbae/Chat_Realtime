import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [show, setShow] = useState(false);

  const handleAvatarChange = (avatar) => {
      console.log(avatar);
  }

  const handleSubmit = () => {};

  return (
    <VStack spacing="10px">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
            ></Input>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter your confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={show ? "text" : "password"}
            ></Input>
          </InputGroup>
        </FormControl>

        <FormControl id="avatar">
          <FormLabel>Your avatar</FormLabel>
          <InputGroup>
            <Input
              accept="img/*"
              placeholder="Enter your avatar"
              onChange={(e) => handleAvatarChange(e.target.files[0])}
              type="file"
            ></Input>
          </InputGroup>
        </FormControl>

        <Button type="submit" colorScheme="purple" size="sm" style={{marginTop: "20px"}} width="100%">
            Register
        </Button>
      </form>
    </VStack>
  );
};

export default Register;
