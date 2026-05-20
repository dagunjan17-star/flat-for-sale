"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the average price of a flat for sale in Gurgaon?",
    answer:
      "Average flat prices in Gurgaon range from ₹40 lakh for a 1BHK in affordable sectors to ₹3-15 crore for luxury apartments on Golf Course Road or in DLF projects. Prices vary by locality, size, and project reputation.",
  },
  {
    question: "Which are the top localities to buy a flat in Gurgaon?",
    answer:
      "Top localities include DLF Phase 1-5, Golf Course Road, Golf Course Extension Road, Sohna Road, Dwarka Expressway (Sectors 99-115), New Gurgaon (Sectors 82-95), and Palam Vihar.",
  },
  {
    question: "Is buying a flat in Gurgaon a good investment in 2025?",
    answer:
      "Yes, Gurgaon real estate has consistently appreciated over the years. The city's growing corporate ecosystem, infrastructure projects, and high rental demand make flat investments highly lucrative with 8-12% annual returns in many areas.",
  },
  {
    question: "Are there RERA-registered flats available for sale in Gurgaon?",
    answer:
      "Yes, all new residential projects in Gurgaon must be RERA-registered under HRERA (Haryana Real Estate Regulatory Authority). Always verify RERA registration before booking any flat.",
  },
  {
    question: "What is the stamp duty for buying a flat in Gurgaon?",
    answer:
      "In Haryana, women homebuyers pay 5% stamp duty while men pay 7%. There are also concessional rates for properties below ₹30 lakh. Registration charges are typically 0.5-1% of the property value.",
  },
  {
    question: "Can NRIs buy flats in Gurgaon?",
    answer:
      "Yes, NRIs can legally buy residential flats in Gurgaon under FEMA guidelines without any special RBI permission. Many developers offer NRI-friendly payment plans and dedicated relationship managers.",
  },
  {
    question: "What home loan options are available for buying a flat in Gurgaon?",
    answer:
      "All major banks including SBI, HDFC, ICICI, Axis, and Kotak offer competitive home loans for Gurgaon properties. LTVs go up to 90% for eligible borrowers, and current rates range from 8.5% to 9.5% per annum.",
  },
  {
    question: "Are there under-construction flats for sale in Gurgaon?",
    answer:
      "Yes, Gurgaon has numerous under-construction projects offering competitive pre-launch prices. However, verify RERA status, builder track record, and project completion timelines before investing.",
  },
  {
    question: "What amenities do residential flat projects in Gurgaon typically offer?",
    answer:
      "Most premium flat projects in Gurgaon offer clubhouse, swimming pool, gymnasium, landscaped gardens, children's play area, 24/7 security, power backup, and covered parking as standard amenities.",
  },
  {
    question: "How long does property registration take in Gurgaon?",
    answer:
      "Property registration in Gurgaon is typically completed on the same day at the Sub-Registrar's office after all dues are cleared. You need to book an appointment online through the Haryana government portal.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#143D60]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#143D60]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#143D60]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#143D60]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#143D60]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
         The market for flats for sale in Gurgaon has witnessed consistent growth over the past two decades, cementing the city's position as one of India's premier residential real estate destinations. Strategically located adjacent to Delhi and connected via NH-48, Dwarka Expressway, and the Southern Peripheral Road, Gurgaon attracts homebuyers from across the country. Real estate prices for flats range from ₹35 lakh for compact 1BHK units in affordable micro-markets to ₹15 crore and above for signature luxury apartments in ultra-premium zones. Key micro-markets for buying flats include Golf Course Road, Golf Course Extension Road, DLF Cyber City vicinity, New Gurgaon (Sectors 82-95), and Sohna Road. Leading developers such as DLF, Emaar India, M3M, Godrej Properties, and Sobha have delivered iconic residential projects that define Gurgaon's skyline. The city's real estate market is bolstered by robust end-user demand from the corporate sector, a growing NRI buyer base, and strong infrastructure investment by the Haryana government. RERA registration of all major projects provides transparency and builds homebuyer confidence. Gurgaon's flat market is the right place to buy, live, and grow your wealth.
        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#143D60]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#143D60]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#143D60]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#143D60] rotate-180"
                      : "bg-[#143D60]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#143D60]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#143D60]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
  );
}