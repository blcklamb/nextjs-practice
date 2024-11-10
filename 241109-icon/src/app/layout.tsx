import type { Metadata } from "next";
import "./globals.css";
import "./fonts/remixicon.css";

export const metadata: Metadata = {
  title: "Icon 번들 사이즈 테스트용 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
