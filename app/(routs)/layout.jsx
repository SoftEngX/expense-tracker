"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import SideNav from "./dashboard/_components/SideNav";
import DashboardHeader from "./dashboard/_components/DashboardHeader";

export default function DashboardLayout({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
