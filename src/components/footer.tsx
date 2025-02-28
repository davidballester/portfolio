import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { LuCopyright, LuGithub, LuLinkedin } from "react-icons/lu";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <VStack as="footer" gap="6">
      <HStack gap="9">
        <Button asChild variant="ghost" size="lg">
          <a href="https://github.com/davidballester">
            <LuGithub /> GitHub profile
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a href="https://www.linkedin.com/in/david-ballester-mena-274a2034/">
            <LuLinkedin /> LinkedIn profile
          </a>
        </Button>
      </HStack>
      <Text textStyle="sm" color="gray.400">
        Built with love and{" "}
        <Link href="https://nextjs.org/" target="_blank">
          Next.js
        </Link>
        .
      </Text>
      <HStack gap="1" color="gray.400">
        <LuCopyright />
        <Text textStyle="sm">
          David Ballester Mena {currentYear}. All rights reserved.
        </Text>
      </HStack>
    </VStack>
  );
}
