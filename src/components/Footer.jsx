"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";
import { useLocality } from "@/contextapi/LocalityContext";
// ✅ Clean Slug
const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState({
    apartments: false,
    bhk1: false,
    bhk2: false,
    bhk3: false,
    bhk4: false,
  });
  const { localities } = useLocality();
  const displayLocations =
    localities && localities.length > 0
      ? localities
      : locations;

  const initialCount = 14;
  const visibleApartments = showAll.apartments
    ? displayLocations
    : displayLocations.slice(0, initialCount);

  const visible1BHK = showAll.bhk1
    ? displayLocations
    : displayLocations.slice(0, initialCount);

  const visible2BHK = showAll.bhk2
    ? displayLocations
    : displayLocations.slice(0, initialCount);

  const visible3BHK = showAll.bhk3
    ? displayLocations
    : displayLocations.slice(0, initialCount);

  const visible4BHK = showAll.bhk4
    ? displayLocations
    : displayLocations.slice(0, initialCount);

  return (
    <footer className="bg-[#0f2c46] pt-16 pb-8 px-4 border-t border-[#143D60] overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Flats for Sale in{" "}
            <span className="text-[#143D60] bg-white px-2 py-1 rounded">
              Gurgaon
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            Discover affordable and premium flats across prime sectors of Guragaon with verified listings and strong ROI potential.
          </p>
        </div>

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Flat For Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleApartments.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  key={index}
                  href={`https://www.dealacres.com/properties/flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  target="_blank"
                  rel="noopener noreferrer" className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  Flat For Sale in {loc}, Gurgaon
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#1b3b5a] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-white/20
                  z-[9999]
                  pointer-events-none
                "
                >
                  Flat For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll.apartments && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      apartments: true,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll.apartments && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      apartments: false,
                    }))}
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 1 BHK Flat For Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm overflow-visible">

            {visible1BHK.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  key={index}
                  href={`https://www.dealacres.com/properties/1-bhk-flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  target="_blank"
                  rel="noopener noreferrer" className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  1 BHK Flat For Sale in {loc}, Gurgaon
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#1b3b5a] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-white/20
                  z-[9999]
                  pointer-events-none
                "
                >
                  1 BHK Flat For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll.bhk1 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk1: true,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll.bhk1 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk1: false,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 2 BHK Flat For Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm overflow-visible">

            {visible2BHK.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  key={index}
                  href={`https://www.dealacres.com/properties/2-bhk-flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  target="_blank"
                  rel="noopener noreferrer" className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  2 BHK Flat For Sale in {loc}, Gurgaon
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#1b3b5a] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-white/20
                  z-[9999]
                  pointer-events-none
                "
                >
                  2 BHK Flat For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll.bhk2 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk2: true,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll.bhk2 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk2: false,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 3 BHK Flat For Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm overflow-visible">

            {visible3BHK.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  key={index}
                  href={`https://www.dealacres.com/properties/3-bhk-flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  target="_blank"
                  rel="noopener noreferrer" className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  3 BHK Flat For Sale in {loc}, Gurgaon
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#1b3b5a] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-white/20
                  z-[9999]
                  pointer-events-none
                "
                >
                  3 BHK Flat For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll.bhk3 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk3: true,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll.bhk3 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk3: false,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular 4 BHK Flat For Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-4 text-sm overflow-visible">

            {visible4BHK.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  key={index}
                  href={`https://www.dealacres.com/properties/4-bhk-flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  target="_blank"
                  rel="noopener noreferrer" className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  4 BHK Flat For Sale in {loc}, Gurgaon
                </Link>

                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#1b3b5a] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-white/20
                  z-[9999]
                  pointer-events-none
                "
                >
                  4 BHK Flat For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll.bhk4 && displayLocations.length > initialCount && (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk4: true,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll.bhk4 && displayLocations.length > initialCount (
              <div>
                <span
                  onClick={() =>
                    setShowAll(prev => ({
                      ...prev,
                      bhk4: false,
                    }))
                  }
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
        {/* 🔥 Bottom Navigation Buttons - CENTER */}
        <div className="border-t border-[#143D60] pt-6 mt-10 mb-6">
          <div className="flex justify-center items-center">

            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-white transition"
              >
                How It's Work
              </Link>
            </div>

          </div>
        </div>
        {/* BOTTOM */}
        <div className="border-t border-[#143D60] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} FlatsForSaleInGurgaon.com | All rights reserved.
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By - {" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
            >
              Parchar Manch
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}