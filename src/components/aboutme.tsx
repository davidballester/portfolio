import { Text } from "@chakra-ui/react";
import { TagCloud } from "./tagCloud";

export function AboutMe() {
  return (
    <>
      <Text as="h2" textStyle="4xl" fontWeight="bold" className="playful-text">
        About me
      </Text>
      <Text as="p" textStyle="xl">
        I&apos;ve been <strong>building software since 2010</strong>. Started in{" "}
        <strong>healthcare</strong>, now working in{" "}
        <strong>video advertising</strong>. Over the years I&apos;ve worked as a
        developer, <strong>tech lead</strong> and now more on the{" "}
        <strong>architecture</strong> side of things. Here are some of the
        technologies and languages I&apos;ve used along the way:
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
