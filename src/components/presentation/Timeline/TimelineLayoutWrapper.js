import styled from "@emotion/styled";
import { Box, Icon, Text } from "@components/core";
import { MdAccessTimeFilled, MdOutlineArticle } from "react-icons/md";
import { FiFolder } from "react-icons/fi";
import { AiFillPushpin, AiFillHeart } from "react-icons/ai";
import { mq } from "@utils/breakpoints";

const Wrapper = styled.div({
  position: "relative",
  width: "100%",
  paddingBottom: "5rem",
  ":before": {
    content: "''",
    position: "absolute",
    width: "1px",
    top: 0,
    bottom: 0,
    backgroundColor: "var(--color-border-default)",
    left: "1rem",
    zIndex: "-1",
    [mq.lg]: {
      left: "-2.5rem",
    },
  },
  ":last-child": {
    ":before": {
      bottom: "50%",
      [mq.lg]: {
        display: "none",
      },
    },
  },
});

const IconWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "2rem",
  transform: "translateX(-50%)",
  color: "var(--color-fg-subtle)",
  backgroundColor: "var(--color-bg-default)",
  left: "1rem",
  [mq.lg]: {
    left: "-2.5rem",
    transform: "translate(-50%,-50%)",
  },
});

const TextWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  height: "2rem",
  color: "var(--color-fg-subtle)",
  marginBottom: "10px",
  marginLeft: "2rem",
  [mq.lg]: {
    margin: "0",
    position: "absolute",
    left: "-4rem",
    transform: "translate(-100%,-50%)",
  },
});

const Icons = {
  project: FiFolder,
  article: MdOutlineArticle,
  pin: AiFillPushpin,
  heart: AiFillHeart,
};

const variants = {
  like: [Icons.heart, "I like this."],
  pinned: [Icons.pin, "Pinned."],
  project: [Icons.project, "Project"],
};

export const TimelineLayoutWrapper = ({ children, label, icon, variant }) => {
  let IconElement, labelText;
  if (variant) {
    [IconElement, labelText] = variants[variant];
  } else {
    IconElement = icon ? Icons[icon] : MdAccessTimeFilled;
    labelText = label ? label : null;
  }
  return (
    <Wrapper>
      <IconWrapper>
        <Icon as={IconElement} size="1.125rem" />
      </IconWrapper>
      {labelText && (
        <TextWrapper>
          <Text size="sm" weight="bold">
            {labelText}
          </Text>
        </TextWrapper>
      )}
      {children}
    </Wrapper>
  );
};
