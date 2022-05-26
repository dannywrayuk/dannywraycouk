import styled from "@emotion/styled";
import { Box, Icon, Text } from "@components/core";
import { MdAccessTimeFilled, MdOutlineArticle } from "react-icons/md";
import { FiFolder } from "react-icons/fi";
import { AiFillPushpin, AiFillHeart } from "react-icons/ai";
import { mq } from "@utils/breakpoints";

const Wrapper = styled.div({
  position: "relative",
  borderLeftColor: "var(--color-border-default)",
  width: "100%",
  "&:last-child": {
    borderLeftColor: "#00000000",
  },
});

const LeftBorder = styled.div({
  borderLeft: "solid 1px",
  borderLeftColor: "inherit",
  padding: "0 1.25rem 5rem",
  [mq.md]: {
    paddingLeft: "2.5rem",
    paddingRight: "0",
  },
});

const IconWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "1.5rem",
  left: 0,
  transform: "translateX(-50%)",
  color: "var(--color-fg-subtle)",
  backgroundColor: "var(--color-bg-default)",
});

const TextWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  height: "1.5rem",
  color: "var(--color-fg-subtle)",
  marginBottom: "10px",
  [mq.lg]: {
    marginBottom: "0",
    position: "absolute",
    left: "-1rem",
    transform: "translateX(-100%)",
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
      <LeftBorder>
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
      </LeftBorder>
    </Wrapper>
  );
};
