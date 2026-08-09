import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="intro">
          <p className="eyebrow">
            Industrial technology for critical infrastructure.
          </p>
          <h1>Gridworks product systems</h1>
          <p className="intro-descrption">
            Explore protection, automation, networking, and monitoring products
            engineered for modern industrial systems.
          </p>
        </section>
        <section className="products-grid">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      </div>
    </main>
  );
}
