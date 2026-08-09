import styles from "./ProductGrid.module.css";

import type { Product } from "@/types/product";

import ProductCard from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className={styles.header}>
      <h2>All Avaliable Products</h2>
      <div className={styles.grid}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
