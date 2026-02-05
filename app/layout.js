"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';

const outfit = Outfit({ subsets: ["latin"] });

function UserBudgetsChecker() {
  const { user } = useUser();
  const router = useRouter();

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
        
        if (result?.length == 0) {
          router.replace('/dashboard/budgets');
        }
      } else {
        console.error("Failed to fetch budgets:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  return null;
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
    >
      <html lang="en">
        <body className={outfit.className}>
          <UserBudgetsChecker />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
