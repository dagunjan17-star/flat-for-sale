"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BHKFilterButtons() {

  const bhkOptions = ["1", "2", "3", "4"];
  const params = useParams();

  const activeBhk = params?.type;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">

      {bhkOptions.map((bhk) => {

        const isActive = activeBhk === bhk;

        return (
          <Link
            key={bhk}
            href={`/type/${bhk}`}
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