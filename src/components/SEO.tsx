import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: object;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://taviraroots.com/og-image.jpg', // Placeholder
  schemaData 
}: SEOProps) {
  const siteName = 'Tavira Roots';
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = 'https://taviraroots.com'; // Change to actual domain when known

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical ? `${siteUrl}${canonical}` : siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* GEO Tags for Local SEO */}
      <meta name="geo.region" content="PT-08" />
      <meta name="geo.placename" content="Tavira" />
      <meta name="geo.position" content="37.1268;-7.6499" />
      <meta name="ICBM" content="37.1268, -7.6499" />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}

      {/* Global LocalBusiness Schema (Always present) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tavira Roots",
          "image": "https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml",
          "@id": "https://taviraroots.com",
          "url": "https://taviraroots.com",
          "telephone": "+351912345678", // Example
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tavira Center",
            "addressLocality": "Tavira",
            "postalCode": "8800",
            "addressRegion": "Algarve",
            "addressCountry": "PT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.1268,
            "longitude": -7.6499
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.facebook.com/taviraroots",
            "https://www.instagram.com/taviraroots"
          ]
        })}
      </script>
    </Helmet>
  );
}
