/**
 * NEW ARRIVALS SECTION — src/sections/NewArrivalsSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/new-arrivals.twig
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   Product list     → {{ section.products }} (configured in theme editor)
 *   Product card     → {% include 'components/product-card.twig' with { product: product } %}
 *   "View All" link  → {{ routes.collections_all }}
 *
 * Section heading and subtext are controlled by section settings in twilight.json:
 *   heading          → {{ section.settings.new_arrivals_heading }}
 *   subtext          → {{ section.settings.new_arrivals_subtext }}
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { getNewArrivals } from "@/data/products";
import settings from "@/config/settings.json";

export function NewArrivalsSection() {
  /* SALLA: Replace with {{ section.products }} from theme editor selection */
  const products = getNewArrivals();

  return (
    <section
      className="py-20 bg-muted/30"
      data-section-id="new_arrivals"
      data-section-type="new-arrivals"
    >
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            {/* SALLA: {{ section.settings.new_arrivals_heading }} */}
            <h2 className="text-3xl md:text-4xl font-serif mb-2">
              {settings.new_arrivals.new_arrivals_heading}
            </h2>
            {/* SALLA: {{ section.settings.new_arrivals_subtext }} */}
            <p className="text-muted-foreground font-serif italic">
              {settings.new_arrivals.new_arrivals_subtext}
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

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/shop"
            className="bg-foreground text-background px-6 py-3 text-sm font-bold uppercase tracking-widest"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
