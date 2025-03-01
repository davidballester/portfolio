import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import { LuExternalLink, LuGithub } from "react-icons/lu";

export function Project({
  title,
  description,
  imgSrc,
  tags = [],
  url,
  githubUrl,
}: {
  title: string;
  description: string;
  imgSrc: string;
  tags?: string[];
  url: string;
  githubUrl?: string;
}) {
  return (
    <Card.Root
      flexDirection={{ base: "column", md: "row" }}
      overflow="hidden"
      maxW={{ base: "sm", md: "xl" }}
    >
      <Image
        objectFit="scale-down"
        maxW={{ base: "full", md: "200px" }}
        src={imgSrc}
        alt={title}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          {tags.length ? (
            <HStack mt="4">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </HStack>
          ) : null}
        </Card.Body>
        <Card.Footer>
          <Button asChild variant="subtle">
            <a href={url} target="_blank">
              <LuExternalLink />
              Visit now
            </a>
          </Button>
          {githubUrl ? (
            <Button asChild variant="ghost">
              <a href={githubUrl} target="_blank">
                <LuGithub />
                GitHub repo
              </a>
            </Button>
          ) : null}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
