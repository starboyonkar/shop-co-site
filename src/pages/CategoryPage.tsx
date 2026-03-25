import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { categoryProducts } from "@/lib/products";

const filterColors = [
  "hsl(142, 76%, 36%)", "hsl(0, 84%, 60%)", "hsl(45, 93%, 58%)", "hsl(30, 100%, 50%)",
  "hsl(199, 89%, 48%)", "hsl(270, 76%, 52%)", "hsl(330, 81%, 60%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 0%)"
];
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];

const CategoryPage = () => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(4);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Filters</h3>
          <SlidersHorizontal size={18} />
        </div>
        <hr />
      </div>

      {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cat) => (
        <div key={cat} className="flex items-center justify-between cursor-pointer hover:opacity-70">
          <span className="text-muted-foreground text-sm">{cat}</span>
          <ChevronRight size={16} className="text-muted-foreground" />
        </div>
      ))}

      <hr />

      <div>
        <div className="flex items-center justify-between mb-4 cursor-pointer">
          <h3 className="font-medium">Price</h3>
          <ChevronUp size={16} />
        </div>
        <input type="range" min={50} max={200} className="w-full accent-foreground" />
        <div className="flex justify-between text-sm text-muted-foreground mt-1">
          <span>$50</span><span>$200</span>
        </div>
      </div>

      <hr />

      <div>
        <div className="flex items-center justify-between mb-4 cursor-pointer">
          <h3 className="font-medium">Colors</h3>
          <ChevronUp size={16} />
        </div>
        <div className="flex flex-wrap gap-2">
          {filterColors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className="w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center"
              style={{
                backgroundColor: color,
                borderColor: selectedColor === i ? "hsl(var(--foreground))" : "transparent",
              }}
            >
              {selectedColor === i && <span className="text-primary-foreground text-xs">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div>
        <div className="flex items-center justify-between mb-4 cursor-pointer">
          <h3 className="font-medium">Size</h3>
          <ChevronUp size={16} />
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                selectedSize === size
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-border"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div>
        <div className="flex items-center justify-between mb-4 cursor-pointer">
          <h3 className="font-medium">Dress Style</h3>
          <ChevronUp size={16} />
        </div>
        {dressStyles.map((style) => (
          <div key={style} className="flex items-center justify-between cursor-pointer hover:opacity-70 mb-2">
            <span className="text-muted-foreground text-sm">{style}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </div>
        ))}
      </div>

      <button className="w-full bg-primary text-primary-foreground rounded-full py-3 text-sm font-medium">
        Apply Filter
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Casual</span>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 shrink-0 border border-border rounded-lg p-5">
            <FilterContent />
          </aside>

          {/* Mobile filter button */}
          <button
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
            onClick={() => setFiltersOpen(true)}
          >
            <SlidersHorizontal size={20} />
          </button>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-foreground/50">
              <div className="absolute right-0 top-0 h-full w-80 bg-background p-5 overflow-y-auto">
                <button onClick={() => setFiltersOpen(false)} className="mb-4"><X size={24} /></button>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-integral text-2xl md:text-4xl">Casual</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hidden md:inline">Showing 1-10 of 100 Products</span>
                <span>Sort by: <strong className="text-foreground">Most Popular</strong></span>
                <ChevronDown size={14} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {categoryProducts.map((p, i) => <ProductCard key={`${p.id}-${i}`} product={p} />)}
            </div>

            <div className="flex items-center justify-between mt-10 border-t border-border pt-4">
              <button className="flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-sm hover:bg-secondary">
                ← Previous
              </button>
              <div className="flex gap-1">
                {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                  <button
                    key={i}
                    className={`w-9 h-9 rounded-lg text-sm ${
                      page === 1 ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-sm hover:bg-secondary">
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
