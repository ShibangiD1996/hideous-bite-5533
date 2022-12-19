import axios from "axios";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState,useContext } from "react";
// import Slider from "./Slider/Slider";
import { MdLocalShipping } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


export default function ProductDetails() {
  
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { state, dispatch } = useContext(CartContext);
  
  useEffect(() => {
    axios
      .get(`https://smiling-lime-chicken.cyclic.app/cosmetics/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const ItemADDED = (pitem) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: pitem,
    });
   
  };


  const { image, brand, description, price, rating, rating_no, offerPrice } =
    product;

  return (
    <Container maxW={"5xl"} paddingTop="6%">
      <Text paddingTop="10%">Home/Makeup/FaceMakeup/{brand}</Text>
      <Flex>
        <Box paddingTop="5%">
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
            marginTop="8%"
            marginLeft="1%"
            // onClick={AddProdcut}
          >
            {brand}
          </Heading>
          <Text marginRight={"32%"} marginTop={"2%"}>
            {description}
          </Text>
          <Flex gap={"2%"} marginTop={"2%"}>
            <Text marginLeft={"13%"}>{rating}</Text>
            <Image
              height={"22px"}
              src="https://iconsplace.com/wp-content/uploads/_icons/ffc0cb/256/png/rating-star-icon-12-256.png"
            />
            <Text>{rating_no}</Text>
            <Text>{"ratings"}</Text>
          </Flex>
          <Text
            marginRight={"68%"}
            marginTop={"2%"}
            fontSize="24px"
            fontFamily={"din-2014, sans-serif"}
          >
            {"₹"}
            {price}
          </Text>
          <Text>{offerPrice}</Text>
          <Text marginRight={"48%"} marginTop={"2%"}>
            (MRP incl. of all taxes)
          </Text>
          <Flex gap="5%" marginLeft="12%" marginTop={"2%"}>
            <Text color={"#9b9b9b"}>Shade |</Text>
            <Select
              height="30px"
              width={"30%"}
              borderRadius="0px"
              border="1px solid black"
            >
              <option value="pink">Pink</option>
              <option value="blue">Blue</option>
              <option value="beige">Beige</option>
              <option value="pink">Tan</option>
              <option value="blue">Rose</option>
              <option value="beige">Sesame</option>
            </Select>
          </Flex>
          <Flex marginLeft="13%" marginTop="5%">
            <Box
              border="1px solid black"
              backgroundColor="pink"
              height={"50px"}
              width="50px"
            />
            <Box
              border="1px solid black"
              backgroundColor="lightblue"
              height={"50px"}
              width="50px"
            />
            <Box
              border="1px solid black"
              backgroundColor="beige"
              height={"50px"}
              width="50px"
            />
            <Box
              border="1px solid black"
              backgroundColor="tan"
              height={"50px"}
              width="50px"
            />
            <Box
              border="1px solid black"
              backgroundColor="hotpink"
              height={"50px"}
              width="50px"
            />
            <Box
              border="1px solid black"
              backgroundColor="burlywood"
              height={"50px"}
              width="50px"
            />
          </Flex>
        </Box>
      </Flex>
      <Flex marginLeft="38%" gap={"2%"}>
        <RouterLink to="/cartitems">
          <Button onClick={()=>ItemADDED(product)}>Add to cart</Button>
        </RouterLink>

        <Text marginTop={"-8%"}>FREE GIFT ON PURCHASE</Text>
      </Flex>
      <Box
        backgroundColor={"#f4f4f4"}
        color={"#333333"}
        width="60%"
        marginLeft="43%"
        marginTop="1%"
      >
        You will receive cashback worth ₹50 as myglammPOINTS on this purchase
      </Box>
      <Box></Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        marginLeft={"14.5%"}
        marginTop="1%"
      >
        <MdLocalShipping />
        <Text>2-3 business days delivery</Text>
      </Stack>
    </Container>
  );
}
