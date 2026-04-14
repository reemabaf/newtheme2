/**
 * DEFAULT LAYOUT — src/layouts/DefaultLayout.tsx
 *
 * SALLA EQUIVALENT: theme/layouts/master.twig (or layout.twig)
 *
 * In a real Salla theme, this would be the base Twig layout that wraps every
 * page template. It injects the <head>, the global Navbar, the page {content},
 * and the Footer. All page templates extend this layout via
 * {% extends 'layouts/master.twig' %}.
 *
 * In this React preview, it is a wrapper component that every page imports.
 * Swapping out the real Salla layout means replacing this file only.
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
  /** Pass true on pages that need pt-24 top padding (all except Home) */
  withTopPadding?: boolean;
}

export function DefaultLayout({ children, withTopPadding = true }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      {/* ─── SALLA: {% include 'components/header.twig' %} ─── */}
      <Navbar />

      <main className={`flex-grow${withTopPadding ? " pt-24" : ""}`}>
        {children}
      </main>

      {/* ─── SALLA: {% include 'components/footer.twig' %} ─── */}
      <Footer />
    </div>
  );
}
