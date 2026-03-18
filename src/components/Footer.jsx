"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  'Ashok Vihar',   'Ashok Vihar Phase 2', 'DLF Phase 1',
  'DLF Phase 2',   'DLF Phase 3',         'DLF Phase 4',
  'DLF Phase 5',   'Golf Course Road',    'MG Road',
  'Manesar',       'New Palam Vihar',     'Palam Vihar',
  'Rajendra Park', 'Sector 1',            'Sector 102',
  'Sector 103',    'Sector 105',          'Sector 106',
  'Sector 107',    'Sector 108',          'Sector 109',
  'Sector 10A',    'Sector 110',          'Sector 111',
  'Sector 112',    'Sector 113',          'Sector 14',
  'Sector 2',      'Sector 23',           'Sector 25',
  'Sector 26',     'Sector 28',           'Sector 3',
  'Sector 30',     'Sector 31',           'Sector 33',
  'Sector 37D',    'Sector 39',           'Sector 41',
  'Sector 42',     'Sector 43',           'Sector 45',
  'Sector 46',     'Sector 47',           'Sector 48',
  'Sector 49',     'Sector 50',           'Sector 51',
  'Sector 53',     'Sector 54',           'Sector 55',
  'Sector 56',     'Sector 57',           'Sector 58',
  'Sector 59',     'Sector 6',            'Sector 60',
  'Sector 61',     'Sector 62',           'Sector 63',
  'Sector 63A',    'Sector 65',           'Sector 66',
  'Sector 67',     'Sector 67A',          'Sector 68',
  'Sector 69',     'Sector 7',            'Sector 77',
  'Sector 78',     'Sector 80',           'Sector 81',
  'Sector 82',     'Sector 83',           'Sector 84',
  'Sector 85',     'Sector 86',           'Sector 88',
  'Sector 89',     'Sector 90',           'Sector 91',
  'Sector 92',     'Sector 93',           'Sector 95',
  'Sector 99',     'Sohna Road',          'South City 1',
  'South City 2',  'Sushant Lok Phase 2', 'Sushant Lok Phase 3'
];

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
  const [showAll, setShowAll] = useState(false);

  const initialCount = 40;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0f2c46] pt-16 pb-8 px-4 border-t border-[#143D60] overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        {/* <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Flats for Sale in{" "}
            <span className="text-[#143D60] bg-white px-2 py-1 rounded">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            Discover affordable and premium flats across prime sectors of Faridabad with verified listings and strong ROI potential.
          </p>
        </div> */}

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Sale Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-300 hover:text-white transition duration-200"
                >
                  Flat For Sale {loc}
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
                  Flat For Sale {loc}
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

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