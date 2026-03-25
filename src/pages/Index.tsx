import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { newArrivals, topSelling } from "@/lib/products";
import heroImage from "@/assets/hero-couple.jpg";
import casualImg from "@/assets/styles/casual.jpg";
import formalImg from "@/assets/styles/formal.jpg";
import partyImg from "@/assets/styles/party.jpg";
import gymImg from "@/assets/styles/gym.jpg";

const customerReviews = [
  { name: "Sarah M.", text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"", rating: 5 },
  { name: "Alex K.", text: "\"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.\"", rating: 5 },
  { name: "James L.", text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-secondary">
      <div className="container flex flex-col lg:flex-row items-center">
        <div className="flex-1 py-10 lg:py-20">
          <h1 className="font-integral text-4xl md:text-5xl lg:text-6xl leading-none mb-5">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-muted-foreground max-w-lg mb-8">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <Link
            to="/category"
            className="inline-block bg-primary text-primary-foreground rounded-full px-14 py-3.5 font-medium hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>
          <div className="flex gap-8 mt-10 flex-wrap">
            <div><span className="font-bold text-2xl md:text-4xl">200+</span><p className="text-muted-foreground text-xs">International Brands</p></div>
            <div className="border-l border-border pl-8"><span className="font-bold text-2xl md:text-4xl">2,000+</span><p className="text-muted-foreground text-xs">High-Quality Products</p></div>
            <div className="border-l border-border pl-8"><span className="font-bold text-2xl md:text-4xl">30,000+</span><p className="text-muted-foreground text-xs">Happy Customers</p></div>
          </div>
        </div>
        <div className="flex-1 relative hidden lg:block">
          <img src={heroImage} alt="Fashion couple" className="w-full h-[600px] object-cover object-top" />
        </div>
      </div>
    </section>

    {/* Brands Bar */}
    <section className="bg-primary py-6">
      <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map((brand) => (
          <span key={brand} className="text-primary-foreground font-bold text-xl md:text-3xl tracking-wider opacity-90">
            {brand}
          </span>
        ))}
      </div>
    </section>

    {/* New Arrivals */}
    <section className="container py-16">
      <h2 className="font-integral text-3xl md:text-5xl text-center mb-10">NEW ARRIVALS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="text-center mt-8">
        <Link to="/category" className="inline-block border border-border rounded-full px-12 py-3 text-sm font-medium hover:bg-secondary transition-colors">
          View All
        </Link>
      </div>
    </section>

    <hr className="container" />

    {/* Top Selling */}
    <section className="container py-16">
      <h2 className="font-integral text-3xl md:text-5xl text-center mb-10">TOP SELLING</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {topSelling.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="text-center mt-8">
        <Link to="/category" className="inline-block border border-border rounded-full px-12 py-3 text-sm font-medium hover:bg-secondary transition-colors">
          View All
        </Link>
      </div>
    </section>

    {/* Browse by Style */}
    <section className="container py-16">
      <div className="bg-secondary rounded-[2.5rem] p-6 md:p-16">
        <h2 className="font-integral text-3xl md:text-5xl text-center mb-10">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Casual", img: casualImg, span: "md:col-span-1" },
            { name: "Formal", img: formalImg, span: "md:col-span-2" },
            { name: "Party", img: partyImg, span: "md:col-span-2" },
            { name: "Gym", img: gymImg, span: "md:col-span-1" },
          ].map((style) => (
            <Link
              key={style.name}
              to="/category"
              className={`relative rounded-2xl overflow-hidden h-48 md:h-64 group ${style.span}`}
            >
              <img src={style.img} alt={style.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <h3 className="absolute top-6 left-6 font-bold text-xl md:text-2xl text-primary-foreground">{style.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Happy Customers */}
    <section className="container py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-integral text-3xl md:text-5xl">OUR HAPPY CUSTOMERS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {customerReviews.map((review, i) => (
          <div key={i} className="border border-border rounded-lg p-6">
            <StarRating rating={review.rating} size={18} />
            <div className="flex items-center gap-1 mt-3 mb-2">
              <span className="font-bold">{review.name}</span>
              <span className="text-verified">✓</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
