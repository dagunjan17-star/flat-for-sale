"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";

export default function AlertPopup({
  open,
  type = "success",
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">

      {/* Popup */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[34px] bg-white shadow-[0_25px_90px_rgba(15,44,70,0.35)] animate-popup">

        {/* Premium Top Glow */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0f2c46] via-[#17486f] to-[#2b6da0]" />

        {/* Decorative Blur */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#0f2c46]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#2b6da0]/10 blur-3xl"></div>

        <div className="relative p-8">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#0f2c46]/10 bg-[#0f2c46]/5 text-[#0f2c46] transition-all duration-300 hover:bg-[#0f2c46] hover:text-white hover:rotate-90 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Icon */}
          <div className="flex justify-center">
            <div
              className={`relative flex h-28 w-28 items-center justify-center rounded-full ${
                type === "success"
                  ? "bg-gradient-to-br from-[#0f2c46]/10 via-[#17486f]/10 to-[#2b6da0]/20"
                  : "bg-gradient-to-br from-red-100 to-red-200"
              }`}
            >

              {/* Animated Glow */}
              <div
                className={`absolute inset-3 rounded-full blur-2xl opacity-40 ${
                  type === "success"
                    ? "bg-[#2b6da0]"
                    : "bg-red-500"
                }`}
              />

              {type === "success" ? (
                <CheckCircle2
                  size={58}
                  className="relative text-[#0f2c46]"
                />
              ) : (
                <XCircle
                  size={58}
                  className="relative text-red-600"
                />
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-7 text-center text-3xl font-black tracking-wide text-[#0f2c46]">
            {type === "success" ? "Success!" : "Error!"}
          </h2>

          {/* Message */}
          <p className="mt-4 text-center text-[16px] leading-7 text-gray-600">
            {message}
          </p>

          {/* Divider */}
          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#0f2c46]/20 to-transparent"></div>

          {/* Button */}
          <button
            onClick={onClose}
            className={`mt-7 w-full rounded-2xl py-4 text-[16px] font-bold tracking-wide text-white shadow-[0_10px_30px_rgba(15,44,70,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer ${
              type === "success"
                ? "bg-gradient-to-r from-[#0f2c46] via-[#17486f] to-[#2b6da0]"
                : "bg-gradient-to-r from-red-600 to-red-700"
            }`}
          >
            OK, GOT IT
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupAnimation 0.4s ease;
        }

        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}