"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductGrid from "../ProductGrid/ProductGrid";

interface ProductExplorerProps {
  products: Product[];
}

export default function ProductExplorer({ products }: ProductExplorerProps) {
  const [showFeaturedProducts, setShowFeaturedProducts] = useState(false);

  const featuredProducts = products.filter((product) => product.featured);

  const visibleProducts = showFeaturedProducts ? featuredProducts : products;

  return (
    <div>
      <button
        onClick={() => {
          setShowFeaturedProducts(
            (showFeaturedProducts) => !showFeaturedProducts,
          );
        }}
      >
        {showFeaturedProducts ? "All" : "Show Featured Products"}
      </button>
      <ProductGrid products={visibleProducts} />
    </div>
  );
}
