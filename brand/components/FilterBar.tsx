"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGasPump, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function FilterBar({ onFilter }: { onFilter: (filters: { brand: string; fuel: string }) => void }) {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");

  const handleSearch = () => {
    onFilter({ brand, fuel });
  };

  return (
    <div className="flex flex-wrap gap-6 items-end px-6 py-6 rounded-2xl bg-black shadow-lg border border-[#00FF88] animate-fadeIn">
      <div className="w-full sm:w-1/3">
        <label className="block text-sm text-[#00FF88] mb-1 flex items-center gap-2">
          <FontAwesomeIcon icon={faCar} />
          Brand
        </label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="e.g. Tesla"
          className="w-full px-4 py-2 rounded-lg bg-black text-white border-2 border-[#00FF88] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF88] transition"
        />
      </div>

      <div className="w-full sm:w-1/3">
        <label className="block text-sm text-[#00FF88] mb-1 flex items-center gap-2">
          <FontAwesomeIcon icon={faGasPump} />
          Fuel Type
        </label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-black text-white border-2 border-[#00FF88] focus:outline-none focus:ring-2 focus:ring-[#00FF88] transition"
        >
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <div className="w-full sm:w-auto">
        <button
          onClick={handleSearch}
          className="bg-[#00FF88] text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow-green-500/50 hover:shadow-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </div>
    </div>
  );
}
