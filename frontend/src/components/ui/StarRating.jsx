"use client";

import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function StarRating({ rating = 5, size = 18 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <HiStar key={star} size={size} className="text-yellow-400" />
        ) : (
          <HiOutlineStar key={star} size={size} className="text-yellow-400/40" />
        )
      )}
    </div>
  );
}
