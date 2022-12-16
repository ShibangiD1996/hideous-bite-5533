import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./products";
import { productData, responsive } from "./data";
export default function Final() {
  const product = productData.map((item) => (
    <Product 
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
