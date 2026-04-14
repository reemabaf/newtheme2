/**
 * HERO SECTION — src/sections/HeroSection.tsx
 *
 * SALLA EQUIVALENT: theme/sections/hero-banner.twig
 *
 * In a real Salla theme this section would be a .twig file registered in
 * twilight.json under "sections". The editor can drag, reorder, and configure
 * it via the Salla theme customizer.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   tagline          → {{ section.settings.hero_tagline }}
 *   headline         → {{ section.settings.hero_headline }}
 *   subtext          → {{ section.settings.hero_subtext }}
 *   ctaLabel         → {{ section.settings.hero_cta_label }}
 *   hero_image src   → {{ section.settings.hero_image | image_url }}
 *   /shop link       → {{ routes.collections_all }}
 *   /about link      → {{ routes.pages_about }}
 */

import { Link } from "wouter";
import settings from "@/config/settings.json";

export function HeroSection() {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      data-section-id="hero"
      data-section-type="hero-banner"
    >
      {/* Background Image — SALLA: {{ section.settings.hero_image | image_url }} */}
      <div className="absolute inset-0 z-0">
        <img
          src={import.meta.env.BASE_URL + settings.hero.hero_image}
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center flex flex-col items-center">
        {/* Tagline — SALLA: {{ section.settings.hero_tagline }} */}
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {settings.hero.hero_tagline}
        </span>

        {/* Headline — SALLA: {{ section.settings.hero_headline }} */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 max-w-4xl">
          Carry Your <br />
          <span className="italic text-primary">Stories</span> With You
        </h1>

        {/* Subtext — SALLA: {{ section.settings.hero_subtext }} */}
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {settings.hero.hero_subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          {/* Primary CTA — SALLA: {{ routes.collections_all }} */}
          <Link
            href="/shop"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            {settings.hero.hero_cta_label}
          </Link>

          {/* Secondary CTA — SALLA: {{ routes.pages_about }} */}
          <Link
            href="/about"
            className="bg-transparent border border-foreground/20 text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-foreground transition-colors"
          >
            {settings.hero.hero_cta_secondary_label}
          </Link>
        </div>
      </div>
    </section>
  );
}
