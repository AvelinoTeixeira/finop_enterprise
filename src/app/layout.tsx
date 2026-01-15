import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinOp Enterprise | Dashboard Financeiro",
  description: "Gestão financeira de alta performance com Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={cn("min-h-screen font-sans antialiased", inter.className)}>
        {children}
      </body>
    </html>
  );
}