import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Blog – Flats for Sale in Gurgaon | Price Trends, Buying Guide & Investment Tips",
    description:
      "Read expert blogs on flats for sale in Gurgaon – property price trends, flat buying guide, investment tips & top locations. Stay updated on 2BHK, 3BHK & luxury apartments in Gurgaon across Sohna Road, Dwarka Expressway & Golf Course Road. Your Gurgaon real estate knowledge hub!",
    keywords: [
     "flats for sale in Gurgaon", "apartments for sale in Gurgaon", "flat for sale in Gurgaon", "buy flat in Gurgaon", "property for sale in Gurgaon", "2 BHK flats for sale in Gurgaon", "3 BHK flats for sale in Gurgaon", "1 BHK flats for sale in Gurgaon", "2 BHK apartments in Gurgaon", "3 BHK apartments in Gurgaon", "affordable 2 BHK flats in Gurgaon", "luxury 3 BHK flats in Gurgaon", "flats for sale in Dwarka Expressway Gurgaon", "flats for sale in Sohna Road Gurgaon", "flats for sale in Golf Course Road Gurgaon", "flats for sale in Golf Course Extension Road Gurgaon", "flats for sale in DLF Phase 1 Gurgaon", "flats for sale in DLF Phase 2 Gurgaon", "flats for sale in DLF Phase 3 Gurgaon", "flats for sale in DLF Phase 4 Gurgaon", "flats for sale in DLF Phase 5 Gurgaon", "flats for sale in New Gurgaon", "flats for sale in Sector 57 Gurgaon", "flats for sale in Sector 65 Gurgaon", "flats for sale in Sector 67 Gurgaon", "flats for sale in Sector 83 Gurgaon", "flats for sale in Sector 102 Gurgaon", "flats for sale in Sector 104 Gurgaon", "flats near Delhi Gurgaon", "ready to move flats in Gurgaon", "new launch flats in Gurgaon", "under construction flats in Gurgaon", "resale flats in Gurgaon", "RERA approved flats in Gurgaon", "verified flats in Gurgaon", "no broker flats in Gurgaon", "flats for sale by owner in Gurgaon", "affordable flats in Gurgaon", "flats in Gurgaon under 50 lakhs", "flats in Gurgaon under 1 crore", "luxury flats in Gurgaon", "premium apartments in Gurgaon", "builder floor for sale in Gurgaon", "penthouse for sale in Gurgaon", "studio apartment for sale in Gurgaon", "new projects in Gurgaon", "residential property in Gurgaon", "property investment in Gurgaon", "Gurgaon real estate"
    ],
    alternates: {
      canonical: "https://flatsforsaleingurgaon.com/blog", // 🔥 final domain set
    },
  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f1f8]">
      <BlogList />
    </div>
  );
};

export default Page;