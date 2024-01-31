import { Button, Radio } from "antd";
import TabsDetail from "../DetailCard/TabsDetail";
import { IphoneIcon } from "../../assets/icons/icons";
import DetailCard from "../DetailCard/DetailCard";
import ButtonOutline from "../Buttons/ButtonOutline";

function ProductDetailRight() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="text-primaryBlack flex flex-col gap-6">
          <h2 className="text-[40px]">Apple iP hone 14 Pro Max</h2>
          <h3 className="text-[32px] font-bold">$1399</h3>
        </div>
        <div className="flex gap-6">
          <span className="text-[15px]">Select color:</span>
          <div>
            <Radio />
            <Radio />
            <Radio />
            <Radio />
            <Radio />
          </div>
        </div>
        <div className="flex gap-4">
          <TabsDetail details={"128GB"} />
          <TabsDetail details={"256GB"} />
          <TabsDetail details={"512GB"} />
          <TabsDetail details={"1TB"} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
          <DetailCard
            className={"w-auto h-[64px] p-4"}
            icon={<IphoneIcon width={24} height={24} fill={"#4E4E4E"} />}
            title="Screen size"
            desc="6.7"
          />
        </div>
        <p className="text-[14px] text-[#6C6C6C]">
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
          more...
        </p>
      </div>
      <div className="flex gap-4">
        <ButtonOutline className={"w-full border-primaryBlack"}>
          Add to Wishlist
        </ButtonOutline>
        <ButtonOutline
          className={"w-full bg-black text-primaryWhite border-primaryWhite"}
        >
          Add to Card
        </ButtonOutline>
      </div>
    </div>
  );
}

export default ProductDetailRight;
