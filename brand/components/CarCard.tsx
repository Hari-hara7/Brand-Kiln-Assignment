"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function CarCard({
  car,
  isWishlisted,
  onToggleWishlist,
}: {
  car: any;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}) {
  return (
    <Card className="transition-all bg-black text-[#00FF88] border border-[#00FF88] hover:shadow-lg hover:shadow-[#00FF88]/30 rounded-xl overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover border-b border-[#00FF88] rounded-t-xl"
      />
      <CardContent className="p-4 space-y-3">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-sm text-gray-400">
          {car.brand} • {car.fuel}
        </p>
        <p className="text-lg font-bold text-[#00FF88]">${car.price}</p>
        <Button
          onClick={onToggleWishlist}
          className={`w-full font-semibold flex items-center justify-center gap-2 transition-all
            ${isWishlisted
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-[#00FF88] hover:bg-[#00dd77] text-black"}`}
        >
          <FontAwesomeIcon icon={isWishlisted ? faHeartBroken : faHeart} />
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </CardContent>
    </Card>
  );
}
