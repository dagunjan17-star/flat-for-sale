export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen 
    bg-gradient-to-b from-white to-[#e8f1f8]">

      <div className="flex flex-col items-center gap-6">

        {/* PREMIUM SPINNER */}
        <div className="relative flex items-center justify-center">

          {/* OUTER RING */}
          <div className="w-20 h-20 rounded-full border-4 border-[#143D60]/10"></div>

          {/* SPINNING RING */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-transparent 
          border-t-[#143D60] border-r-[#0f2c46] animate-spin"></div>

          {/* INNER PULSE */}
          <div className="absolute w-10 h-10 bg-[#143D60]/10 rounded-full animate-ping"></div>

          {/* CENTER DOT */}
          <div className="absolute w-4 h-4 bg-[#143D60] rounded-full shadow-lg"></div>

        </div>

        {/* TEXT */}
        <div className="text-center space-y-1">
          <p className="bg-gradient-to-r from-[#143D60] to-[#0f2c46] bg-clip-text text-transparent font-semibold tracking-wide">
            Loading Content
          </p>
          <p className="text-gray-500 text-sm animate-pulse">
            Please wait a moment...
          </p>
        </div>

      </div>

    </div>
  );
}