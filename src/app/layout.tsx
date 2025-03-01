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
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <Provider>
          <Box
            background={`
              radial-gradient(ellipse at top, #111, transparent),
              radial-gradient(ellipse at center, #ff159520, transparent),
              radial-gradient(ellipse at bottom, #111, transparent);
            `}
          >
            <Box
              backgroundImage="radial-gradient(#ffe52e20 0.5px, transparent 0.5px)"
              backgroundSize="15px 15px"
              backgroundRepeat="repeat"
            >
              {children}
            </Box>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
