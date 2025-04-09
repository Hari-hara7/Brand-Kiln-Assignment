"use client";

import { useEffect, useState } from "react";

export default function FilterBar({
  onFilter,
}: {
  onFilter: (filters: { brand: string; fuel: string }) => void;
}) {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");

  // Live filtering (debounced)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onFilter({ brand, fuel });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [brand, fuel]);

  const handleSearch = () => {
    onFilter({ brand, fuel });
  };

  return (
    <div className="flex flex-wrap gap-4 items-end px-6">
      <div>
        <label className="block text-sm text-gray-300 mb-1">Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="e.g. Tesla"
          className="border border-gray-400 px-2 py-1 rounded w-40 text-black"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">Fuel Type</label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-40 text-black"
        >
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Search
      </button>
    </div>
  );
}
