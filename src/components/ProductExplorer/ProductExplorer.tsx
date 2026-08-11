"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductGrid from "../ProductGrid/ProductGrid";

interface ProductExplorerProps {
  products: Product[];
}

export default function ProductExplorer({ products }: ProductExplorerProps) {
  const [showFeaturedProducts, setShowFeaturedProducts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  //Search Terms
  const searchedProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesModel = product.model
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesDescription = product.description
      .toLowerCase()
      .includes(normalizedSearchTerm);

    return matchesName || matchesModel || matchesDescription;
  });

  //Create a list of featured products from the search
  const featuredProducts = searchedProducts.filter(
    (product) => product.featured,
  );

  // Choose the final product list based on the featured-only toggle.
  const visibleProducts = showFeaturedProducts
    ? featuredProducts
    : searchedProducts;

  return (
    <div>
      <label>
        Search Products
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
        />
      </label>
      <button
        aria-pressed={showFeaturedProducts}
        onClick={() => {
          setShowFeaturedProducts((previous) => !previous);
        }}
      >
        {showFeaturedProducts ? "Show All Products" : "Show Featured Products"}
      </button>
      <ProductGrid products={visibleProducts} />
    </div>
  );
}
