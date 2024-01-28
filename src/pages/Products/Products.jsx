import { Select } from "antd";
import { Filters, ProductCard } from "../../components";

function Products() {
  return (
    <div className="flex flex-col w-full container mx-auto">
      <div className="w-[30%]">
        <Filters />
      </div>
      <div className="grid grid-cols-3 w-[70%]">
        <div>
          <h4>Selected products: 85</h4>
          {/* <Select
            defaultValue="By Rating"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          /> */}
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
