/**
 * COLLECTION PAGE — src/pages/Collection.tsx
 *
 * SALLA EQUIVALENT: theme/templates/collection.twig
 *
 * In Salla, each collection (category) has its own page rendered by the
 * collection template. The collection object is injected automatically.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   collectionName   → {{ collection.name }}
 *   description      → {{ collection.description }}
 *   collectionProducts → {{ collection.products }}
 *   product card     → {% include 'components/product-card.twig' %}
 *   products count   → {{ collection.products_count }}
 */

import { useParams, Link } from "wouter";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, Collection } from "@/data/products";
import { ArrowLeft } from "lucide-react";

const VALID_COLLECTIONS: Collection[] = [
  "Sitcom Collection",
  "Fantasy Collection",
  "Mystery Collection",
  "Romance Collection",
  "Classic TV Collection",
  "Movie Icons Collection",
];

function slugToCollection(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* SALLA: Collection-specific theming would be set via collection metadata or
   section settings in twilight.json */
function getCollectionTheme(name: string): string {
  switch (name) {
    case "Fantasy Collection":   return "bg-secondary text-secondary-foreground";
    case "Mystery Collection":   return "bg-foreground text-background";
    case "Romance Collection":   return "bg-[hsl(340,30%,90%)] text-foreground";
    default:                     return "bg-primary text-primary-foreground";
  }
}

export default function CollectionPage() {
  /* SALLA: Collection slug is resolved by Salla routing — no manual parsing needed */
  const params = useParams();
  const slug = params.slug || "";
  const collectionName = slugToCollection(slug);
  const isValid = VALID_COLLECTIONS.includes(collectionName as Collection);

  /* SALLA: {{ collection.products }} */
  const collectionProducts = products.filter(
    (p) => p.collection === collectionName
  );

  if (!isValid) {
    return (
      <DefaultLayout>
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-4">Collection Not Found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find the collection you're looking for.
            </p>
            <Link
              href="/shop"
              className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
            >
              Return to Shop
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    /* SALLA: {% extends 'layouts/master.twig' %} */
    <DefaultLayout withTopPadding={false}>

      {/* Collection Header — SALLA: {{ collection.name }} / {{ collection.description }} */}
      <div className={`pt-24 py-20 md:py-32 ${getCollectionTheme(collectionName)} transition-colors duration-500`}>
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              href="/shop"
              className="inline-flex items-center text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to All Products
            </Link>
          </div>
          {/* SALLA: {{ collection.name }} */}
          <h1 className="text-4xl md:text-6xl font-serif mb-6">{collectionName}</h1>
          {/* SALLA: {{ collection.description }} */}
          <p className="text-lg md:text-xl font-serif italic opacity-90 leading-relaxed">
            Curated accessories inspired by our favorite moments in{" "}
            {collectionName.replace(" Collection", "")}. Designed for fans who
            appreciate subtlety and style.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16 md:py-24">
        {/* SALLA: {{ collection.products_count }} */}
        <div className="flex justify-between items-end mb-10">
          <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
            {collectionProducts.length} Products
          </p>
        </div>

        {/* Product Grid — SALLA: {% for product in collection.products %} */}
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-12">
            {collectionProducts.map((product) => (
              /* SALLA: {% include 'components/product-card.twig' with { product: product } %} */
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-xl">
            <h3 className="text-2xl font-serif mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              We're still designing stories for this collection.
            </p>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
