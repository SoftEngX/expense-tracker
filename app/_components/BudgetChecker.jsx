"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

export default function BudgetChecker() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUserBudgets = async () => {
      if (
        pathname !== "/" ||
        !isLoaded ||
        !user?.primaryEmailAddress?.emailAddress
      ) {
        return;
      }

      try {
        const email = user.primaryEmailAddress.emailAddress;
        const response = await fetch(
          `/api/budgets?email=${encodeURIComponent(email)}`,
        );

        if (response.ok) {
          const result = await response.json();
          if (result?.length === 0) {
            router.replace("/dashboard/budgets");
          }
        }
      } catch (error) {
        console.warn("Error fetching budgets:", error);
      }
    };

    checkUserBudgets();
  }, [user, isLoaded, pathname, router]);

  return null;
}
