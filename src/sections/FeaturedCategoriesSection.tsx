/**
 * FEATURED CATEGORIES SECTION — src/sections/FeaturedCategoriesSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/featured-categories.twig
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   Category image src   → {{ category.image | image_url }}
 *   Category name        → {{ category.name }}
 *   Category link        → {{ category.url }}
 *
 * In Salla, this section would iterate over merchant-selected categories:
 *   {% for category in section.settings.categories %}
 *     <a href="{{ category.url }}">{{ category.name }}</a>
 *   {% endfor %}
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/* ── PLACEHOLDER DATA ─────────────────────────────────────────────────────
 * SALLA: Replace with dynamic categories from the merchant's store.
 * Each category maps to a Salla collection (product category).
 * ──────────────────────────────────────────────────────────────────────── */
const categories = [
  {
    id: "phone-cases",
    name: "Phone Cases",
    image: "images/case-coffee.png",
    href: "/shop?category=Phone Cases",
  },
  {
    id: "stickers",
    name: "Premium Stickers",
    image: "images/sticker-tv.png",
    href: "/shop?category=Stickers",
  },
];

export function FeaturedCategoriesSection() {
  return (
    <section
      className="py-20 md:py-32 bg-background"
      data-section-id="featured_categories"
      data-section-type="featured-categories"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category) => (
            /* SALLA: <a href="{{ category.url }}"> */
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              {/* SALLA: {{ category.image | image_url }} */}
              <img
                src={import.meta.env.BASE_URL + category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                {/* SALLA: {{ category.name }} */}
                <h3 className="text-3xl font-serif mb-2">{category.name}</h3>
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Shop Now</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
