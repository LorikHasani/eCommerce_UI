import ButtonOutline from "../Buttons/ButtonOutline";

function MoreDetailsProduct() {
  return (
    <section className="bg-bgProductCard py-20">
      <div className="flex flex-col container mx-auto gap-8 rounded-md  bg-white px-[40px] py-[48px]">
        <div className="flex flex-col gap-8">
          <h2 className="text-primaryBlack font-semibold text-[24px]">
            Details
          </h2>
          <p className="text-[#9D9D9D] text-[14px]">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
        </div>
        <div>
          <h3 className="text-primaryBlack text-[20px] font-medium">Screen</h3>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">Screen diagonal</span>
            <span className="text-fontMain">6.7</span>
          </div>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">The screen resolution</span>
            <span className="text-fontMain">2796x1290</span>
          </div>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">The screen refresh rate</span>
            <span className="text-fontMain">120 Hz</span>
          </div>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">The pixel density </span>
            <span className="text-fontMain">460 ppi</span>
          </div>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">Additionally</span>
            <span className="text-fontMain">
              Dynamic Island
              <br />
              Always-On display
              <br />
              HDR display
              <br />
              True Tone
              <br />
              Wide color (P3)
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-primaryBlack text-[20px] font-medium pb-8">
            CPU
          </h3>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">CPU</span>
            <span className="text-fontMain">A16 Bionic</span>
          </div>
          <div className="flex justify-between border-b-2 mb-6">
            <span className="text-fontMain">Number of cores</span>
            <span className="text-fontMain">6</span>
          </div>
        </div>

        <div className="flex justify-center ">
          <ButtonOutline className={"flex justify-center items-center  "}>
            <span className="text-[14px]">View More </span>{" "}
            <i class="uil uil-angle-down text-[24px] ml-2"></i>
          </ButtonOutline>
        </div>
      </div>
    </section>
  );
}

export default MoreDetailsProduct;
