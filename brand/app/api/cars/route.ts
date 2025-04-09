import { NextResponse } from "next/server";
import { cars } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let results = [...cars];

  const brand = searchParams.get("brand");
  const fuel = searchParams.get("fuel");

  if (brand) results = results.filter((car) => car.brand === brand);
  if (fuel) results = results.filter((car) => car.fuel === fuel);

  return NextResponse.json(results);
}
