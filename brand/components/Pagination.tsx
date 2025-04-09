"use client";

import { Button } from "@/components/ui/button";

export default function Pagination({ current, total, onPageChange }: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-2 p-6">
      <Button disabled={current === 1} onClick={() => onPageChange(current - 1)}>
        Prev
      </Button>
      <span className="px-2">{current} / {total}</span>
      <Button disabled={current === total} onClick={() => onPageChange(current + 1)}>
        Next
      </Button>
    </div>
  );
}
