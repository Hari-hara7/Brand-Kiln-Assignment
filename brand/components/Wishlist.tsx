"use client";

import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { cars } from "@/lib/data";

export default function Wishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [wishlistCars, setWishlistCars] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistIds(stored);
    const filtered = cars.filter((car) => stored.includes(car.id));
    setWishlistCars(filtered);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistCars.length === 0 ? (
        <p className="text-muted-foreground">No cars in wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
