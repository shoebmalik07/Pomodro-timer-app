import { Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { auth, provider } from "./Firebase";
import { useEffect } from "react";
import FormContainer from "./FormContainer";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";

const LoginScreen = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/timer");
  };

  useEffect(() => {}, []);

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="p" h="30rem">
      <FormContainer>
        <Heading as="h1" mb="2" fontSize="3xl">
          Login
        </Heading>
        <Button
          mt={"10"}
          bgColor={"lightsalmon"}
          color="white"
          _hover={{ color: "black", bgColor: "white" }}
          onClick={signInWithGoogle}
        >
          <Icon as={FcGoogle} mx="2" fontSize={"xl"} />{" "}
          <Text fontSize="l">Sign in with Google</Text>
        </Button>
      </FormContainer>
    </Flex>
  );
};

export default LoginScreen;
