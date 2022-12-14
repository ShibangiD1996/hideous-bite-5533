import { ReactNode } from "react";
import { useRef } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import Login from "../Components/Pages/LoginPage";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
} from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const LoginPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <input ref={initialRef} placeholder="mobile" name="mobile" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box backgroundColor="#fee8e8" height="35px" paddingLeft="130px">
        <Box width="200px" display="flex" gap="10px" paddingTop="5px">
          <Image
            height="25px"
            src="https://as2.ftcdn.net/v2/jpg/02/44/30/27/1000_F_244302756_PBL3i8y80heWjmBCo5F7ctdX4KV2hqZw.jpg"
          />
          <Text fontSize="12px" marginTop="5px">
            Pick Any Product at Rs. 199
          </Text>
        </Box>
        <Text
          marginTop="-20px"
          fontSize="12px"
          color="#ff9797"
          fontWeight="bold"
          paddingRight="900px"
        >
          SHOP NOW
        </Text>
        <Box width="150px" marginTop="-25px" marginLeft="1150px">
          <Image
            height="23px"
            src="https://cdn-icons-png.flaticon.com/512/126/126122.png"
          />
          <Text marginTop="-23px" paddingLeft="15px" fontWeight="bold">
            DQueen Store
          </Text>
        </Box>
      </Box>

      <Box bg={useColorModeValue("white.100", "white.100")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box display="flex" paddingLeft="110px">
            <Image height="50px" src="Images/DQ.png" alt="dq" />
            <Text
              marginTop="5px"
              marginLeft="5px"
              fontWeight="bold"
              fontSize="25px"
            >
              DQUEEN
            </Text>
          </Box>
          <InputGroup marginLeft="85px">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon height="50px" color="gray" />}
              size="md"
            />
            <Input
              height="40px"
              width="600px"
              backgroundColor="#fafafa"
              size="md"
              placeholder="Find Lipstick,Eyeliner,Makeup Tutorial,etc"
            />
          </InputGroup>
          <Flex alignItems={"center"}>
            <FaCartPlus />

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={onOpen}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Box>
      <Box p={4}>Main Content Here</Box>
    </>
  );
};
