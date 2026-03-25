import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, MoreHorizontal, SlidersHorizontal, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { productDetail, relatedProducts, reviews } from "@/lib/products";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Layout>
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={14} />
          <span>Shop</span>
          <ChevronRight size={14} />
          <span>Men</span>
          <ChevronRight size={14} />
          <span className="text-foreground">T-shirts</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-3 flex-1">
            <div className="flex lg:flex-col gap-3">
              {productDetail.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-foreground" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square rounded-lg overflow-hidden bg-secondary">
              <img src={productDetail.images[selectedImage]} alt={productDetail.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="font-integral text-2xl md:text-4xl mb-3">{productDetail.name}</h1>
            <StarRating rating={productDetail.rating} ratingCount={productDetail.ratingCount} size={20} />
            <div className="flex items-center gap-3 mt-3 mb-4">
              <span className="font-bold text-2xl md:text-3xl">${productDetail.price}</span>
              <span className="text-muted-foreground line-through text-xl">${productDetail.originalPrice}</span>
              <span className="text-discount text-sm bg-discount/10 px-3 py-1 rounded-full font-medium">-{productDetail.discount}%</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{productDetail.description}</p>

            <hr className="mb-4" />

            <div className="mb-4">
              <span className="text-sm text-muted-foreground mb-2 block">Select Colors</span>
              <div className="flex gap-3">
                {productDetail.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all"
                    style={{ backgroundColor: color, borderColor: selectedColor === i ? color : "transparent" }}
                  >
                    {selectedColor === i && <span className="text-primary-foreground text-sm">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <hr className="mb-4" />

            <div className="mb-6">
              <span className="text-sm text-muted-foreground mb-2 block">Choose Size</span>
              <div className="flex flex-wrap gap-2">
                {productDetail.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 rounded-full text-sm transition-colors ${
                      selectedSize === size ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-border"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="mb-6" />

            <div className="flex gap-4">
              <div className="flex items-center gap-4 bg-secondary rounded-full px-5">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={18} /></button>
                <span className="font-medium w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={18} /></button>
              </div>
              <button className="flex-1 bg-primary text-primary-foreground rounded-full py-3.5 font-medium hover:opacity-90 transition-opacity">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-border">
            {[
              { key: "details", label: "Product Details" },
              { key: "reviews", label: "Rating & Reviews" },
              { key: "faqs", label: "FAQs" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.key ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
              </button>
            ))}
          </div>

          {activeTab === "reviews" && (
            <div className="py-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">
                  All Reviews <span className="text-muted-foreground font-normal">(451)</span>
                </h3>
                <div className="flex items-center gap-3">
                  <button className="p-2 bg-secondary rounded-full"><SlidersHorizontal size={16} /></button>
                  <button className="flex items-center gap-1 bg-secondary rounded-full px-4 py-2 text-sm">
                    Latest <ChevronDown size={14} />
                  </button>
                  <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium">
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-border rounded-lg p-5">
                    <div className="flex items-center justify-between mb-2">
                      <StarRating rating={review.rating} size={18} />
                      <button><MoreHorizontal size={18} className="text-muted-foreground" /></button>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="font-bold">{review.name}</span>
                      {review.verified && <span className="text-verified">✓</span>}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{review.text}</p>
                    <span className="text-muted-foreground text-xs">{review.date}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="border border-border rounded-full px-10 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <section className="py-16">
          <h2 className="font-integral text-3xl md:text-4xl text-center mb-10">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPage;
