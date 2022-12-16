import axios from "axios";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://smiling-lime-chicken.cyclic.app/cosmetics/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { image, brand, description, price, rating, offerPrice } = product;

  return (
    <Container maxW={"5xl"} paddingTop="6%">
      <Text paddingTop="5%">Home/Makeup/FaceMakeup/{brand}</Text>
          <Box>
          <Image
            rounded={"md"}
            alt={brand}
            src={image}
            h={{ base: "100%", sm: "400px", lg: "400px" }}
          />
        </Box>
        <Box>
             <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
            >
              {brand}
            </Heading>
           </Box>   
    </Container>
  );
}
   // <Button
          //   rounded={"none"}
          //   w={"full"}
          //   mt={8}
          //   size={"lg"}
          //   py={"7"}
          //   bg={useColorModeValue("gray.900", "gray.50")}
          //   color={useColorModeValue("white", "gray.900")}
          //   textTransform={"uppercase"}
          //   _hover={{
          //     transform: "translateY(2px)",
          //     boxShadow: "lg",
          //   }}
          // >
          //   Add to cart
          // </Button>

          // <Stack direction="row" alignItems="center" justifyContent={"center"}>
          //   <MdLocalShipping />
          //   <Text>2-3 business days delivery</Text>
          // </Stack>