import ButtonOutline from "../../Buttons/ButtonOutline";

function ProductBanner({ headerText, descText, img, className, classNameImg }) {
  return (
    <div
      className={`flex min-w-[280px] gap-6 flex-col px-8 pb-10 ${className}`}
    >
      <img
        src={img}
        alt=""
        className={`w-[371px] h-[390px] object-cover ${classNameImg}`}
      />
      <div className="flex flex-col gap-4 ">
        <h2
          className={`text-[32px] text-primaryBlack font-[300] leading-[48px] ${className} `}
        >
          {headerText}
        </h2>
        <p className="text-[14px] text-[#909090]">{descText}</p>
        <div>
          <ButtonOutline
            className={`py-2 px-10 justify-center rounded-md bg-transparent border-2 border-primaryBlack font-semibold leading-6 text-black hover:bg-gray-200 ${className}`}
          >
            Shop Now
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
}

export default ProductBanner;
