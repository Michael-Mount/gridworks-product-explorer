import { products } from "@/data/products";

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
            return (
              <div className="product-card" key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.model}</p>
                <p>{product.category}</p>
                <ul>
                  {product.protocols.map((protocol) => {
                    return <li key={protocol}>{protocol}</li>;
                  })}
                </ul>
                <p>{product.description}</p>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
