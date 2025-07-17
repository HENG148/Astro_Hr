'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = [
    '/log',
    '/register',
    '/coverLetter'
  ];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.some(route =>
    pathname?.endsWith(route)
  )

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar />}
      <main>{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  )
}