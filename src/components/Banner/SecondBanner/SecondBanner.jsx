import ButtonOutline from "../../Buttons/ButtonOutline";

function SecondBanner({ titleText, descText, img1, img2 }) {
  return (
    <div
      className="h-[448px] flex justify-between w-full  text-center"
      style={{
        background: "linear-gradient(100deg, #2E2E2E 42.36%, #000 98.65%)",
      }}
    >
      <img src={img1} alt="" className="object-contain" />
      <div className="flex gap-10 flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="text-[72px] font-[200] leading-[72px] text-primaryWhite">
            {titleText}
          </h1>
          <p className="text-[#787878]">{descText}</p>
        </div>
        <div>
          <ButtonOutline className={"border-primaryWhite text-primaryWhite"}>
            Shop Now
          </ButtonOutline>
        </div>
      </div>
      <img src={img2} alt="" className="object-contain" />
    </div>
  );
}

export default SecondBanner;
