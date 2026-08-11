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

  const normalizedSearchTerm = searchTerm.toLowerCase();

  //Search Terms
  const searchedProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesModel = product.model
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesDescripton = product.description
      .toLowerCase()
      .includes(normalizedSearchTerm);

    return matchesName || matchesModel || matchesDescripton;
  });

  //Create a list of featured products from the search
  const featuredProducts = searchedProducts.filter(
    (product) => product.featured,
  );

  //decide wether the search displays or the displayed products from the search display
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
