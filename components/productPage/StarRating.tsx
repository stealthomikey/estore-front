import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number; // e.g. 4.3
  ratingCount?: number; // optional number of ratings
}

const StarRating: React.FC<StarRatingProps> = ({ rating, ratingCount }) => {
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;

  return (
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => {
        let starClass = 'text-gray-300 stroke-black';
        let clipPercentage = 0;

        if (i < fullStars) {
          starClass = 'text-yellow-400 fill-yellow-400 stroke-black';
          clipPercentage = 100;
        } else if (i === fullStars && fractionalPart > 0) {
          starClass = 'text-yellow-400 stroke-black';
          clipPercentage = fractionalPart * 100;
        }

        return (
          <span key={i} className="relative w-4 h-4 inline-block">
            <Star
              size={16}
              className="text-gray-300 stroke-black absolute top-0 left-0"
              strokeWidth={1.5}
            />
            <span
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${clipPercentage}%` }}
            >
              <Star
                size={16}
                className="text-yellow-400 fill-yellow-400 stroke-black"
                strokeWidth={1.5}
              />
            </span>
          </span>
        );
      })}
      {ratingCount !== undefined && (
        <span className="ml-2 text-sm text-gray-500">({ratingCount})</span>
      )}
    </div>
  );
};

export default StarRating;
