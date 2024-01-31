import { iphone14 } from "../../assets/img";

function ProductDetailLeft() {
  return (
    <div className="flex w-full">
      <div className="w-[15%] flex flex-col">
        <img src={iphone14} className="w-full h-full object-contain" />
        <img src={iphone14} className="w-full h-full object-contain" />
        <img src={iphone14} className="w-full h-full object-contain" />
        <img src={iphone14} className="w-full h-full object-contain" />
      </div>
      <div className="w-[85%]">
        <img src={iphone14} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default ProductDetailLeft;
