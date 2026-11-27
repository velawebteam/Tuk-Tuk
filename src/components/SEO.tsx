import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: object;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  keywords = "Tours Tavira, Tavira Tours, TukTuk Tavira, Jeep Tavira, Jipe Tavira, Tours Algarve, Algarve Tours, Private Tours Tavira, Tavira Roots",
  ogType = 'website', 
  ogImage = 'https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml',
  schemaData 
}: SEOProps) {
  useLayoutEffect(() => {
    document.querySelectorAll('[data-static-seo="true"]').forEach((el) => el.remove());
  }, []);
  const { i18n, t } = useTranslation();
  const siteName = 'Tavira Roots';
  const fullTitle = title?.includes?.(siteName) ? title : `${title} | ${siteName}`;
  const siteUrl = 'https://taviraroots.com';
  const canonicalUrl = canonical && canonical !== '/' ? `${siteUrl}${canonical}` : `${siteUrl}/`;

  const langCode = i18n.language ? i18n.language.split('-')[0] : 'en';
  const ogLocale = langCode === 'pt' ? 'pt_PT' : langCode === 'fr' ? 'fr_FR' : 'en_US';
  const altLocales = ['en_US', 'pt_PT', 'fr_FR'].filter(l => l !== ogLocale);

  // Base Schema for Sitelinks & Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('nav.home'),
        "item": `${siteUrl}/`
      }
    ]
  };

  if (canonical && canonical !== '/') {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": title,
      "item": `${siteUrl}${canonical}`
    });
  }

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Navegação Principal",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": `TukTuk Tavira - ${t('nav.tuk_tuk')}`,
        "url": `${siteUrl}/tuk-tuk`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": `Jeep & Jipe Tavira - ${t('nav.jeep')}`,
        "url": `${siteUrl}/jipe`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": `Walking Tours Tavira - ${t('nav.walking_tours')}`,
        "url": `${siteUrl}/walking-tours`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": t('nav.about'),
        "url": `${siteUrl}/sobre-nos`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": t('nav.contact'),
        "url": `${siteUrl}/contactos`
      }
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: langCode }}>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      {altLocales.map((loc) => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* GEO Tags for Local SEO */}
      <meta name="geo.region" content="PT-08" />
      <meta name="geo.placename" content="Tavira, Algarve, Portugal" />
      <meta name="geo.position" content="37.1268;-7.6499" />
      <meta name="ICBM" content="37.1268, -7.6499" />

      {/* Breadcrumbs Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Navigation Schema */}
      <script type="application/ld+json">
        {JSON.stringify(navigationSchema)}
      </script>

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}

      {/* Global TravelAgency & LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Tavira Roots",
          "alternateName": ["Tavira Roots by Maria's Tuk Tuk", "Tavira Tours", "TukTuk Tavira", "Jeep & Jipe Tavira"],
          "description": t('seo.home_desc'),
          "keywords": "Tours Tavira, Tavira Tours, TukTuk Tavira, Jeep Tavira, Jipe Tavira, Tours Algarve, Algarve Tours, Private Tours Tavira",
          "knowsAbout": [
            "Tavira Tours",
            "Tours Tavira",
            "TukTuk Tavira",
            "Jeep Tavira",
            "Jipe Tavira",
            "Algarve Tours",
            "Tours Algarve",
            "Ria Formosa Natural Park",
            "Private Guided Tours in Eastern Algarve"
          ],
          "image": "https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml",
          "@id": "https://taviraroots.com/#travelagency",
          "url": "https://taviraroots.com/",
          "telephone": "+351968995275",
          "email": "info@mariastuktuk.com",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Gonçalo Velho 7",
            "addressLocality": "Tavira",
            "postalCode": "8800-349",
            "addressRegion": "Algarve",
            "addressCountry": "PT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.1268,
            "longitude": -7.6499
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "203",
            "bestRating": "5",
            "worstRating": "1"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Tavira",
              "sameAs": "https://en.wikipedia.org/wiki/Tavira"
            },
            {
              "@type": "City",
              "name": "Santa Luzia",
              "sameAs": "https://en.wikipedia.org/wiki/Santa_Luzia_(Tavira)"
            },
            {
              "@type": "City",
              "name": "Cabanas de Tavira"
            },
            {
              "@type": "Place",
              "name": "Cacela Velha"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Algarve",
              "sameAs": "https://en.wikipedia.org/wiki/Algarve"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tavira Tours & Algarve Tours",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "TukTuk Tavira - Private Tuk Tuk Tours",
                  "url": `${siteUrl}/tuk-tuk`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Jeep & Jipe Tavira - 4x4 Algarve Tours",
                  "url": `${siteUrl}/jipe`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tavira Walking Tours",
                  "url": `${siteUrl}/walking-tours`
                }
              }
            ]
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
            "https://www.facebook.com/mariastuktuk",
            "https://www.instagram.com/mariastuktuk",
            "https://www.tripadvisor.pt/Attraction_Review-g189121-d25089311-Reviews-Tavira_Roots-Tavira_Faro_District_Algarve.html"
          ]
        })}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "name": "Tavira Roots",
          "alternateName": ["Tavira Tours", "Tours Tavira", "TukTuk Tavira", "Jeep & Jipe Tavira", "Algarve Tours"],
          "url": `${siteUrl}/`,
          "inLanguage": ["en", "pt", "fr"],
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/faqs?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}
