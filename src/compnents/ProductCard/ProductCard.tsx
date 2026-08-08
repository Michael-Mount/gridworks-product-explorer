import { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card} key={product.id}>
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
}
