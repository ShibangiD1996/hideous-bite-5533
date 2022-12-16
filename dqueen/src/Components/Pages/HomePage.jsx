import { Image, Flex, Box, Text } from "@chakra-ui/react";
import style from "../Styles/HomePage.module.css";
import Final from "./Carousal/Final";
import VideoPage from "../Pages/Video";
import bannerVdo from "../Videos/YTVideo.mp4";
import FooterPage from "../Footer";
import Home from "../HomePage1";

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
            <div className={style.off}>Get 55% off on orders of ₹ 1499+</div>
            <Image className={style.saleProduct} src="Images/Product1.jpg" />
          </Box>
          <Box>
            <div className={style.off}>
              Get 100% cashback in all new Launches
            </div>
            <Image className={style.saleProduct} src="Images/Product2.jpg" />
          </Box>
          <Box>
            <div className={style.off}>Pick a product at ₹ 299</div>
            <Image className={style.saleProduct} src="Images/Product3.jpg" />
          </Box>
          <Box>
            <div className={style.off}>Pick a product at ₹ 339</div>
            <Image className={style.saleProduct} src="Images/Product4.jpg" />
          </Box>
        </Flex>
      </Box>
      <Image marginTop="5px" width="100%" src="Images/bestsellers_6.jpg" />

      <Final />
      <Image marginTop="35px" width="100%" src="Images/beauty_arcade.jpg" />
      <Image marginTop="35px" width="100%" src="Images/spinthe.jpg" />
      <Box className={style.box2}>
        <Flex>
          <Box>
            <div className={style.text2}>
              Slot Machine - Superfoods Onion moringa combo of 4" <br />
              at 599
            </div>
            <Image className={style.prod} src="Images/product5.png" />
          </Box>
          <Box>
            <div className={style.text2}>Total Makeover FF Cream " at 599</div>
            <Image className={style.prod} src="Images/product5.png" />
          </Box>
        </Flex>
      </Box>
      <Image marginTop="-48px" src="Images/banner2.png" />
      <Image marginTop="35px" width="100%" src="Images/collection.jpg" />
      <Box className={style.box2}>
        <Flex>
          <Box>
            <div className={style.text3}>WEEDING STORE</div>
            <Image className={style.prod} src="Images/weddingstore.png" />
          </Box>
          <Box>
            <div className={style.text3}>GIFTING STORE</div>
            <Image className={style.prod} src="Images/GiftStore.png" />
          </Box>
        </Flex>
      </Box>
      <Home></Home>
      <Image marginTop="-45px" width="100%" src="Images/Watch-Love-Shop-.jpg" />

      <Box className={style.videoBox}>
        <Flex gap="50px">
          <Box>
            <Text fontSize="20px" color="black">
              Show your look
            </Text>
          </Box>
          <Box>
            <Text fontSize="12px" color="black">
              Upload your favorite makeup looks on instagtam with
            </Text>
            <Text fontSize="12px">
              <b color="pink"> #DQueen</b> for a chance to featured!
            </Text>
          </Box>
          <Box>
            <Text fontSize="12px" color="black">
              Follow us on Instagtam
            </Text>
            <Text fontSize="12px">
              <b> #DQueen</b>
            </Text>
          </Box>
        </Flex>
      </Box>
      <VideoPage />
      <Image marginTop="35px" width="100%" src="Images/winwin.jpg" />
      <Image marginTop="5%" width="100%" src="Images/viewall.jpg" />
      <Image marginTop="5%" width="100%" src="Images/Beaware.png" />
      <Image marginTop="5%" width="100%" src="Images/covers.png" />
      <Box marginTop="30px">
        <video loop="true" autoPlay="true" controls muted>
          <source src={bannerVdo} type="video/mp4" />
        </video>
      </Box>

      <FooterPage />
    </div>
  );
}
