import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Box, Container, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="3xl">
      <VStack gap="9">
        <Box mt="12">
          <Header />
        </Box>
        <Projects />
        <Box mb="12">
          <Footer />
        </Box>
      </VStack>
    </Container>
  );
}
