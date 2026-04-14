/**
 * HOME PAGE — src/pages/Home.tsx
 *
 * SALLA EQUIVALENT: theme/templates/index.twig
 *
 * In a real Salla theme, this would be the index template. Each imported
 * section below maps to one Salla section registered in twilight.json.
 * The Salla theme editor lets merchants drag, reorder, show/hide, and
 * configure each section via the customizer.
 *
 * SALLA EQUIVALENT STRUCTURE:
 *   {% extends 'layouts/master.twig' %}
 *   {% block content %}
 *     {% section 'hero' %}
 *     {% section 'featured-categories' %}
 *     {% section 'new-arrivals' %}
 *     {% section 'brand-banner' %}
 *     {% section 'best-sellers' %}
 *     {% section 'collections-list' %}
 *   {% endblock %}
 */

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturedCategoriesSection } from "@/sections/FeaturedCategoriesSection";
import { NewArrivalsSection } from "@/sections/NewArrivalsSection";
import { BrandBannerSection } from "@/sections/BrandBannerSection";
import { BestSellersSection } from "@/sections/BestSellersSection";
import { CollectionsSection } from "@/sections/CollectionsSection";

export default function Home() {
  return (
    /* SALLA: {% extends 'layouts/master.twig' %} */
    <DefaultLayout withTopPadding={false}>
      {/* SALLA: {% section 'hero' %} */}
      <HeroSection />

      {/* SALLA: {% section 'featured-categories' %} */}
      <FeaturedCategoriesSection />

      {/* SALLA: {% section 'new-arrivals' %} */}
      <NewArrivalsSection />

      {/* SALLA: {% section 'brand-banner' %} */}
      <BrandBannerSection />

      {/* SALLA: {% section 'best-sellers' %} */}
      <BestSellersSection />

      {/* SALLA: {% section 'collections-list' %} */}
      <CollectionsSection />
    </DefaultLayout>
  );
}
