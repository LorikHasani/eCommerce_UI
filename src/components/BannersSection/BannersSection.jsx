import { ipadPro } from "../../assets/img";
import ProductBanner from "../Banner/ProductBanner/ProductBanner";

function BannerSection() {
  return (
    <div className="flex container mx-auto pb-20">
      <ProductBanner
        headerText={"Ipad Pro"}
        descText={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        img={ipadPro}
      />
      <ProductBanner
        headerText={"Ipad Pro"}
        descText={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        img={ipadPro}
      />
      <ProductBanner
        headerText={"Ipad Pro"}
        descText={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        img={ipadPro}
      />
      <ProductBanner
        headerText={"Ipad Pro"}
        descText={
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        }
        img={ipadPro}
      />
    </div>
  );
}

export default BannerSection;
