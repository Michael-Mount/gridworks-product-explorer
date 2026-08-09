import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="intro">
          <p className="eyebrow">
            Industrial technology for critical infrastructure.
          </p>
          <h1>Gridworks product systems</h1>
          <p className="intro-description">
            Explore protection, automation, networking, and monitoring products
            engineered for modern industrial systems.
          </p>
        </section>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
