"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#e8f1f8] px-4 py-20">
      <div className="max-w-7xl mx-auto">
<div className="py-5 ">
        <Breadcrumb/>
       </div>
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#143D60]">
                Flats for Sale in Gurgaon
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              Looking for 1BHK, 2BHK, 3BHK or luxury flats in Gurgaon?
              Our platform brings together verified property listings,
              new launches, ready-to-move apartments and premium builder
              projects across the most sought-after sectors of Gurgaon.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/"
                className="bg-[#143D60] text-white px-6 py-3
                rounded-tl-xl rounded-br-xl
                font-medium hover:bg-[#0f2c46] transition shadow-md"
              >
                Browse All Flats
              </Link>

              <Link
                href="/contact"
                className="border border-[#143D60] text-[#143D60]
                px-6 py-3 rounded-tl-xl rounded-br-xl
                font-medium hover:bg-[#143D60] hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Flats for Sale in Gurgaon"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

        </div>


        {/* OUR MISSION */}

        <div className="mb-28 max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Gurgaon is one of the fastest growing real estate destinations
            in India, known for world-class infrastructure, global
            corporate offices, and luxury residential developments.
            Our mission is to simplify the process of buying flats in
            Gurgaon by providing one trusted platform where buyers,
            investors and families can explore the best available
            property options.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            From affordable 1BHK apartments in emerging sectors to
            spacious 3BHK and luxury residences on Golf Course Road,
            Sohna Road, Dwarka Expressway and New Gurgaon — we cover
            every flat type, every budget and every major locality
            so buyers can confidently choose their next home.
          </p>

        </div>


        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#143D60]/10 text-center">
            <h3 className="text-4xl font-bold text-[#143D60]">
              2500+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Flats Listed in Gurgaon
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#143D60]/10 text-center">
            <h3 className="text-4xl font-bold text-[#143D60]">
              350+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Builder Projects & New Launches
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#143D60]/10 text-center">
            <h3 className="text-4xl font-bold text-[#143D60]">
              5000+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Buyers & Investors Served
            </p>
          </div>

        </div>


        {/* WHY CHOOSE US */}

        <div className="mb-28">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#143D60]/10">
              <h3 className="font-semibold text-lg text-[#143D60] mb-3">
                Verified Gurgaon Listings
              </h3>
              <p className="text-gray-600 text-sm">
                Every property listing is carefully verified so buyers
                can confidently explore genuine flats across Gurgaon
                without worrying about unreliable listings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#143D60]/10">
              <h3 className="font-semibold text-lg text-[#143D60] mb-3">
                New Launch & Ready-to-Move
              </h3>
              <p className="text-gray-600 text-sm">
                Whether you want to invest early in a new launch
                project or move into a ready apartment immediately,
                our platform gives you both options in Gurgaon.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#143D60]/10">
              <h3 className="font-semibold text-lg text-[#143D60] mb-3">
                Trusted Property Experts
              </h3>
              <p className="text-gray-600 text-sm">
                Our experienced property consultants help buyers
                choose the right flat based on budget, location,
                connectivity and long-term investment potential.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="bg-[#143D60] text-white rounded-3xl p-16 text-center shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Explore the Best Flats for Sale in Gurgaon
          </h2>

          <p className="text-[#d6e4f0] mb-8 max-w-3xl mx-auto leading-relaxed">
            Browse verified listings across Gurgaon’s top sectors
            including Golf Course Road, Sohna Road, Dwarka Expressway
            and New Gurgaon to find the perfect home for your family
            or the right property investment.
          </p>

          {/* <Link
            href="/"
            className="bg-white text-[#143D60]
            font-semibold px-8 py-3
            rounded-tl-xl rounded-br-xl
            hover:bg-gray-100 transition"
          >
            Browse All Flats
          </Link> */}

        </div>

      </div>
    </section>
  );
}