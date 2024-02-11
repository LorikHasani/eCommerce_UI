import { Input, Select } from "antd";
import ButtonOutline from "../Buttons/ButtonOutline";
import { iphone14 } from "../../assets/img";

function ShoppingCartSection() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className=" py-20">
      <div className="container mx-auto flex  ">
        <div className="w-[60%]">
          <div className="flex justify-between pb-4">
            <h1 className="font-semibold text-[24px]">Shopping Cart</h1>
            {/* <h2 className="font-semibold text-[24px]">3 Items</h2> */}
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>
          <div className="flex items-center hover:bg-gray-100   py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src={iphone14} alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Iphone 6S</span>
                <span className="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                className="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              $400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $400.00
            </span>
          </div>

          <div className="flex items-center hover:bg-gray-100   py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src={iphone14} alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Xiaomi Mi 20000mAh</span>
                <span className="text-red-500 text-xs">Xiaomi</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                className="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              $40.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $40.00
            </span>
          </div>

          <div className="flex items-center hover:bg-gray-100   py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src={iphone14} alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Airpods</span>
                <span className="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              $150.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $150.00
            </span>
          </div>
        </div>
        <div id="summary" className="w-[40%] border py-5 px-10 rounded-md">
          <h1 className="font-semibold text-2xl  pb-4">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className=" inline-block mb-1 text-[14px]">
              Your bonus card code
            </label>
            <Input type="text" placeholder="Enter card number" />
          </div>
          <div className="py-5">
            <label for="promo" className=" inline-block mb-1 text-[14px]">
              Promo Code
            </label>
            <Input type="text" placeholder="Code" />
          </div>
          <ButtonOutline className=" text-sm text-black !py-1 px-8   border-primaryBlack">
            Apply
          </ButtonOutline>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <ButtonOutline className="bg-primaryBlack  font-semibold text-white  w-full text-[16px] !py-3">
              Checkout
            </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSection;
