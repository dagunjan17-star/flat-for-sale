import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Flats for Sale in Gurgaon Blogs | Price Trends, Buying Guide & Investment Tips",
    description:
      "Explore blogs on flats for sale in Gurgaon. Get expert insights on pricing, best locations, investment opportunities and home buying guides in Gurgaon.",
    keywords: [
      "flats for sale in Gurgaon",
      "buy flat Gurgaon",
      "Gurgaon property investment",
      "flat price trends Gurgaon",
      "best areas in Gurgaon for flats",
      "Gurgaon real estate blogs"
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