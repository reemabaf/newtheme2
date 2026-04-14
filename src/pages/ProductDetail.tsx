/**
 * PRODUCT DETAIL PAGE — src/pages/ProductDetail.tsx
 *
 * SALLA EQUIVALENT: theme/templates/product.twig
 *
 * In Salla, this is the product detail template. All product data comes from
 * the global {{ product }} object injected by Salla at render time.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   product.id           → {{ product.id }}
 *   product.name         → {{ product.name }}
 *   product.description  → {{ product.description }}
 *   product.price        → {{ product.price | money }}
 *   product.image        → {{ product.images[0] | image_url }}
 *   product.collection   → {{ product.category.name }}
 *   product.badges       → {{ product.labels }} (Salla product labels)
 *   product.variants     → {{ product.options }} (Salla product options)
 *   Related products     → {{ salla.store.related_products(product.id) }}
 *   "Add to Cart"        → Salla native add-to-cart event: salla.cart.add()
 */

import { useParams, Link } from "wouter";
import { useState, useEffect } from "react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { getProductById, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import {
  Minus, Plus, Heart, ShoppingBag, ArrowLeft,
  Truck, ShieldCheck, Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  /* SALLA: Product ID is injected via Salla routing — no manual URL param needed */
  const params = useParams();
  const id = params.id;
  const product = id ? getProductById(id) : undefined;

  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      const initialVariants: Record<string, string> = {};
      product.variants?.forEach((v) => {
        initialVariants[v.id] = v.options[0];
      });
      setSelectedVariants(initialVariants);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <DefaultLayout>
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The story you're looking for seems to have ended.
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

  /* SALLA: {{ salla.store.related_products(product.id, 4) }} */
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    /* SALLA: salla.cart.add({ id: product.id, quantity, options: selectedVariants }) */
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    /* SALLA: {% extends 'layouts/master.twig' %} */
    <DefaultLayout>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto pb-20">

        <div className="mb-6">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Product Image — SALLA: {{ product.images[0] | image_url('large') }} */}
          <div className="space-y-4">
            <div className="aspect-[4/5] md:aspect-square bg-muted rounded-2xl overflow-hidden relative">
              <img
                src={import.meta.env.BASE_URL + product.image.replace(/^\//, "")}
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-700"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {/* SALLA: {% for label in product.labels %} */}
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className={cn(
                      "text-xs font-bold px-3 py-1 tracking-wider uppercase shadow-sm",
                      badge === "Best Seller"
                        ? "bg-primary text-primary-foreground"
                        : badge === "New"
                        ? "bg-accent text-accent-foreground"
                        : "bg-background text-foreground"
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col animate-in fade-in slide-in-from-right-8 duration-700 delay-150">

            {/* Collection — SALLA: {{ product.category.name }} */}
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              <Link
                href={`/collections/${product.collection.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-primary transition-colors"
              >
                {product.collection}
              </Link>
            </div>

            {/* Name — SALLA: {{ product.name }} */}
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
              {product.name}
            </h1>

            {/* Price — SALLA: {{ product.price | money }} */}
            <p className="text-2xl font-medium text-foreground/90 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="w-full h-px bg-border mb-6" />

            {/* Description — SALLA: {{ product.description }} */}
            <p className="text-lg text-foreground/80 font-serif italic mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variants — SALLA: {% for option in product.options %}
              Salla product options render via salla-product-options web component
              or manual iteration over {{ option.values }}
            */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-6 mb-8">
                {product.variants.map((variant) => (
                  <div key={variant.id}>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-bold uppercase tracking-widest">
                        {variant.name}
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {variant.options.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            setSelectedVariants({
                              ...selectedVariants,
                              [variant.id]: option,
                            })
                          }
                          className={cn(
                            "px-4 py-3 text-sm font-medium border transition-all rounded-md",
                            selectedVariants[variant.id] === option
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-transparent text-foreground hover:border-primary/50"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart — SALLA: <salla-add-to-cart product-id="{{ product.id }}"> */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-border rounded-md w-full sm:w-32 bg-background">
                <button
                  className="p-4 text-foreground hover:text-primary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="flex-grow text-center font-medium">{quantity}</span>
                <button
                  className="p-4 text-foreground hover:text-primary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={cn(
                  "flex-grow flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-widest transition-all rounded-md",
                  isAdding
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <ShoppingBag size={18} />
                {isAdding ? "Added to Cart" : "Add to Cart"}
              </button>

              {/* SALLA: <salla-wishlist product-id="{{ product.id }}"> */}
              <button className="p-4 border border-border rounded-md text-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center bg-background">
                <Heart size={20} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-border mt-auto">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={24} className="text-primary/70" />
                <span className="text-xs font-medium uppercase tracking-wide">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={24} className="text-primary/70" />
                <span className="text-xs font-medium uppercase tracking-wide">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Undo2 size={24} className="text-primary/70" />
                <span className="text-xs font-medium uppercase tracking-wide">Free Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products — SALLA: {{ salla.store.related_products(product.id, 4) }} */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl font-serif mb-8 text-center">Complete The Story</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
