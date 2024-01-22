import {
  CameraIcon,
  ComputerIcon,
  GamingIcon,
  HeadphonesIcon,
  IphoneIcon,
  LeftArrow,
  RightArrow,
  WatchIcon,
} from "../../assets/icons/icons";
import CategoryCard from "./CategoryCard/CategoryCard";

function Category() {
  return (
    <section className=" py-20 bg-[#FAFAFA]">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8  ">
        <div className="flex justify-between w-full">
          <h5 className="text-[24px] text-primaryBlack font-[500] leading-8 tracking-[0.24px]">
            Browse By Category
          </h5>
          <div className="flex gap-4">
            <LeftArrow width={"32"} height={"32"} />
            <RightArrow width={"32"} height={"32"} />
          </div>
        </div>
        <div className="flex gap-8 justify-between w-full">
          <CategoryCard icon={IphoneIcon}>Phones</CategoryCard>
          <CategoryCard icon={WatchIcon}>Smart Watches</CategoryCard>
          <CategoryCard icon={CameraIcon}>Cameras</CategoryCard>
          <CategoryCard icon={HeadphonesIcon}>HeadPhones</CategoryCard>
          <CategoryCard icon={ComputerIcon}>Computers</CategoryCard>
          <CategoryCard icon={GamingIcon}>Gaming</CategoryCard>
        </div>
      </div>
    </section>
  );
}

export default Category;
