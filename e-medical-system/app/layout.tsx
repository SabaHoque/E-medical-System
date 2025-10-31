
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "EyeCareAI",
  description: "AI-Powered Eye Health & Medical Screening",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-50 to-blue-100">
        {children}
      </body>
    </html>
  );
}
