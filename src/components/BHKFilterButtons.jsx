"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProperty } from "@/contextapi/propertycontext";

export default function BHKFilterButtons() {
    const {setPage} = useProperty();
  const bhkOptions = [1, 2, 3, 4];
  const params = useParams();

  const city = "gurgaon";
  const activeSlug = params?.slug;

  const formatCity = (city) =>
    city.toLowerCase().replace(/\s+/g, "-");

  const createSlug = (bhk) => {
    return `${bhk}-bhk-flats-for-sale-in-${formatCity(city)}`;
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
      {bhkOptions.map((bhk) => {
        const slug = createSlug(bhk);

        // 🔥 Active match
        const isActive = activeSlug === slug;

        return (
          <Link
            key={bhk}
            href={`/listing/${slug}`}
            className={`px-3 sm:px-6 py-2 sm:py-3 
            text-xs sm:text-sm md:text-base font-medium
            rounded-tl-lg sm:rounded-tl-xl rounded-br-lg sm:rounded-br-xl
            border border-[#143D60] transition-all duration-200
            text-center break-words

            ${
              isActive
                ? "bg-[#143D60] text-white"
                : "text-[#143D60] hover:bg-[#143D60] hover:text-white"
            }
            `}  
          >
            {bhk} BHK Flats in Gurgaon
          </Link>
        );
      })}
    </div>
  );
}