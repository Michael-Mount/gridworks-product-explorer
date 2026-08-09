import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
      <p>{product.model}</p>
      <p>{product.category}</p>
      <ul>
        {product.protocols.map((protocol) => {
          return <li key={protocol}>{protocol}</li>;
        })}
      </ul>
      <p>{product.description}</p>
      {product.featured && <p>Featured</p>}
    </div>
  );
}
