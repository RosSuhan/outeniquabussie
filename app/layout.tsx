import type { Metadata } from "next";
import "@/css/globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Script from "next/script";


export const metadata: Metadata = {
  metadataBase: new URL("https://outeniquacharterservices.co.za"),
  title: {
    template: "%s | Outeniqua Charter Services",
    default: "Garden Route Shuttle Services | Outeniqua Charter Services"
  },
  description:
    "Reliable, safe and affordable shuttle services across the Garden Route. Daily transfers between Cape Town, George, Mossel Bay, Knysna and Plettenberg Bay.",
  keywords: [
    "Garden Route shuttle",
    "George shuttle service",
    "Cape Town to George shuttle",
    "George to Plettenberg Bay transport",
    "airport transfers George",
    "Outeniqua charter services"
  ],
  openGraph: {
    type: "website",
    url: "https://outeniquacharterservices.co.za",
    title: "Garden Route Shuttle Services | Outeniqua Charter Services",
    description:
      "Professional, safe and scenic shuttle services along the Garden Route — Cape Town, Mossel Bay, George, Knysna & Plettenberg Bay.",
    siteName: "Outeniqua Charter Services",
    images: [
      {
        url: "https://outeniquacharterservices.co.za/assets/Logo.jpeg",
        width: 800,
        height: 800,
        alt: "Outeniqua Charter Services Logo"
      }
    ],
    locale: "en_ZA"
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Route Shuttle Services | Outeniqua Charter Services",
    description:
      "Affordable and reliable shuttle transport across the Garden Route.",
    images: ["https://outeniquacharterservices.co.za/assets/Logo.jpeg"]
  },
  alternates: {
    canonical: "https://outeniquacharterservices.co.za"
  },
  robots: {
    index: true,
    follow: true
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* ⭐ Google Tag Manager – HEAD Script */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJQ5JHNW');
          `,
        }}
      />

{/* <!-- Event snippet for Page view conversion page --> */}
      <Script
        id="ga-page"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: `
            gtag('event', 'conversion', {'send_to': 'AW-11196953099/TYw3CLeljJwaEIvkj9sp'});
          `}}
      />

      {/* <!-- Event snippet for Page view conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. --> */}
      <Script
        id="ga-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11196953099/TYw3CLeljJwaEIvkj9sp',
                'event_callback': callback
            });
            return false;
          }`
        }}
      />


      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Outeniqua Charter Services",
            alternateName: "Outeniqua Bussie",
            url: "https://outeniquacharterservices.co.za",
            image: "https://outeniquacharterservices.co.za/assets/Logo.jpeg",
            description:
              "Reliable and safe shuttle services along the Garden Route. Transfers between Cape Town, George, Mossel Bay, Knysna & Plettenberg Bay.",
            telephone: "+27607268993",
            priceRange: "R80 - R590",
            areaServed: [
              "Cape Town",
              "Swellendam",
              "Ashton",
              "Riversdal",
              "Heidelberg",
              "Albertinia",
              "Mossel Bay",
              "George",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "70 Knysna Road",
              addressLocality: "George",
              addressRegion: "Western Cape",
              postalCode: "6529",
              addressCountry: "ZA"
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61583110751555"
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "09:00",
                closes: "17:00"
              }
            ],
            serviceType: [
              "Shuttle Service",
              "Point-to-Point Transport",
              "Group Transport",
            ]
          })
        }}
      />

      </head>
      <body >
        {/* ⭐ Google Tag Manager – BODY noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJQ5JHNW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
