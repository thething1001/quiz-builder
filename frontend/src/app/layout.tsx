import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Quiz Builder",
  description: "Quiz Builder App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased w-svw h-svh flex justify-center overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="p-4 flex flex-col gap-4 container">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
