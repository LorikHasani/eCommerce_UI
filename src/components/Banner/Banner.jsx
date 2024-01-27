import { IphoneBanner } from "../../assets/img";
import ButtonOutline from "../Buttons/ButtonOutline";

function Banner() {
  return (
    <div className="bg-[#211C24] h-[632px]">
      <div className="container mx-auto flex justify-between items-center content-center flex-wrap">
        <div className="min-w-[400px] flex flex-col gap-6">
          <div className="text-primaryWhite flex flex-col gap-6 ">
            <h4 className="text-[25px] font-semibold leading-[32px]">
              Pro.Beyond.
            </h4>

            <h1 className="text-[96px] leading-[72px] tracking-[-0.96px]">
              IPhone 14 <span className="font-semibold ">Pro</span>
            </h1>
          </div>
          <div>
            <h4 className="text-[18px] text-[#909090]">
              Created to change everything for the better. For everyone
            </h4>
          </div>
          <div>
            <ButtonOutline className={" border-primaryWhite text-white"}>
              Shop Now
            </ButtonOutline>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center flex-shrink-0 w-[406px] pt-[73px]">
          <img src={IphoneBanner} alt="" className="w-[406px] " />
        </div>
      </div>
    </div>
  );
}

export default Banner;
