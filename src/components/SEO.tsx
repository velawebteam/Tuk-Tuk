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
  keywords = "Passeios Tavira, Tuktuk Tavira, Passeios Algarve, Tours Tavira, Passeios de Jipe Tavira, Passeios de Tuktuk Tavira, O que fazer em Tavira, Tavira Roots, Sotavento Algarvio",
  ogType = 'website', 
  ogImage = 'https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml',
  schemaData 
}: SEOProps) {
  const { i18n, t } = useTranslation();
  const siteName = 'Tavira Roots';
  const fullTitle = title?.includes?.(siteName) ? title : `${title} | ${siteName}`;
  const siteUrl = 'https://taviraroots.com';

  // Base Schema for Sitelinks & Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('nav.home'),
        "item": siteUrl
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
        "name": t('nav.tuk_tuk'),
        "url": `${siteUrl}/tuk-tuk`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": t('nav.jeep'),
        "url": `${siteUrl}/jipe`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": t('nav.about'),
        "url": `${siteUrl}/sobre-nos`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": t('nav.contact'),
        "url": `${siteUrl}/contactos`
      }
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: i18n.language ? i18n.language.split('-')[0] : 'pt' }}>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
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
          "alternateName": "Tavira Roots - Tours & Experiences",
          "description": "A Tavira Roots oferece os melhores passeios e tours privados de Tuk Tuk e Jipe em Tavira. Explore as salinas, o centro histórico e a Ria Formosa com guias locais.",
          "image": "https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml",
          "@id": "https://taviraroots.com",
          "url": "https://taviraroots.com",
          "telephone": "+351912345678",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tavira",
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
              "@type": "Region",
              "name": "Algarve",
              "sameAs": "https://en.wikipedia.org/wiki/Algarve"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Passeios em Tavira",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Passeios de Tuk Tuk Tavira"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Passeios de Jipe Tavira"
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

      {/* Sitelinks Searchbox Schema (Google only shows if deemed appropriate) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": siteUrl,
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
