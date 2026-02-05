"use client"

import { useEffect } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      checkUserBudgets();
    }
  }, [user]);

  const checkUserBudgets = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const response = await fetch(`/api/budgets?email=${encodeURIComponent(email)}`);
      
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Failed to fetch budgets:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };
  return (
    <ClerkProvider
      afterSignOutUrl="/"
    >
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
