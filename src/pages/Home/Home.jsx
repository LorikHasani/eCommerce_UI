import { Macbook } from "../../assets/img";
import {
  Banner,
  BannersSection,
  Category,
  DiscountSection,
  ProductsSection,
  SecondBanner,
} from "../../components";

function Home() {
  return (
    <>
      <Banner />
      <Category />
      <ProductsSection />
      <BannersSection />
      <DiscountSection />
      <SecondBanner
        titleText={"Big Summer Sale"}
        descText={"Commodo fames vitae vitae leo mauris in. Eu consequat."}
        img1={Macbook}
        img2={Macbook}
      />
    </>
  );
}

export default Home;
