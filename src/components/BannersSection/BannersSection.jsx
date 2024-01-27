import { Macbook, SamsungGalaxy, ipadPro } from "../../assets/img";
import ProductBanner from "../Banner/ProductBanner/ProductBanner";

function BannerSection() {
  return (
    <div className="flex  pb-20">
      <ProductBanner
        classNameImg="relative top-0 left-[71px]"
        color="primaryWhite"
        headerText="Ipad Pro"
        descText="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        img={ipadPro}
      />
      <ProductBanner
        classNameImg="relative top-0 left-[71px]"
        className="bg-[#F9F9F9]"
        headerText="Ipad Pro"
        descText="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        img={ipadPro}
      />
      <ProductBanner
        classNameImg="relative  "
        className="bg-[#EAEAEA]"
        headerText="Samsung Galaxy"
        descText="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        img={SamsungGalaxy}
      />
      <ProductBanner
        classNameImg="relative top-0 left-[201px]"
        className="bg-[#2C2C2C] text-primaryWhite border-primaryWhite"
        headerText="Macbook Pro"
        descText="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        img={Macbook}
      />
    </div>
  );
}

export default BannerSection;
