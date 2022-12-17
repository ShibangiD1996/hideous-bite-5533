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
  useColorModeValue,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
export default function Slider() {
   
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("black", "black")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        width="25%"
        height={"30px"}
        marginTop={"-8%"}
        marginLeft={"15%"}
        onClick={onOpen}
        >
        ADD TO BAG
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border={"1px solid red"}
          marginLeft={"75%"}
          height={"100%"}
          marginTop="-0.01%"
        >
          <ModalHeader>
            <Flex gap="2%" backgroundColor={"#f7f7f7"}>
              <FaCartPlus />
              <Text marginTop={"-3px"}>My Bag{"counter"}</Text>
            </Flex>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Checkout
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
