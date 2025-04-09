"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";
import { cars as allCars } from "@/lib/data";

export default function WishlistPage() {
  const [wishlistCars, setWishlistCars] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const filtered = allCars.filter((car) => stored.includes(car.id));
    setWishlistCars(filtered);
  }, []);

  const sortedCars = [...wishlistCars].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="space-y-6 bg-black min-h-screen text-[#00FF88]">
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h2 className="text-2xl font-bold">Your Wishlist</h2>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 rounded bg-gray-900 text-[#00FF88] border border-[#00FF88]"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {sortedCars.length === 0 ? (
          <p className="text-muted-foreground">No cars in wishlist yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isWishlisted={true}
                onToggleWishlist={() => {
                  const updated = wishlistCars.filter((c) => c.id !== car.id);
                  setWishlistCars(updated);
                  localStorage.setItem(
                    "wishlist",
                    JSON.stringify(updated.map((c) => c.id))
                  );
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
