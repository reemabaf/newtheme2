/**
 * COLLECTIONS SECTION — src/sections/CollectionsSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/collections-list.twig
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   Collection list  → salla.store.categories (or merchant-defined list)
 *   Collection name  → {{ collection.name }}
 *   Collection link  → {{ collection.url }}
 *
 * Example Salla iteration:
 *   {% for collection in section.collections %}
 *     <a href="{{ collection.url }}">{{ collection.name }}</a>
 *   {% endfor %}
 */

import { Link } from "wouter";
import settings from "@/config/settings.json";

export function CollectionsSection() {
  /* SALLA: Replace with dynamic collections from the merchant's store */
  const collections = settings.collections.items;

  return (
    <section
      className="py-20 bg-muted overflow-hidden"
      data-section-id="collections"
      data-section-type="collections-list"
    >
      <div className="container px-4 md:px-6 text-center mb-12">
        {/* SALLA: {{ section.settings.heading }} */}
        <h2 className="text-3xl font-serif mb-4">{settings.collections.heading}</h2>
        {/* SALLA: {{ section.settings.subtext }} */}
        <p className="text-muted-foreground">{settings.collections.subtext}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 container px-4 md:px-6">
        {/* SALLA: {% for collection in section.collections %} */}
        {collections.map((collection) => (
          /* SALLA: <a href="{{ collection.url }}">{{ collection.name }}</a> */
          <Link
            key={collection}
            href={`/shop?collection=${collection}`}
            className="px-6 py-3 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            {collection}
          </Link>
        ))}
      </div>
    </section>
  );
}
