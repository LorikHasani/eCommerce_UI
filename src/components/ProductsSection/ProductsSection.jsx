import ProductCard from "../ProductCard/ProductCard";

function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto space-y-8">
        <div className="flex gap-8">
          <h6 className="border-b border-black font-bold">New Arrival</h6>
          <h6>Best Seller</h6>
          <h6>Featured Products</h6>
        </div>
        <div className="grid grid-cols-5 gap-2 items-center place-items-center">
          <ProductCard />
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
      </div>
    </section>
  );
}

export default ProductsSection;
