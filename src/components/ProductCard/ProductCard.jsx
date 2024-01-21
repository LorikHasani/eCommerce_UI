import { Button } from "antd";
import { iphone14 } from "../../assets/img";

function ProductCard() {
  return (
    <div className="w-[268px] min-w-[200px] bg-bgProductCard flex flex-col justify-center items-center gap-4 py-4 px-5 rounded-lg text-primaryBlack">
      <div className="flex justify-end ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z"
            stroke="#919191"
            strokeOpacity="0.77"
            strokeWidth="1.4"
          />
        </svg>
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
