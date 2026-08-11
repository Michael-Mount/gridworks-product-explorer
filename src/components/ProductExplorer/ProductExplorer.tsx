"use client";

import { useState } from "react";
import type { Product, ProductCategory } from "@/types/product";
import ProductGrid from "../ProductGrid/ProductGrid";

interface ProductExplorerProps {
  products: Product[];
}

export default function ProductExplorer({ products }: ProductExplorerProps) {
  const [showFeaturedProducts, setShowFeaturedProducts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "all"
  >("all");

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
      <label>
        Category:
        <select
          value={selectedCategory}
          onChange={(e) => {
            const newCategory = e.target.value as ProductCategory | "all";
            setSelectedCategory(newCategory);
          }}
        >
          <option value="all">All</option>
          <option value="protection">Protection</option>
          <option value="automation">Automation</option>
          <option value="networking">Networking</option>
          <option value="monitoring">Monitoring</option>
          <option value="communications">Communications</option>
          <option value="switching">Switching</option>
        </select>
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
