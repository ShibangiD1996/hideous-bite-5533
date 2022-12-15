import { ReactNode } from "react";
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
  useColorModeValue,
  Stack,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import LoginPage from "../Components/Pages/LoginPage";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
} from "@chakra-ui/icons";

export const NavBar = () => {
  return (
    <div style={{ position: "fixed", backgroundColor: "white", width: "100%" }}>
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
            aria-label={"Open Menu"}
            display={{ md: "none" }}
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
          <Flex paddingRight="80px" alignItems={"center"} gap="30px">
            <FaCartPlus size="28px" />

            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />

            <LoginPage />
          </Flex>
        </Flex>
      </Box>
      <Tabs variant="enclosed" marginLeft="8%">
        <TabList>
          <Tab>HOME</Tab>
          <Tab>MAKE UP</Tab>
          <Tab>HAIR CARE</Tab>
          <Tab>SKIN CARE</Tab>
          <Tab>SANITIZING CARE</Tab>
          <Tab>COLLECTION</Tab>
          <Tab>REWARDS</Tab>
          <Tab>DQUEEN STUDIO</Tab>
          <Tab>OFFERS</Tab>
        </TabList>
        <TabPanels>
          <TabPanel />
        </TabPanels>
      </Tabs>
    </div>
  );
};
