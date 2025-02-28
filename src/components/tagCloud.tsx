import { Badge, HStack, VStack } from "@chakra-ui/react";
import {
  LuBringToFront,
  LuChartArea,
  LuCloud,
  LuDatabase,
  LuGem,
  LuSendToBack,
} from "react-icons/lu";

export interface ITag {
  tag: string;
  type: ITagType;
}

const tagTypes = [
  "frontend",
  "backend",
  "database",
  "infrastructure",
  "analytics",
  "language",
] as const;

export type ITagType = (typeof tagTypes)[number];

export function TagCloud({ tags }: { tags: ITag[] }) {
  const typeToVariant = useTypeToVariant({ tags });
  const typeToTags = tags.reduce((acc, { tag, type }) => {
    acc[type] ??= [];
    acc[type].push(tag);
    return acc;
  }, {} as { [type: string]: string[] });
  return (
    <HStack gap="3">
      {tagTypes.map((type) => (
        <VStack key={type} gap="3" alignItems="initial">
          {typeToTags[type].map((tag) => (
            <Badge key={tag} variant={typeToVariant[type]}>
              <TagTypeIcon tagType={type as ITagType} />
              {tag}
            </Badge>
          ))}
        </VStack>
      ))}
    </HStack>
  );
}

function useTypeToVariant({ tags }: { tags: ITag[] }): {
  [type: string]: "outline" | "solid" | "subtle" | "surface" | "plain";
} {
  const types = Array.from(new Set(tags.map(({ type }) => type)));
  const variants = ["outline", "solid", "subtle", "surface"];
  const typeToVariant = types.sort().reduce(
    (acc, type, index) => ({
      ...acc,
      [type]: variants[index % variants.length],
    }),
    {}
  );
  return typeToVariant;
}

function useRandomPositions({
  length,
}: {
  length: number;
}): Array<{ top: number; left: number }> {
  const basePositions = new Array(length).fill(null).map((_, index) => ({
    top: (100 * index) / length,
    left: (100 * index) / length,
  }));
  return basePositions.map(({ top, left }) => ({
    top: top + Math.round((Math.random() - 0.5) * 10),
    left: top + Math.round((Math.random() - 0.5) * 10),
  }));
}

function TagTypeIcon({ tagType }: { tagType: ITagType }) {
  switch (tagType) {
    case "analytics": {
      return <LuChartArea />;
    }
    case "database": {
      return <LuDatabase />;
    }
    case "frontend": {
      return <LuBringToFront />;
    }
    case "backend": {
      return <LuSendToBack />;
    }
    case "infrastructure": {
      return <LuCloud />;
    }
    case "language": {
      return <LuGem />;
    }
  }
}
