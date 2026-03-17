"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Your enquiry for Gurgaon property has been submitted!");
        setFormData({ name: "", phone: "", message: "" });
        onClose();
      } else {
        alert("Something went wrong!");
      }

    } catch (err) {
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-200">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#143D60] text-xl transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-semibold text-[#143D60]">
          Schedule Site Visit
        </h3>

        <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
          Enquiry for property in Gurgaon:
          <span className="block font-medium text-gray-900 mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-[#143D60] focus:border-[#143D60]
            outline-none transition placeholder:text-gray-500"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-[#143D60] focus:border-[#143D60]
            outline-none transition placeholder:text-gray-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Budget / BHK / Preferred Gurgaon Sector"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-[#143D60] focus:border-[#143D60]
            outline-none resize-none transition placeholder:text-gray-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#143D60] hover:bg-[#0f2c46]
            text-white font-semibold
            rounded-tl-xl rounded-br-xl
            transition shadow-md disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Submitting..." : "Get Property Details"}
          </button>

        </form>

      </div>
    </div>
  );
}