import { Pagination, Select } from "antd";
import { Filters, ProductCard } from "../../components";

function Products() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="py-20">
      <div className="flex w-full container mx-auto">
        <div className="w-[30%]">
          <Filters />
        </div>
        <div className="flex flex-col gap-6 w-[70%]">
          <div className="flex justify-between">
            <h4 className="text-[#6C6C6C] text-fontMain font-medium">
              Selected products:{" "}
              <span className="text-primaryBlack text-[20px]">85</span>
            </h4>
            <Select
              defaultValue="By Rating"
              style={{ width: 256 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center">
            <Pagination total={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
