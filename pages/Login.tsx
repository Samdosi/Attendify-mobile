import {
  Center,
  Box,
  Heading,
  VStack,
  Link,
  FormControl,
  Button,
  HStack,
  Text,
  Input,
  NativeBaseProvider,
  Pressable,
  Icon,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as React from "react";

import { Color } from "../styles/GlobalStyles";

const Login = () => {
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color={Color.gold}
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color={Color.white}
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input color={Color.white} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color={Color.white}
                    />
                  </Pressable>
                }
                placeholder="Password"
                color={Color.white}
              />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
