"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card className="transition-all shadow hover:shadow-lg">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-md" />
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <p className="text-sm text-muted-foreground">{car.brand} • {car.fuel}</p>
        <p className="font-bold text-green-600">${car.price}</p>
        <Button variant={isWishlisted ? "destructive" : "default"} onClick={onToggleWishlist}>
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </CardContent>
    </Card>
  );
}
