import type { Metadata, Viewport } from "next";
import { Figtree, Syne } from "next/font/google";
import { company } from "@/lib/contacts";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdtoalhas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Aluguel de Toalhas para Eventos no RJ`,
    template: `%s | ${company.name}`,
  },
  description:
    "Aluguel de toalhas para casamentos, festas de 15 anos e eventos corporativos no Rio de Janeiro. +30 anos no mercado. Orçamento rápido no WhatsApp com Maureci e Devanilda.",
  keywords: [
    "aluguel de toalhas RJ",
    "aluguel de toalhas para casamento",
    "toalhas para festa de 15",
    "toalhas para eventos corporativos",
    "locação de toalhas de mesa Rio de Janeiro",
    "MD Aluguel de Toalhas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Aluguel de Toalhas para Eventos no RJ`,
    description:
      "Toalhas elegantes para casamentos, festas de 15 e eventos empresariais. Atendimento comercial no WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Aluguel de Toalhas para Eventos no RJ`,
    description:
      "Toalhas elegantes para casamentos, festas de 15 e eventos empresariais no Rio de Janeiro.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a292e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Aluguel de toalhas de mesa para casamentos, festas de 15 anos e eventos corporativos no Rio de Janeiro.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rio de Janeiro",
    },
    telephone: ["+5521989810370", "+5521988468554"],
    url: siteUrl,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };

  return (
    <html lang="pt-BR" className={`${syne.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
