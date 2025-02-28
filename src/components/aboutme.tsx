import { Text } from "@chakra-ui/react";
import { TagCloud } from "./tagCloud";

export function AboutMe() {
  return (
    <>
      <Text as="h2" textStyle="4xl" fontWeight="bold" className="playful-text">
        About me
      </Text>
      <Text as="p" textStyle="xl">
        I've been a <strong>software developer since 2010</strong>. I started on
        the Healthcare industry and now I'm working in video advertising. Here's
        a shortened list of different technologies and languages I've used:
      </Text>
      <TagCloud
        tags={[
          { tag: "Azure", type: "infrastructure" },
          { tag: "Node.js", type: "backend" },
          { tag: "Next.js", type: "frontend" },
          { tag: "React", type: "frontend" },
          { tag: "Kubernetes", type: "infrastructure" },
          { tag: "Java", type: "language" },
          { tag: "Rust", type: "language" },
          { tag: "SQL", type: "database" },
          { tag: "MongoDB", type: "database" },
          { tag: "PostgreSQL", type: "database" },
          { tag: "Grafana", type: "analytics" },
          { tag: "Spring", type: "backend" },
          { tag: "Django", type: "backend" },
          { tag: "Helm", type: "infrastructure" },
          { tag: "TypeScript", type: "language" },
          { tag: "Angular", type: "frontend" },
        ]}
      />
    </>
  );
}
