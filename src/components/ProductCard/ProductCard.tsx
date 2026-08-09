import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

import Badge from "../Badge/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.title}>
        <p className={styles.model}>{product.model}</p>
        <Badge product={product} />
      </div>
      <h3 className={styles.name}>{product.name}</h3>

      <p className={styles.category}>{product.category}</p>
      <p>Protocols:</p>
      <ul className={styles.protocols}>
        {product.protocols.map((protocol) => {
          return <li key={protocol}>{protocol}</li>;
        })}
      </ul>
      <p className={styles.description}>{product.description}</p>
    </article>
  );
}
