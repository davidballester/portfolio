import { Box, Text } from "@chakra-ui/react";
import "./header.css";

export function Header() {
  return (
    <Box as="header">
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
      <Text
        as="h1"
        textStyle="7xl"
        fontFamily={'"Lilita One", serif'}
        textAlign="center"
        className="playful-text"
      >
        David Ballester Mena
      </Text>
      <Text textStyle="xl" textAlign="center">
        I am a web developer with{" "}
        <strong className="playful-text variant">
          10+ years of experience
        </strong>
        . Welcome to my portfolio!
      </Text>
    </Box>
  );
}
