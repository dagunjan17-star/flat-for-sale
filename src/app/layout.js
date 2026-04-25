import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "Flats for Sale in Gurgaon | 2BHK, 3BHK Luxury Apartments – No Broker",

description:
"Find verified flats for sale in Gurgaon – affordable 2BHK & 3BHK flats, luxury apartments & ready to move flats in Gurgaon. Best deals on flats in DLF Phase, Golf Course Road, Dwarka Expressway & Sohna Road. Direct owner, no broker. Book your Gurgaon flat today!",

keywords: [
"flats for sale in Gurgaon", "apartments for sale in Gurgaon", "flat for sale in Gurgaon", "buy flat in Gurgaon", "property for sale in Gurgaon", "2 BHK flats for sale in Gurgaon", "3 BHK flats for sale in Gurgaon", "1 BHK flats for sale in Gurgaon", "2 BHK apartments in Gurgaon", "3 BHK apartments in Gurgaon", "affordable 2 BHK flats in Gurgaon", "luxury 3 BHK flats in Gurgaon", "flats for sale in Dwarka Expressway Gurgaon", "flats for sale in Sohna Road Gurgaon", "flats for sale in Golf Course Road Gurgaon", "flats for sale in Golf Course Extension Road Gurgaon", "flats for sale in DLF Phase 1 Gurgaon", "flats for sale in DLF Phase 2 Gurgaon", "flats for sale in DLF Phase 3 Gurgaon", "flats for sale in DLF Phase 4 Gurgaon", "flats for sale in DLF Phase 5 Gurgaon", "flats for sale in New Gurgaon", "flats for sale in Sector 57 Gurgaon", "flats for sale in Sector 65 Gurgaon", "flats for sale in Sector 67 Gurgaon", "flats for sale in Sector 83 Gurgaon", "flats for sale in Sector 102 Gurgaon", "flats for sale in Sector 104 Gurgaon", "flats near Delhi Gurgaon", "ready to move flats in Gurgaon", "new launch flats in Gurgaon", "under construction flats in Gurgaon", "resale flats in Gurgaon", "RERA approved flats in Gurgaon", "verified flats in Gurgaon", "no broker flats in Gurgaon", "flats for sale by owner in Gurgaon", "affordable flats in Gurgaon", "flats in Gurgaon under 50 lakhs", "flats in Gurgaon under 1 crore", "luxury flats in Gurgaon", "premium apartments in Gurgaon", "builder floor for sale in Gurgaon", "penthouse for sale in Gurgaon", "studio apartment for sale in Gurgaon", "new projects in Gurgaon", "residential property in Gurgaon", "property investment in Gurgaon", "Gurgaon real estate"
],

  alternates: {
    canonical: "https://www.flatsforsaleingurgaon.com/",
  },
  verification: {
    google: "iDxVCMmss-pz0J1PsSskRzH8_W1RHP7zfvuo5bqHRfw",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PK5XHKZN');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X64DBTE5HF"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X64DBTE5HF');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PK5XHKZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}