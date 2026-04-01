"use client";

import { useState } from "react";

export default function GurgaonFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "1. What are the best areas to buy flats for sale in Gurgaon?",
      a: "Popular areas include Sohna Road, Dwarka Expressway, and Golf Course Extension. These locations offer good connectivity and modern projects. Many new projects in Gurgaon are also coming up here.",
    },
    {
      q: "2. Are there affordable flats in Gurgaon?",
      a: "Yes, there are many affordable housing Gurgaon options. These are budget-friendly and suitable for first-time buyers.",
    },
    {
      q: "3. How can I find verified flats in Gurgaon?",
      a: "Use a trusted platform that shows verified listings. Our platform ensures all flats for sale in Gurgaon are real and updated.",
    },
    {
      q: "4. Is Gurgaon good for property investment?",
      a: "Yes, property investment in Gurgaon is a good choice due to high demand, infrastructure growth, and job opportunities.",
    },
    {
      q: "5. What types of flats are available in Gurgaon?",
      a: "You can find 1 BHK flats in Gurgaon, 2 BHK flats in Gurgaon, and 3 BHK flats in Gurgaon, along with luxury options.",
    },
    {
      q: "6. Can I contact the seller directly?",
      a: "Yes, our platform allows direct buyer-seller interaction. This removes brokers and saves money.",
    },
    {
      q: "7. Is listing property free on your platform?",
      a: "Yes, we provide free property listing for sellers. This helps them reach more buyers easily.",
    },
    {
      q: "8. What documents are needed to buy a flat?",
      a: "You need ID proof, property papers, agreement, and payment details. Always verify documents before buying.",
    },
    {
      q: "9. Are ready to move flats available in Gurgaon?",
      a: "Yes, many ready to move flats in Gurgaon are available. These are good for immediate living.",
    },
    {
      q: "10. How does your platform help buyers?",
      a: "It shows all residential properties in Gurgaon in one place, offers verified listings, and allows direct communication with sellers",
    },
  ];

  return (
    <section className="bg-[#F4F8FB] text-[#143D60] py-3 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-3">

        <h2 className="text-3xl font-bold ">FAQs</h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-[#e2eef6]"
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold"
            >
              {faq.q}
              <span className="text-lg">
                {open === i ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            {open === i && (
              <div className="px-5 pb-4 text-[#2c5a7d]">
                {faq.a}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}