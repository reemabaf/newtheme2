import { Link } from "wouter";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="relative aspect-[4/5] bg-muted overflow-hidden rounded-lg mb-4">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View {product.name}</span>
        </Link>
        <img
          src={import.meta.env.BASE_URL + product.image.replace(/^\//, '')}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20 pointer-events-none">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className={cn(
                "text-xs font-bold px-2 py-1 tracking-wider uppercase",
                badge === "Best Seller" ? "bg-primary text-primary-foreground" : 
                badge === "New" ? "bg-accent text-accent-foreground" : 
                "bg-background text-foreground"
              )}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-20">
          <button className="bg-background/90 backdrop-blur text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm">
            <Heart size={18} />
          </button>
          <button className="bg-background/90 backdrop-blur text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
          {product.category}
        </div>
        <Link href={`/product/${product.id}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
          {product.name}
        </Link>
        <p className="text-sm text-foreground/80 mt-1 line-clamp-2 mb-3 font-serif italic">
          {product.description}
        </p>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
