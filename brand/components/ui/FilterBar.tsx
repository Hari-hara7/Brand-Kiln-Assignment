"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterBar({
  onFilter,
}: {
  onFilter: (filters: any) => void;
}) {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");

  const handleSubmit = () => {
    onFilter({ brand, fuel });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <Input
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <Select onValueChange={setFuel}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Fuel Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Petrol">Petrol</SelectItem>
          <SelectItem value="Diesel">Diesel</SelectItem>
          <SelectItem value="Electric">Electric</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSubmit}>Apply Filters</Button>
    </div>
  );
}
