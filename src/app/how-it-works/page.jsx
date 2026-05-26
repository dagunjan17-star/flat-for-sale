import GurgaonContentSimple from "./GurgaonContentSimple";
import GurgaonFAQ from "./GurgaonFAQ";
import GurgaonHero from "./GurgaonHero";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works – Find Flats for Sale in Gurgaon | No Broker, Verified Listings",

  description:
    "Confused about buying flats for sale in Gurgaon? See how our platform works – browse verified 2BHK & 3BHK apartments in Gurgaon, connect directly with owners, no broker, no commission. Ready to move & affordable flats in Gurgaon on Sohna Road, Dwarka Expressway & DLF Phase. Start now!",

  keywords: [
    "flats for sale in Gurgaon",
    "buy flats in Gurgaon",
    "apartments for sale Gurgaon",
    "property in Gurgaon",
    "Gurgaon real estate",
    "luxury flats Gurgaon",
    "ready to move flats Gurgaon",
    "new launch projects Gurgaon",
  ],
   alternates: {
    canonical: "https://www.flatsforsaleingurgaon.com/how-it-works",
  },
};

export default function Page() {
  return (
    <>
      <GurgaonHero />
      <GurgaonContentSimple />
      <GurgaonFAQ />
    </>
  );
}