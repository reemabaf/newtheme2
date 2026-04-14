/**
 * SHOP PAGE — src/pages/Shop.tsx
 *
 * SALLA EQUIVALENT: theme/templates/collection.twig
 *
 * In Salla, this would be the collection list template. The product grid is
 * populated by {{ collection.products }} and filtered via Salla's built-in
 * collection filtering API.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   products list    → {{ collection.products }}
 *   category filter  → Salla's native filter widget or custom filter section
 *   search           → Salla's native search {{ salla.search }}
 *   product card     → {% include 'components/product-card.twig' %}
 */

import { useState } from "react";
import { Link } from "wouter";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, Category, Collection } from "@/data/products";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Shop() {
  /* SALLA: Filtering is handled server-side via collection URL parameters */
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [activeCollection, setActiveCollection] = useState<Collection | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesCollection =
      activeCollection === "All" || product.collection === activeCollection;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCollection && matchesSearch;
  });

  return (
    /* SALLA: {% extends 'layouts/master.twig' %} */
    <DefaultLayout>
      <div className="container px-4 md:px-6 pb-20">

        {/* Shop Header — SALLA: {{ collection.name }} / {{ collection.description }} */}
        <div className="mb-12 text-center max-w-2xl mx-auto pt-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">The Collection</h1>
          <p className="text-muted-foreground font-serif italic">
            Premium pop-culture inspired accessories designed for the modern aesthetic.
          </p>
        </div>

        {/* Filters Bar
          SALLA: Replace with {% section 'collection-filters' %} or
          Salla's native filter widget via {{ salla.filters }}
        */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium mr-2 flex items-center gap-2">
              <Filter size={16} /> Filters:
            </span>
            {(["All", "Phone Cases", "Stickers"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category | "All")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* SALLA: {{ salla.search }} or a search section */}
            <div className="relative flex-grow md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-full py-2 pl-10 pr-4 text-sm outline-none transition-all"
              />
            </div>
            <button className="flex items-center gap-2 text-sm font-medium p-2 border border-border rounded-lg hover:bg-muted transition-colors">
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Sort</span>
            </button>
          </div>
        </div>

        {/* Product Grid — SALLA: {% for product in collection.products %} */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-12">
            {filteredProducts.map((product) => (
              /* SALLA: {% include 'components/product-card.twig' with { product: product } %} */
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveCollection("All");
                setSearchQuery("");
              }}
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
