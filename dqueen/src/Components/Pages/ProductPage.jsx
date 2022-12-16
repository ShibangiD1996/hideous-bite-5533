import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleProductPage from "../SingleProductPage";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import style from "../Styles/ProductPage.module.css";
export default function ProductPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://smiling-lime-chicken.cyclic.app/cosmetics")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <Box paddingTop="13%">
        <Box backgroundColor="#ffffff">
          <Text
            fontSize="48px"
            fontFamily="din-2014, sans-serif"
            textAlign="center"
            lineHeight="52.8px"
            color="#333333"
          >
            DQUEEN'S COLLECTION
          </Text>
        </Box>
        <Grid templateColumns="repeat(3,1fr)" paddingTop="2%">
          {data?.length > 0 &&
            data.map((item) => {
              return (
                <GridItem key={item.id} className={style.prod}>
                  <SingleProductPage
                    id={item.id}
                    image={item.image}
                    brand={item.brand}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    offerPrice={item.offerPrice}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
