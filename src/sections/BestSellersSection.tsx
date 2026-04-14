/**
 * BEST SELLERS SECTION — src/sections/BestSellersSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/best-sellers.twig
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   Product list     → {{ section.products }} (merchant selects in theme editor)
 *   Product card     → {% include 'components/product-card.twig' with { product: product } %}
 *   heading          → {{ section.settings.best_sellers_heading }}
 *   subtext          → {{ section.settings.best_sellers_subtext }}
 *   "View All" link  → {{ routes.collections_all }}
 *
 * In Salla, "best sellers" can also be sourced automatically via:
 *   {{ salla.store.best_sellers(4) }} — returns the top N selling products
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { getBestSellers } from "@/data/products";
import settings from "@/config/settings.json";

export function BestSellersSection() {
  /* SALLA: Replace with {{ salla.store.best_sellers(section.settings.best_sellers_count) }} */
  const products = getBestSellers();

  return (
    <section
      className="py-20 md:py-32 bg-background"
      data-section-id="best_sellers"
      data-section-type="best-sellers"
    >
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            {/* SALLA: {{ section.settings.best_sellers_heading }} */}
            <h2 className="text-3xl md:text-4xl font-serif mb-2">
              {settings.best_sellers.best_sellers_heading}
            </h2>
            {/* SALLA: {{ section.settings.best_sellers_subtext }} */}
            <p className="text-muted-foreground font-serif italic">
              {settings.best_sellers.best_sellers_subtext}
            </p>
          </div>
          {/* SALLA: {{ routes.collections_all }} */}
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* SALLA: {% for product in section.products %} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            /* SALLA: {% include 'components/product-card.twig' %} */
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
