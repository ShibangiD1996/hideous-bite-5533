import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SingleProductPage({
  id,
  image,
  brand,
  description,
  price,
}) {

 
  return (
    <Center py={12}>
      <RouterLink to={`/products/${id}`}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          height="auto"
        >
          <Box
            rounded={"lg"}
            mt={-12}
            height={"230px"}
            //   _after={{
            //     transition: "all .3s ease",
            //     content: '""',
            //     w: "full",
            //     h: "full",
            //     top:5,
            //     left: 0,
            //     backgroundImage: `url(${image})`,
            //     filter: "blur(15px)",
            //   }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {brand}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {description}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {"₹"}
                {price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </RouterLink>
    </Center>
  );
}
