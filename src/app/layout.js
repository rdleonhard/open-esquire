import "./globals.css";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://www.openesquire.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Open Esquire — Technology & blockchain counsel",
    template: "%s · Open Esquire",
  },
  description:
    "Attorney-led counsel for founders and operators: contracts, Web3, and compliance-aware strategy—clear, precise, and built to ship.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Open Esquire",
    title: "Open Esquire — Technology & blockchain counsel",
    description:
      "Attorney-led counsel for founders and operators: contracts, Web3, and compliance-aware strategy—clear, precise, and built to ship.",
    images: [
      {
        url: "/images/elegant_logo.webp",
        width: 900,
        height: 900,
        alt: "Open Esquire",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Open Esquire — Technology & blockchain counsel",
    description:
      "Attorney-led counsel for founders and operators: contracts, Web3, and compliance-aware strategy.",
    images: ["/images/elegant_logo.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={[sans.variable, serif.variable, mono.variable].join(" ")}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-stone-50 text-slate-900">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
