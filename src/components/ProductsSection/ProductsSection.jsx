import React, { useState } from "react";
import NewArrival from "./NewArrival/NewArrival";
import BestSeller from "./BestSeller/BestSeller";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Tags from "../Tags/Tags";

const items = [
  {
    key: "1",
    label: "New Arrival",
    children: <NewArrival />,
  },
  {
    key: "2",
    label: "Best Seller",
    children: <BestSeller />,
  },
  {
    key: "3",
    label: "Featured Products",
    children: <FeaturedProducts />,
  },
];

function ProductsSection() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="py-20">
      <div className="container mx-auto space-y-8">
        <Tags defaultActiveKey="1" items={items} onChange={setActiveTab} />
      </div>
    </section>
  );
}

export default ProductsSection;
