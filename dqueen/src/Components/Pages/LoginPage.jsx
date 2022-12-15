import { useRef, useState } from "react";
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
} from "@chakra-ui/react";
export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const handleChange = () => {};

  return (
    <div>
      <Button onClick={onOpen}>Signin</Button>
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
                    placeholder="*mobile"
                    name="mobile"
                    type="number"
                    onChange={handleChange}
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
