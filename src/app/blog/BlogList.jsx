"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const loading = false;
  const error = null;

  const blogs = [
    {
      _id: "1",
      Slug: "best-areas-to-buy-in-faridabad",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      },
      HeroAltText: "Best Areas to Buy in Faridabad",
      Category: "Buying Guide",
      Title: "Top Areas to Buy a Flat in Faridabad in 2024",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "how-to-choose-perfect-property",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      },
      HeroAltText: "How to Choose Property",
      Category: "Buying Tips",
      Title: "How to Choose the Perfect Property for Your Family",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "documents-required-before-buying-flat",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      },
      HeroAltText: "Documents Required Before Buying",
      Category: "Legal",
      Title: "Documents Required Before Buying a Flat in Haryana",
      Date: "2024-03-18",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-gradient-to-b from-white to-[#e8f1f8]">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Property Insights &{" "}
          <span className="text-[#143D60]">Faridabad Updates</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with property market trends, legal guidance, and expert advice
          to find the best flats for sale in Faridabad.
        </p>

        <div className="w-20 h-1 bg-[#143D60] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-[#143D60]/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#143D60] border-r-[#0f2c46] animate-spin"></div>
          </div>
        </div>
      )}

      {/* ===== ERROR ===== */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Unable to load blogs right now.
          </p>
        </div>
      )}

      {/* ===== BLOG GRID ===== */}
      {!loading && !error && blogs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.Slug}`}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#143D60]/10 transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={post.HeroImg?.url}
                  alt={post?.HeroAltText}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold bg-[#143D60]/10 text-[#143D60] px-3 py-1 rounded-full mb-3">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#143D60] transition-colors duration-300">
                  {post.Title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>

              </div>

            </Link>
          ))}

        </div>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          No blogs found.
        </div>
      )}

    </section>
  );
}