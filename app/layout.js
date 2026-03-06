import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import BudgetChecker from "./_components/BudgetChecker";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Manage your expenses and budgets",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <BudgetChecker />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
