/**
 * BRAND BANNER SECTION — src/sections/BrandBannerSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/brand-banner.twig
 *
 * A full-width primary-color banner with a brand quote and CTA.
 * Commonly used in Salla themes as a "text-banner" or "promo-banner" section.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   quote            → {{ section.settings.quote }}
 *   cta_label        → {{ section.settings.cta_label }}
 *   cta link         → {{ routes.pages_about }}
 */

import { Link } from "wouter";
import settings from "@/config/settings.json";

export function BrandBannerSection() {
  return (
    <section
      className="py-24 md:py-32 bg-primary text-primary-foreground"
      data-section-id="brand_banner"
      data-section-type="brand-banner"
    >
      <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
        {/* SALLA: {{ section.settings.quote }} */}
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
          "{settings.brand_banner.quote}"
        </h2>

        {/* SALLA: <a href="{{ routes.pages_about }}">{{ section.settings.cta_label }}</a> */}
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary-foreground/30 hover:border-primary-foreground transition-colors pb-1"
        >
          {settings.brand_banner.cta_label}
        </Link>
      </div>
    </section>
  );
}
