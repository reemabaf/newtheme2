import { Link } from "wouter";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src={`${import.meta.env.BASE_URL}lore-logo.png`} 
              alt="LORE Logo" 
              className="h-10 w-auto invert brightness-0" 
            />
            <p className="text-primary-foreground/80 font-serif italic max-w-sm">
              Elevated accessories inspired by the stories we love. Premium quality, curated designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-primary-foreground/70 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=Phone Cases" className="text-primary-foreground/70 hover:text-white transition-colors">Phone Cases</Link></li>
              <li><Link href="/shop?category=Stickers" className="text-primary-foreground/70 hover:text-white transition-colors">Stickers</Link></li>
              <li><Link href="/shop?collection=Sitcom Collection" className="text-primary-foreground/70 hover:text-white transition-colors">Sitcom Collection</Link></li>
              <li><Link href="/shop?collection=Fantasy Collection" className="text-primary-foreground/70 hover:text-white transition-colors">Fantasy Collection</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">The LORE Letter</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white hover:text-secondary transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LORE Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
