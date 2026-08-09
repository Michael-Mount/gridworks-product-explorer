import type { Product } from "@/types/product";
import styles from "./Badge.module.css";

interface BadgeProps {
  product: Product;
}

export default function Badge({ product }: BadgeProps) {
  if (product.featured) {
    return <p className={styles.featured}>Featured</p>;
  }
}
