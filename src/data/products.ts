/**
 * PRODUCT DATA — src/data/products.ts
 *
 * SALLA EQUIVALENT: Dynamic data injected by Salla at render time.
 *
 * This file is a PLACEHOLDER. When migrating to a real Salla theme, ALL of the
 * static data below is replaced by Salla's template variables. You do not
 * maintain this file in production — Salla's backend provides product data.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  SALLA VARIABLE MAPPING                                                 │
 * ├────────────────────────────┬────────────────────────────────────────────┤
 * │  React (this file)         │  Salla Liquid/Twig equivalent              │
 * ├────────────────────────────┼────────────────────────────────────────────┤
 * │  product.id                │  {{ product.id }}                          │
 * │  product.name              │  {{ product.name }}                        │
 * │  product.description       │  {{ product.description }}                 │
 * │  product.price             │  {{ product.price | money }}               │
 * │  product.image             │  {{ product.images[0] | image_url }}       │
 * │  product.category          │  {{ product.category.name }}               │
 * │  product.collection        │  {{ product.category.name }}               │
 * │  product.badges            │  {{ product.labels }}                      │
 * │  product.variants          │  {{ product.options }}                     │
 * │  variant.id                │  {{ option.id }}                           │
 * │  variant.name              │  {{ option.name }}                         │
 * │  variant.options[]         │  {{ option.values }}                       │
 * │  getBestSellers()          │  salla.store.best_sellers(4)               │
 * │  getNewArrivals()          │  salla.store.new_products(4)               │
 * │  getFeaturedProducts()     │  section.products (editor-selected)        │
 * │  getProductById(id)        │  Handled by Salla routing (product.twig)   │
 * │  getProductsByCategory()   │  collection.products (collection.twig)     │
 * └────────────────────────────┴────────────────────────────────────────────┘
 */

export type Category = "Phone Cases" | "Stickers";
export type Collection =
  | "Sitcom Collection"
  | "Fantasy Collection"
  | "Mystery Collection"
  | "Romance Collection"
  | "Classic TV Collection"
  | "Movie Icons Collection";

export interface ProductVariant {
  id: string;
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  collection: Collection;
  badges: string[];
  /** Relative path from /public/. SALLA: {{ product.images[0] | image_url }} */
  image: string;
  variants?: ProductVariant[];
}

/* ── PLACEHOLDER PRODUCT DATA ─────────────────────────────────────────────
 * Replace entirely with {{ collection.products }} / {{ product }} variables
 * when migrating to a real Salla theme.
 * ──────────────────────────────────────────────────────────────────────── */
export const products: Product[] = [
  {
    id: "case-moon",
    name: "Cinematic Nights Case",
    description: "Deep purple case featuring a subtle crescent moon and stars motif, inspired by classic cinema.",
    price: 34.00,
    category: "Phone Cases",
    collection: "Movie Icons Collection",
    badges: ["Best Seller", "New"],
    image: "images/case-moon.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
      { id: "finish", name: "Finish", options: ["Matte", "Glossy"] },
    ],
  },
  {
    id: "case-coffee",
    name: "Central Perk Vibes Case",
    description: "A warm, muted case evoking the comfort and nostalgia of your favorite sitcom coffee shop.",
    price: 32.00,
    category: "Phone Cases",
    collection: "Sitcom Collection",
    badges: ["Best Seller"],
    image: "images/case-coffee.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
    ],
  },
  {
    id: "case-movie",
    name: "Movie Reel Case",
    description: "Illustrated film reel and ticket stub design for those who live and breathe cinema.",
    price: 36.00,
    category: "Phone Cases",
    collection: "Movie Icons Collection",
    badges: ["Limited Edition"],
    image: "images/case-movie.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
      { id: "style", name: "Style", options: ["Snap", "Tough"] },
    ],
  },
  {
    id: "case-dragon",
    name: "Dragon Dreams Case",
    description: "Scale-textured fantasy case with dragon motif. For those who rule kingdoms and binge epics.",
    price: 38.00,
    category: "Phone Cases",
    collection: "Fantasy Collection",
    badges: ["Premium"],
    image: "images/case-dragon.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
    ],
  },
  {
    id: "sticker-tv",
    name: "Vintage TV Sticker Pack",
    description: "A curated pack of retro television inspired stickers. 6 premium vinyl stickers per pack.",
    price: 14.00,
    category: "Stickers",
    collection: "Classic TV Collection",
    badges: ["Best Seller", "New"],
    image: "images/sticker-tv.png",
  },
  {
    id: "sticker-notebook",
    name: "Detective's Notebook Sticker",
    description: "An aged, hand-drawn notebook sticker for the mystery lover. Waterproof premium vinyl.",
    price: 8.00,
    category: "Stickers",
    collection: "Mystery Collection",
    badges: ["New"],
    image: "images/sticker-notebook.png",
  },
  {
    id: "case-love",
    name: "Love Letter Case",
    description: "Soft, romantic case with handwritten letter motif. Understated elegance for the hopeless romantic.",
    price: 32.00,
    category: "Phone Cases",
    collection: "Romance Collection",
    badges: ["New"],
    image: "images/case-love.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
    ],
  },
  {
    id: "case-wand",
    name: "Magic Wand Case",
    description: "Enchanted wand illustration on a deep midnight background. Cast your spell on everyone you pass.",
    price: 34.00,
    category: "Phone Cases",
    collection: "Fantasy Collection",
    badges: ["Limited Edition"],
    image: "images/case-wand.png",
    variants: [
      { id: "device", name: "Device", options: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"] },
      { id: "finish", name: "Finish", options: ["Matte", "Holographic"] },
    ],
  },
];

/* ── HELPER FUNCTIONS ─────────────────────────────────────────────────────
 * SALLA: These are not needed — Salla provides filtered data per template.
 * ──────────────────────────────────────────────────────────────────────── */

/** SALLA: salla.store.best_sellers(count) */
export const getBestSellers = (): Product[] =>
  products.filter((p) => p.badges.includes("Best Seller"));

/** SALLA: salla.store.new_products(count) */
export const getNewArrivals = (): Product[] =>
  products.filter((p) => p.badges.includes("New"));

/** SALLA: section.products (editor-selected list) */
export const getFeaturedProducts = (): Product[] =>
  products.slice(0, 4);

/** SALLA: Handled automatically by Salla's product.twig routing */
export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

/** SALLA: collection.products filtered by category */
export const getProductsByCategory = (category: Category): Product[] =>
  products.filter((p) => p.category === category);

export const getProductsByCollection = (collection: Collection): Product[] =>
  products.filter((p) => p.collection === collection);
