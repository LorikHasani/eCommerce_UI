import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

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
  const [swiper, setSwiper] = useState(null);

  const handleLeftArrowClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightArrowClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8">
        <div className="flex justify-between w-full">
          <h5 className="text-[24px] text-primaryBlack font-[500] leading-8 tracking-[0.24px]">
            Browse By Category
          </h5>
          <div className="flex gap-4">
            <button onClick={handleLeftArrowClick}>
              <LeftArrow width={"32"} height={"32"} />
            </button>
            <button onClick={handleRightArrowClick}>
              <RightArrow width={"32"} height={"32"} />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={6}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <CategoryCard icon={IphoneIcon}>Phones</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={WatchIcon}>Smart Watches</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={CameraIcon}>Cameras</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={HeadphonesIcon}>HeadPhones</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={ComputerIcon}>Computers</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={GamingIcon}>Gaming</CategoryCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard icon={WatchIcon}>Smart Watches</CategoryCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Category;
