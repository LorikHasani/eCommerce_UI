import { Button } from "antd";
import { iphone14 } from "../../assets/img";
import { HeartOutlined } from "@ant-design/icons";

function ProductCard() {
  return (
    <div className="w-[268px] min-w-[200px] bg-bgProductCard flex flex-col justify-center items-center gap-4 py-4 px-5 rounded-lg text-primaryBlack">
      <div className="flex justify-end ml-auto">
        <HeartOutlined
          style={{
            fontSize: "32px",
            color: "#909090C4",
          }}
        />
      </div>
      <div>
        <img src={iphone14} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 ">
          <p className="text-fontMain font-medium text-center text-primaryBlack">
            Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
          </p>
          <p className="text-[24px] font-semibold text-center">$1399</p>
        </div>
        <Button
          size={"large"}
          style={{ color: "white", background: "black", fontSize: "14px" }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
