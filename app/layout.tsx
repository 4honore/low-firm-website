import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Key Law Chambers Ltd | Professional Legal Services",
  description: "Expert legal representation and consultation services. Specializing in corporate law, civil litigation, criminal defense, and more. Contact us for a free consultation.",
  keywords: ["law firm", "legal services", "lawyer", "attorney", "legal consultation", "Rwanda law"],
  authors: [{ name: "Key Law Chambers Ltd" }],
  openGraph: {
    title: "Key Law Chambers Ltd | Professional Legal Services",
    description: "Expert legal representation and consultation services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

