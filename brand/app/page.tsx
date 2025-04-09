"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";
import FilterBar from "@/components/FilterBar";
import Pagination from "@/components/Pagination";
import { cars as mockCars } from "@/lib/data";

export default function HomePage() {
  const [cars, setCars] = useState<any[]>([]);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const carsPerPage = 10;

  useEffect(() => {
    setCars(mockCars);
    setFilteredCars(mockCars);

    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(stored);
  }, []);

  // 🔥 Live filter function
  const handleFilter = ({ brand, fuel }: { brand: string; fuel: string }) => {
    let result = [...cars];

    if (brand.trim()) {
      result = result.filter((car) =>
        car.brand.toLowerCase().includes(brand.trim().toLowerCase())
      );
    }

    if (fuel) {
      result = result.filter(
        (car) => car.fuel.toLowerCase() === fuel.toLowerCase()
      );
    }

    setFilteredCars(result);
    setCurrentPage(1);
  };

  const toggleWishlist = (carId: string) => {
    const updated = wishlist.includes(carId)
      ? wishlist.filter((id) => id !== carId)
      : [...wishlist, carId];

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const indexOfLast = currentPage * carsPerPage;
  const indexOfFirst = indexOfLast - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="space-y-6">
      <Header />
      <FilterBar onFilter={handleFilter} />
      {currentCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {currentCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isWishlisted={wishlist.includes(car.id)}
              onToggleWishlist={() => toggleWishlist(car.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-10 text-lg">No cars found</div>
      )}
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
