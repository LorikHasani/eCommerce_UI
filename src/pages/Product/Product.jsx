import { ProductDetailLeft, ProductDetailRight } from "../../components";

function Product() {
  return (
    <div className="py-20 container mx-auto grid grid-cols-2 gap-12 place-items-center">
      <ProductDetailLeft />
      <ProductDetailRight />
    </div>
  );
}

export default Product;
