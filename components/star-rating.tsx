import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
    rating: number; // Out of 5
}

export const StarRating = ({ rating }: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star className="w-4 h-4 text-[#FFB80F] " key={`star-${i}`} />);
    }

    if (hasHalfStar) {
        stars.push(<StarHalf className="w-4 h-4 text-[#FFB80F] " key="half-star" />);
    }

    return <div className="flex items-center space-x-1">{stars}</div>;
};
