import { Image, Flex, Box, Text } from "@chakra-ui/react";
import style from "../Styles/HomePage.module.css";
import Final from "./Carousal/Final";
export default function HomePage() {
  
  return (
    <div className={style.main}>
      <Image marginTop="10%" src="Images/MakeupBrand.gif" />
      <Image
        marginTop="25px"
        width="100%"
        height="450px"
        src="Images/WeLove.png"
      />
      <Image marginTop="80px" width="100%" src="Images/Header1.jpg" />
      <Box className={style.box1}>
        <Flex gap="25px">
          <Box>
            <Image className={style.saleProduct} src="Images/Product1.jpg" />

            <div className={style.off}>Get 55% off on orders of ₹ 1499+</div>
          </Box>
          <Box>
            <Image className={style.saleProduct} src="Images/Product2.jpg" />
            <div className={style.off}>
              Get 100% cashback in all new Launches
            </div>
          </Box>
          <Box>
            <Image className={style.saleProduct} src="Images/Product3.jpg" />

            <div className={style.off}>Pick a product at ₹ 299</div>
          </Box>
          <Box>
            <Image className={style.saleProduct} src="Images/Product4.jpg" />
            <div className={style.off}>Pick a product at ₹ 339</div>
          </Box>
        </Flex>
      </Box>
      <Image marginTop="5px" width="100%" src="Images/bestsellers_6.jpg" />

      <Final />
    </div>
  );
}
