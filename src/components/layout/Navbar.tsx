import { Link } from "wouter";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "Phone Cases", href: "/shop?category=Phone Cases" },
    { name: "Stickers", href: "/shop?category=Stickers" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10 flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}lore-logo.png`} 
              alt="LORE Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-foreground hover:text-primary transition-colors p-2">
              <Search size={20} />
            </button>
            <Link href="/cart" className="text-foreground hover:text-primary transition-colors p-2 relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
