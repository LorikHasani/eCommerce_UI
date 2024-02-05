import ProductDetailLeft from "./ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight";

function ProductDetail() {
  return (
    <div>
      <div className="py-20 container mx-auto grid grid-cols-2 gap-12 place-items-center">
        <ProductDetailLeft />
        <ProductDetailRight />
      </div>
    </div>
  );
}

export default ProductDetail;
