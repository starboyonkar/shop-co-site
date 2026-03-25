import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, UserRound, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {showBanner && (
        <div className="bg-banner text-banner-foreground text-center py-2 px-4 text-xs md:text-sm relative">
          Sign up and get 20% off to your first order.{" "}
          <Link to="/" className="underline font-medium">Sign Up Now</Link>
          <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
            <X size={16} />
          </button>
        </div>
      )}
      <header className="border-b border-border">
        <div className="container flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="font-integral text-2xl md:text-3xl tracking-tight">
              SHOP.CO
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Shop</span>
              <ChevronDown size={16} />
            </div>
            <Link to="/category" className="hover:opacity-70 transition-opacity">On Sale</Link>
            <Link to="/category" className="hover:opacity-70 transition-opacity">New Arrivals</Link>
            <Link to="/category" className="hover:opacity-70 transition-opacity">Brands</Link>
          </nav>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-secondary rounded-full pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="md:hidden"><Search size={22} /></button>
            <Link to="/cart"><ShoppingCart size={22} /></Link>
            <Link to="/"><UserRound size={22} /></Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-3">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Shop</span>
              <ChevronDown size={16} />
            </div>
            <Link to="/category" onClick={() => setMobileMenuOpen(false)}>On Sale</Link>
            <Link to="/category" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
            <Link to="/category" onClick={() => setMobileMenuOpen(false)}>Brands</Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
