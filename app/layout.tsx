import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandrakanth Robofest | Robot Entertainment & Event Experiences",
  description: "Premium robot entertainment and interactive experiences for unforgettable events in Anakapalle, Visakhapatnam and Andhra Pradesh. Book robotic entertainment for weddings, birthdays, corporate events, and more.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
