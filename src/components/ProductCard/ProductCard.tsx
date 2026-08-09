import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p className={styles.model}>{product.model}</p>
        {product.featured && <p className={styles.featured}>Featured</p>}
      </div>
      <h2 className={styles.name}>{product.name}</h2>

      <p className={styles.category}>{product.category}</p>
      <ul className={styles.protocols}>
        {product.protocols.map((protocol) => {
          return <li key={protocol}>{protocol}</li>;
        })}
      </ul>
      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
