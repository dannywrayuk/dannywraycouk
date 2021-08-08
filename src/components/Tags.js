import { Flex, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { SiNextDotJs } from "react-icons/si";
import { BiAtom } from "react-icons/bi";

const tagList = {
  react: { color: "blue", icon: FaReact, label: "React" },
  nextjs: { color: "red", icon: SiNextDotJs, label: "Next.JS" },
  chakraui: { color: "green", icon: BsFillLightningFill, label: "Chakra UI" },
  physics: { color: "yellow", icon: BiAtom, label: "Physics" },
};

const TagComponent = ({ color = "gray", icon, label }) => (
  <Tag marginInlineEnd="6px" my={1} colorScheme={color}>
    {icon && <TagLeftIcon as={icon} />}
    <TagLabel>{label}</TagLabel>
  </Tag>
);

const Tags = ({ tags }) => (
  <Flex wrap="wrap">
    {tags.split(",").map((tag, id) => {
      tag = tag.trim();
      if (tagList[tag]) {
        return <TagComponent key={`${tag}-${id}`} {...tagList[tag]} />;
      } else return <TagComponent key={`${tag}-${id}`} label={tag} />;
    })}
  </Flex>
);

export default Tags;
