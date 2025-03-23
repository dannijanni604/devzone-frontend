"use client";  //  client component

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Header from "./components/Header"; //  Header component
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-white">
          {/* Show ONLY Sign-in/Sign-up on auth pages */}
          {isAuthPage ? (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
              {children}
            </div>
          ) : (
            <>
          {/* Show Header + Content on all other pages */}
          <SignedIn>
            <Header />  {/* Navbar with links to Home, About, Profile, Dashboard, Sign Out */}
          </SignedIn>

              <main className="pt-16">{children}</main> {/* Added padding to prevent overlap */}
            </>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
