import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      <section>
        {products.map((product) => {
          return (
            <div key={product.id}>
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
    </main>
  );
}
