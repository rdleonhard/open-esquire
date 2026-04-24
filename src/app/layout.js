import "./globals.css";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "Open Esquire — Technology & blockchain counsel",
    template: "%s · Open Esquire",
  },
  description:
    "Attorney-led counsel for founders and operators: contracts, Web3, and compliance-aware strategy—clear, precise, and built to ship.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={[sans.variable, serif.variable, mono.variable].join(" ")}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="min-h-screen bg-sand-50 text-slate-900">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
