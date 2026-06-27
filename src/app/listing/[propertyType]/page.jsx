import PropertyTypePage from "./PropertyTypePage";

export async function generateMetadata({ params }) {
  const { propertyType } = await params;

  const formattedType = propertyType
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedType} Flats for Sale in Gurgaon | Verified Apartments`,

    description: `Explore verified ${formattedType} flats for sale in Gurgaon. Find affordable and luxury ${formattedType} apartments with modern amenities in prime locations including Sohna Road, Dwarka Expressway, Golf Course Road, and New Gurgaon.`,

    keywords: [
      `${formattedType} flats for sale in Gurgaon`,
      `buy ${formattedType} flat Gurgaon`,
      `${formattedType} apartments Gurgaon`,
      `${formattedType} property Gurgaon`,
      `Gurgaon flats for sale`,
      `verified flats Gurgaon`,
      `new launch flats Gurgaon`,
    ],

    alternates: {
      canonical: `https://www.flatsforsaleingurgaon.com/listing/${propertyType}`,
    },

    openGraph: {
      title: `${formattedType} Flats for Sale in Gurgaon | Verified Apartments`,
      description: `Browse verified ${formattedType} flats for sale in Gurgaon with the best prices and premium amenities.`,
      url: `https://www.flatsforsaleingurgaon.com/listing/${propertyType}`,
      siteName: "Flats for Sale in Gurgaon",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${formattedType} Flats for Sale in Gurgaon | Verified Apartments`,
      description: `Find verified ${formattedType} flats for sale in Gurgaon with the best deals.`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page(props) {
  return <PropertyTypePage {...props} />;
}