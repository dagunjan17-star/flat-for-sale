"use client";

import { useState, useRef } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function Properties() {
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const propertySectionRef = useRef(null);
  const itemsPerPage = 150;

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* LOADING */

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#e8f1f8]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#143D60]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#143D60] border-r-[#0f2c46] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Property Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          No Flats Available for Sale in Gurgaon
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          New Gurgaon property listings will be updated soon.
        </p>
      </div>
    );
  }

  /* PAGINATION */

  const totalItems = properties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <section
      ref={propertySectionRef}
      className="bg-[#F4F8FB] px-4 sm:px-6 py-12 sm:py-16"
    >
      {/* HEADING */}

      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Flats for Sale in Gurgaon
        </h1>

        <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl text-sm sm:text-base">
          Discover premium flats for sale in Gurgaon across prime sectors like
          Golf Course Road, Sohna Road, Dwarka Expressway and New Gurgaon.
        </p>

        <div className="w-16 sm:w-20 h-1 bg-[#143D60] mt-5 sm:mt-6 rounded-full"></div>

        <div className="mt-6 sm:mt-8">
          <BHKFilterButtons />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        
        {/* LEFT LIST */}

        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl md:hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* IMAGE */}

                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-56 sm:h-64 md:h-full object-cover"
                  />

                  <span
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="absolute top-3 left-3 bg-[#143D60] text-white text-xs px-3 py-1 rounded-tl-xl rounded-br-xl shadow font-medium cursor-pointer"
                  >
                    {property.propertyType}
                  </span>
                </div>

                {/* DETAILS */}

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* INFO BAR */}

                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                    
                    <div>
                      <span className="text-gray-400 uppercase text-xs">
                        Type:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden sm:block h-8 w-px bg-[#143D60]/20"></div>

                    <div>
                      <span className="text-gray-400 uppercase text-xs">
                        Status:
                      </span>{" "}
                      <span className="font-semibold text-[#143D60]">
                        {property.status || "Available for Sale"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Luxury flat available in Gurgaon with modern amenities and excellent connectivity."}
                  </p>

                  <div className="flex-1"></div>

                  {/* BUTTONS */}

                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mt-5 gap-3">
                    
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      
                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-[#143D60] text-white px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#0f2c46] transition w-full sm:w-auto text-center font-medium shadow-sm"
                      >
                        Price on Call
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#143D60] text-[#143D60] px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#143D60] hover:text-white transition w-full sm:w-auto text-center font-medium"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* PAGINATION */}

          <div className="mt-12 sm:mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);

                const yOffset = -90;
                const y =
                  propertySectionRef.current.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            />
          </div>
        </div>

        {/* SIDEBAR (hidden on mobile) */}

        <div className="lg:col-span-1 sticky top-28 hidden lg:block">
          <SidebarEnquiryForm />
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