"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function PropertyTypePage() {

  const { propertyType } = useParams();

  const {
    properties,
    loading3,
    error3,
    fetchPropertiesByType,
    page,
    totalPages
  } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertySectionRef = useRef(null);

  /* ================= FETCH BY TYPE ================= */

  useEffect(() => {
    if (propertyType) {
      fetchPropertiesByType(`${propertyType} BHK`, 1);
    }
  }, [propertyType]);

  useEffect(() => {
    if (!loading3 && properties.length > 0) {
      propertySectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [properties]);

  /* ================= LOADING ================= */

  if (loading3) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#e8f1f8]">

        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#143D60]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#143D60] border-r-[#0f2c46] animate-spin"></div>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading {propertyType} BHK Listings...
        </p>

      </div>
    );
  }

  if (error3) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">

        <h2 className="text-2xl font-semibold text-[#143D60]">
          No {propertyType} BHK Flats Available in Gurgaon
        </h2>

        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>

      </div>
    );
  }

  return (

    <section
      id="propertyTop"
      ref={propertySectionRef}
      className="bg-[#F5F7FA] px-4 py-16"
    >

      {/* HEADING */}

      <div className="max-w-7xl mx-auto mb-12">

        <h1 className="text-3xl md:text-4xl font-bold text-[#143D60]">
          {propertyType} BHK Flats for Sale in Gurgaon
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Discover premium {propertyType} BHK flats available in prime Gurgaon
          sectors including Golf Course Road, Dwarka Expressway, Sohna Road
          and New Gurgaon.
        </p>

        <div className="w-20 h-1 bg-[#143D60] mt-6 rounded-full"></div>

        <div className="mt-8">
          <BHKFilterButtons />
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-8">

          {properties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden md:h-[250px]"
            >

              <div className="flex flex-col md:flex-row h-full">

                {/* IMAGE */}

                <div className="relative md:w-[35%]">

                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
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

                {/* DETAILS */}

                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-[#143D60]">
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

                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs">
                        Type:
                      </span>

                      <span className="font-semibold text-[#143D60]">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300"></div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs">
                        Status:
                      </span>

                      <span className="font-semibold text-[#143D60]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  {/* <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                    {property.description ||
                      "Luxury flat available in Gurgaon with modern amenities and excellent connectivity."}
                  </p> */}

                  <div className="flex-1"></div>

                  {/* PRICE + BUTTONS */}

                  <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                    {/* <p className="text-2xl font-bold text-[#143D60]">
                      Price On Call
                    </p> */}

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-[#143D60] text-white px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#0f2c46] transition cursor-pointer"
                      >
                        Price On Call
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#143D60] text-[#143D60] px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#143D60] hover:text-white transition text-center"
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

          <div className="mt-16">

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                fetchPropertiesByType(`${propertyType} BHK`, newPage);
              }}
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="lg:col-span-1 sticky top-28">
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