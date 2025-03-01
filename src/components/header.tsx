import { Box, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header">
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
        Hey, I am a web developer with{" "}
        <strong className="playful-text variant">
          10+ years of experience
        </strong>
        .
      </Text>
    </Box>
  );
}
