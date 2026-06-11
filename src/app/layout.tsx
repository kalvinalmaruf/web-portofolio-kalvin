import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio Kalvin Al Ma'ruf",
    template: "%s | Kalvin Al Ma'ruf",
  },
  description:
    "Portofolio pribadi Kalvin Al Ma'ruf, lulusan Informatika yang berfokus pada pengembangan website modern, aplikasi digital, dan sistem informasi.",
  keywords: [
    "Kalvin Al Ma'ruf",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Sistem Informasi",
    "Informatika",
  ],
  authors: [{ name: "Kalvin Al Ma'ruf" }],
  creator: "Kalvin Al Ma'ruf",
 publisher: "Kalvin Al Ma'ruf",
icons: {
  icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  shortcut: "/favicon.svg",
  apple: "/favicon.svg",
},
openGraph: {
    title: "Kalvin Al Ma'ruf | Web Portfolio",
    description:
      "Portofolio pribadi Kalvin Al Ma'ruf yang menampilkan profil, skill, pengalaman, layanan, dan project di bidang web development dan sistem informasi.",
    type: "website",
    locale: "id_ID",
    siteName: "Kalvin Al Ma'ruf Portfolio",
    images: [
      {
        url: "/project-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Web Portfolio Kalvin Al Ma'ruf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalvin Al Ma'ruf | Web Portfolio",
    description:
      "Portofolio pribadi Kalvin Al Ma'ruf di bidang web development, aplikasi digital, dan sistem informasi.",
    images: ["/project-portfolio.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}