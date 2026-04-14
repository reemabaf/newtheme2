# LORE Theme — React Preview & Salla Theme Foundation

A premium e-commerce storefront for **LORE** — movie and TV show inspired phone cases and stickers.

This project is intentionally structured to mirror a real **Salla Twilight theme**, making migration straightforward. It uses React + Vite as a live preview environment, but every folder and file has a direct Salla equivalent.

---

## Folder Structure & Salla Mapping

```
lore-store/
│
├── twilight.json                  ← SALLA: theme manifest (sections, settings schema, templates)
├── README.md                      ← This file
│
└── src/
    ├── config/
    │   └── settings.json          ← SALLA: config/settings_data.json (default theme settings)
    │
    ├── layouts/
    │   └── DefaultLayout.tsx      ← SALLA: theme/layouts/master.twig
    │                                  Wraps every page with Navbar + Footer
    │
    ├── sections/                  ← SALLA: theme/sections/*.twig
    │   │   Each file = one draggable, configurable Salla section
    │   ├── HeroSection.tsx        ← SALLA: sections/hero-banner.twig
    │   ├── FeaturedCategoriesSection.tsx ← SALLA: sections/featured-categories.twig
    │   ├── NewArrivalsSection.tsx ← SALLA: sections/new-arrivals.twig
    │   ├── BrandBannerSection.tsx ← SALLA: sections/brand-banner.twig
    │   ├── BestSellersSection.tsx ← SALLA: sections/best-sellers.twig
    │   └── CollectionsSection.tsx ← SALLA: sections/collections-list.twig
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx         ← SALLA: components/header.twig
    │   │   └── Footer.tsx         ← SALLA: components/footer.twig
    │   └── shop/
    │       └── ProductCard.tsx    ← SALLA: components/product-card.twig
    │
    ├── pages/                     ← SALLA: theme/templates/*.twig
    │   ├── Home.tsx               ← SALLA: templates/index.twig
    │   ├── Shop.tsx               ← SALLA: templates/collection.twig
    │   ├── ProductDetail.tsx      ← SALLA: templates/product.twig
    │   ├── Collection.tsx         ← SALLA: templates/collection.twig (filtered)
    │   └── About.tsx              ← SALLA: templates/page.twig
    │
    └── data/
        └── products.ts            ← PLACEHOLDER only — see migration notes below
```

---

## Running in Replit (Development Preview)

```bash
pnpm --filter @workspace/lore-store run dev
```

The site is served at the root `/` path via the Replit proxy.

---

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial LORE theme — Salla-compatible structure"
git remote add origin https://github.com/YOUR_USERNAME/lore-theme.git
git push -u origin main
```

---

## Migrating to a Real Salla Theme

### Step 1 — Install Salla CLI

```bash
npm install -g @salla.sa/cli
salla theme init
```

### Step 2 — Copy the structure

Map these folders from this project into your new Salla theme:

| This project             | Salla theme              |
|--------------------------|--------------------------|
| `twilight.json`          | `twilight.json` (root)   |
| `src/sections/*.tsx`     | `theme/sections/*.twig`  |
| `src/layouts/*.tsx`      | `theme/layouts/*.twig`   |
| `src/components/*.tsx`   | `theme/components/*.twig`|
| `src/config/settings.json` | `config/settings_data.json` |

### Step 3 — Replace static data with Salla variables

Every comment marked `SALLA:` in the source files shows you exactly what to replace.

**Key substitutions:**

| React (static)                        | Salla Liquid/Twig                          |
|---------------------------------------|--------------------------------------------|
| `product.name`                        | `{{ product.name }}`                       |
| `product.description`                 | `{{ product.description }}`                |
| `product.price.toFixed(2)`            | `{{ product.price \| money }}`             |
| `product.image`                       | `{{ product.images[0] \| image_url }}`     |
| `product.badges`                      | `{{ product.labels }}`                     |
| `product.variants`                    | `{{ product.options }}`                    |
| `getBestSellers()`                    | `salla.store.best_sellers(4)`              |
| `getNewArrivals()`                    | `salla.store.new_products(4)`              |
| `getProductsByCategory()`             | `collection.products`                      |
| `<Link href="/shop">`                 | `{{ routes.collections_all }}`             |
| `<Link href="/about">`                | `{{ routes.pages_about }}`                 |
| Add to cart button                    | `<salla-add-to-cart product-id="...">`     |
| Wishlist heart                        | `<salla-wishlist product-id="...">`        |

### Step 4 — Connect GitHub in Salla Partners

1. Go to [Salla Partners](https://salla.partners) → Settings → Integrations
2. **Disconnect** any existing GitHub connection
3. **Reconnect** and grant **full repository access** (not just read)
4. Or use `salla theme init` from the CLI to bypass the web UI GitHub issue

### Step 5 — Register sections in twilight.json

The `twilight.json` in this project is already formatted for Salla. When you
convert each React section to a `.twig` file, the IDs and names already match.

---

## Placeholder Files

| File | Status | Notes |
|------|--------|-------|
| `src/data/products.ts` | **PLACEHOLDER** | Replace with Salla product variables |
| `src/config/settings.json` | **TEMPLATE** | Maps directly to Salla settings_data.json |
| `public/images/*.png` | **PLACEHOLDER** | Replace with Salla media uploads |
| `public/lore-logo.png` | **REAL ASSET** | Keep or upload to Salla media library |

---

## Brand Colors (CSS Variables → Salla Settings)

| CSS Variable     | Value     | twilight.json setting ID  |
|------------------|-----------|---------------------------|
| `--primary`      | `#3D1054` | `color_primary`           |
| `--background`   | `#F5F0E8` | `color_background`        |
| `--accent`       | `#C9B8D8` | `color_accent`            |
| `--foreground`   | `#1A0A2B` | `color_foreground`        |

In a real Salla theme, these values are controlled via the theme editor and
injected as CSS variables automatically by Salla's theming engine.
