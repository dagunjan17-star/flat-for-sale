import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawArea = resolvedParams?.area;

  const area = rawArea?.replace("flat-for-sale-in-", "");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const locationName = formattedArea || "Faridabad";

  return {
    title: `Flats for Sale in ${locationName} | Buy Property in ${locationName}`,

    description: `Explore flats for sale in ${locationName}. Find affordable and luxury apartments, residential properties, and homes with modern amenities in prime locations of ${locationName}.`,

    alternates: {
      canonical: `https://www.flatsforrentingurgaon.com/${rawArea}`,
    },
  };
}
export default async function Page({ params }) {
  const resolvedParams = await params;
   const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("flat-for-sale-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-[#F4F8FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        {/* 🔥 DYNAMIC HEADING */}
        <div className=" mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
           Flats For Sale in{" "}
            <span className="text-gray-800">
              {formattedArea || "Faridabad"}
            </span>
          </h1>

          <p className="text-gray-600 mt-3">
            Residential properties in prime business locations.
          </p>

          <div className="w-20 h-1 bg-[#F4F8FB] mt-6 rounded-full"></div>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-6">
  <FilterProperties area={area} />

  {/* Only show Properties if area not selected */}
   {/* <Proprtes /> */}
</div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <SidebarEnquiryForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}