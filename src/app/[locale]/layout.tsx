import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./LayoutProvider";
import { headers } from "next/headers";
import { getPageMetadata } from "./metadata-config";
import MetadataHandler from "@/components/MetadataHandler";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const pathname = (await headers()).get('x-pathname') || "/";
  return getPageMetadata(pathname);
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <LayoutProvider>
            {children}
            <MetadataHandler />
          </LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
