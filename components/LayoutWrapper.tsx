"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes where Header and Footer should be hidden
  const hideLayoutRoutes = ["/login", "/signup", "/admin"];

  // Check exact match or nested routes
  const shouldHideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideLayout && <Header />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}