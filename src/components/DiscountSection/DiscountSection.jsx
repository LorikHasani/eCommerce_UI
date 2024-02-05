import ProductCard from "../ProductCard/ProductCard";

function DiscountSection({ title }) {
  return (
    <section className="py-20 ">
      <div className="container mx-auto flex flex-col gap-8 ">
        <div>
          <h4 className="text-[24px] font-[500]">{title}</h4>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
