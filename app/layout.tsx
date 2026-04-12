import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { FirebaseAnalytics } from "@/components/firebase-analytics";
import "./globals.css";

// The root layout centralizes typography, metadata and the global visual shell.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "John Heshima | Fullstack Developer",
    template: "%s | John Heshima",
  },
  description:
    "Portfolio premium de John Heshima, développeur fullstack, backend engineer et machine learning engineer basé à Kinshasa.",
  keywords: [
    "John Heshima",
    "fullstack developer",
    "backend engineer",
    "Next.js portfolio",
    "Node.js",
    "machine learning engineer",
    "Kinshasa developer",
  ],
  openGraph: {
    title: "John Heshima | Fullstack Developer",
    description:
      "Applications web, backend Node, machine learning et cloud avec une exécution d’ingénieur.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Heshima | Fullstack Developer",
    description:
      "Portfolio premium de John Heshima, développeur fullstack orienté backend, cloud et ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${sora.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
