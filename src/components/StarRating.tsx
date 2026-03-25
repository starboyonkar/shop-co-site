import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  ratingCount?: string;
  size?: number;
}

const StarRating = ({ rating, ratingCount, size = 16 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} size={size} className="fill-star text-star" />;
          }
          if (i === fullStars && hasHalf) {
            return <StarHalf key={i} size={size} className="fill-star text-star" />;
          }
          return <Star key={i} size={size} className="text-star" />;
        })}
      </div>
      {ratingCount && <span className="text-sm text-muted-foreground">{ratingCount}</span>}
    </div>
  );
};

export default StarRating;
