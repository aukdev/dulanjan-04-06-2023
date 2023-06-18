import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {}, [productId]);
  return <div>Product</div>;
};

export default Product;
