import { Box, Button } from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";

export function Footer() {
  return (
    <Box as="footer">
      <Button asChild variant="ghost">
        <a href="https://github.com/davidballester">
          <LuGithub /> Visit my GitHub profile
        </a>
      </Button>
    </Box>
  );
}
