import {
  DiscountSection,
  MoreDetailsProduct,
  ProductDetail,
  ProductDetailLeft,
  ProductDetailRight,
} from "../../components";

function Product() {
  return (
    <div className="">
      <ProductDetail />
      <MoreDetailsProduct />
      <DiscountSection title={"Related Products"} />
    </div>
  );
}

export default Product;
