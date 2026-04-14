/**
 * ABOUT PAGE — src/pages/About.tsx
 *
 * SALLA EQUIVALENT: theme/templates/page.twig
 *
 * In Salla, this would be a standard CMS page template. Page content is
 * entered in the Salla merchant dashboard and rendered via {{ page.content }}.
 * Static text below would be replaced by rich-text CMS content.
 *
 * SALLA DYNAMIC REPLACEMENTS (when migrating):
 *   Page title       → {{ page.name }}
 *   Page body        → {{ page.content }} (rich text from Salla CMS)
 *   Images           → {{ page.image | image_url }} (if supported)
 */

import { Link } from "wouter";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function About() {
  return (
    /* SALLA: {% extends 'layouts/master.twig' %} */
    <DefaultLayout>
      <div className="pb-20">

        {/* Hero — SALLA: Static or controlled by page settings in twilight.json */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70 mb-6 block">
              The LORE Story
            </span>
            {/* SALLA: {{ page.name }} */}
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Elevating the Fandom Experience
            </h1>
            {/* SALLA: First paragraph of {{ page.content }} */}
            <p className="text-xl md:text-2xl font-serif italic text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              We started LORE because we loved our stories, but we couldn't find
              accessories that felt like they belonged in our lives.
            </p>
          </div>
        </section>

        {/* Content — SALLA: {{ page.content }} rendered as rich text */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden order-2 md:order-1 relative">
                {/* SALLA: {{ page.image | image_url }} */}
                <img
                  src={import.meta.env.BASE_URL + "images/case-coffee.png"}
                  alt="Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                  Beyond the Merch Table
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  For too long, expressing your love for a movie, show, or book meant
                  settling for cheap plastic, loud logos, and uninspired design. Pop
                  culture merchandise was treated as an afterthought.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  LORE is different. We believe that the stories that shape us deserve
                  to be celebrated with craftsmanship. We take iconic motifs, memorable
                  locations, and cinematic feelings, and translate them into premium,
                  subtle designs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values — SALLA: Could be a dedicated 'brand-values' section in twilight.json */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Subtlety", desc: "IYKYK. Our designs are created for the true fans. They don't scream for attention; they invite connection." },
                { num: "02", title: "Quality",  desc: "Premium materials, rigorous testing, and protective designs. Because a beautiful case should still do its job." },
                { num: "03", title: "Community", desc: "Stories are meant to be shared. We design for the communities that keep these worlds alive." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-serif italic">{num}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-widest">{title}</h3>
                  <p className="text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
              Find Your Story.
            </h2>
            {/* SALLA: {{ routes.collections_all }} */}
            <Link
              href="/shop"
              className="inline-flex bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Explore The Collection
            </Link>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
