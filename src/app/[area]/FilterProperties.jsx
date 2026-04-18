"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {
  const { data, properties, loading2, error2, setLocality } = useProperty();

  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const finalData = useMemo(() => {

  // 👉 Agar locality ka data hi nahi hai → sirf random (150)
  if (safeData.length === 0) {
    return safeProperties.slice(0, 150);
  }

  // 👉 Agar locality ka data hai → mix
  const filteredIds = new Set(safeData.map((p) => p._id));

  const remaining = safeProperties.filter(
    (p) => !filteredIds.has(p._id)
  );

  const needed = 150 - safeData.length;

  return [
    ...safeData,
    ...remaining.slice(0, needed > 0 ? needed : 0)
  ].slice(0, 150);

}, [safeData, safeProperties]);

  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#e8f1f8]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#143D60]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#143D60] border-r-[#0f2c46] animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Property Listings...
        </p>
      </div>
    );
  }

  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-[#e8f1f8]">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

 

  return (
    <section className="bg-[#F4F8FB] py-4">
       {safeData.length === 0 && (
  <p className="text-center text-gray-500 mb-4">
    No properties found in {formattedArea}, showing recommended listings
  </p>
)}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 gap-6">

          {finalData.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#143D60]/10
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">

                {property?.media?.url ? (
                  <Image
                    src={property.media.url}
                    unoptimized
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-[#e8f1f8] w-full h-full flex items-center justify-center text-[#143D60] text-sm">
                    No Image
                  </div>
                )}

                {/* PROPERTY TYPE BADGE */}
                <span onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                  className="absolute top-3 left-3
                  bg-[#143D60] text-white text-xs px-3 py-1
                  rounded-tl-xl rounded-br-xl
                  shadow font-medium cursor-pointer"
                >
                  {property.propertyType}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col">

                <h2 className="text-base font-semibold text-gray-900 leading-snug">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  {property.locality}
</p>

                {/* INFO BAR */}

                <div className="mt-4 bg-[#f4f8fb] border border-[#143D60]/20 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-[#143D60]">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#143D60]/20"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.propertyCategory}
                    </span>
                  </div>

                </div>

                {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description ||
                    "Premium property available in Gurgaon with modern amenities and excellent connectivity."}
                </p> */}

                <div className="flex-1" />

                {/* PRICE + BUTTONS */}

                <div className="mt-5 flex justify-between items-center gap-4">

                  {/* PRICE */}
                  {/* <p className="text-lg font-bold text-[#143D60]">
                    Price On Call
                  </p> */}

                  {/* BUTTONS */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-[#143D60] text-white px-4 py-2
                      rounded-tl-xl rounded-br-xl
                      text-sm font-medium hover:bg-[#0f2c46] transition cursor-pointer"
                    >
                      Price On Call
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="border border-[#143D60] text-[#143D60]
                      px-4 py-2 text-sm
                      rounded-tl-xl rounded-br-xl
                      hover:bg-[#143D60] hover:text-white transition"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />

    </section>
  );
}