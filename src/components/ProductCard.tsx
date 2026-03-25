import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import type { Product } from "@/lib/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-bold text-sm md:text-base truncate">{product.name}</h3>
      <StarRating rating={product.rating} ratingCount={product.ratingCount} />
      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold text-lg md:text-xl">${product.price}</span>
        {product.originalPrice && (
          <span className="text-muted-foreground line-through text-sm">${product.originalPrice}</span>
        )}
        {product.discount && (
          <span className="text-discount text-xs bg-discount/10 px-2 py-0.5 rounded-full font-medium">
            -{product.discount}%
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
