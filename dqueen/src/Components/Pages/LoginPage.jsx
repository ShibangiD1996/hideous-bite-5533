import { useRef, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Text,
  Image,
  Flex,
  Box,
  Divider,
  Avatar,
} from "@chakra-ui/react";
export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { authState, loginUser } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch(`https://reqres.in/api/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });
  //     res = await res.json();
  //     loginUser(res.token);
  //   } catch (err) {
  //     console.log(`Error Found:`, err);
  //   }
  // };
  // if (authState.isAuth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      <Avatar
        size={"sm"}
        src={
          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        }
        onClick={onOpen}
      />
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height="580px" width="100%">
          <Text
            height="30px"
            width="70%"
            textAlign="center"
            margin="auto"
            marginTop="50px"
            fontSize="sm"
          >
            Get 15% Good Points back on every order
          </Text>
          <Flex margin="auto">
            <Image src="Images/DQ.png" height="90px" />
            <ModalHeader marginTop="10px" fontSize="50px" marginTop="-8px">
              DQUEEN
            </ModalHeader>
          </Flex>
          <ModalCloseButton color="grey" size="md" />
          <ModalBody>
            <FormControl>
              <FormLabel
                marginLeft="40px"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="bold"
                fontFamily="din-2014, sans-serif"
              >
                * Mobile Number
              </FormLabel>
              <Divider color="#333333" orientation="horizontal" />
              <br />
              <Flex>
                <Box
                  border="1px solid grey"
                  borderRadius="4px"
                  boxShadow="none"
                  height="50px"
                  width="30%"
                  marginLeft="20px"
                >
                  <Flex>
                    <Image
                      height="20px"
                      marginLeft="15px"
                      marginTop="12px"
                      src="https://as1.ftcdn.net/v2/jpg/01/74/67/08/1000_F_174670852_YXvoPN8GvhfYPvpIKKXlgmj8knejHKdf.jpg"
                    />
                    <Text margin="auto" marginTop="10px" marginLeft="15px">
                      +91
                    </Text>
                  </Flex>
                </Box>
                <Box
                  border="1px solid grey"
                  borderRadius="4px"
                  marginLeft="20px"
                  boxShadow="none"
                  height="50px"
                  width="55%"
                  paddingLeft="30px"
                  textAlign="center"
                  paddingTop="10px"
                >
                  <input
                    ref={initialRef}
                    textAlign="center"
                    placeholder="email"
                    name="email"
                    type="email"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    ref={initialRef}
                    textAlign="center"
                    placeholder="password"
                    name="password"
                    type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
              </Flex>
            </FormControl>

            <Button
              marginTop="45px"
              marginLeft="3.5%"
              width="92%"
              height="55px"
              fontWeight="bold"
              color="white"
              backgroundColor="grey"
              // onSubmit={handleSubmit}
            >
              SIGN IN
            </Button>
            <br />
            <br />
            <br />

            <Text textAlign="center">or continue with</Text>
          </ModalBody>

          <ModalFooter marginBottom="15px">
            <Button mr={3} fontSize="12px" gap="5px" fontWeight="bold">
              <Image
                height="18px"
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              />
              Continue with facebook
            </Button>
            <Button fontSize="12px" gap="5px" fontWeight="bold">
              <Image
                height="18px"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              />
              Continue with google
            </Button>
          </ModalFooter>
          <Text fontSize="12px" margin="auto" paddingBottom="50px">
            By Signing up you agree to our <b> Terms & Conditions</b>
          </Text>
        </ModalContent>
      </Modal>
    </div>
  );
}
