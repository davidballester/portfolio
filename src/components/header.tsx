import { Text, VStack } from "@chakra-ui/react";
import { Lilita_One } from "next/font/google";

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });

export function Header() {
  return (
    <VStack as="header" gap={{ base: 6, md: 3 }}>
      <Text
        as="h1"
        textStyle="7xl"
        textAlign="center"
        className={`playful-text ${lilitaOne.className}`}
      >
        David Ballester Mena
      </Text>
      <Text textStyle="xl" textAlign="center">
        Hey, I am a web developer with{" "}
        <strong className="playful-text variant">
          10+ years of experience
        </strong>
        .
      </Text>
    </VStack>
  );
}
