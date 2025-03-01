import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import "./global.css";

export const metadata: Metadata = {
  title: "David Ballester Mena",
  description:
    "I'm a web developer with 10+ years of experience. This is my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>
          <Box className="dark">{children}</Box>
        </Provider>
      </body>
    </html>
  );
}
