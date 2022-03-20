import styled from "@emotion/styled";
import { TimelineLabel } from "@components/core";
import { MdAccessTimeFilled, MdOutlineArticle } from "react-icons/md";
import { FiFolder } from "react-icons/fi";
import { AiFillPushpin, AiFillHeart } from "react-icons/ai";
import { md, lg } from "@utils/breakpoints";

const Wrapper = styled.div({
  position: "relative",
  borderLeftColor: "var(--feintGrey)",
  width: "100%",
  "&:last-child": {
    borderLeftColor: "#00000000",
  },
});

const LeftBorder = styled.div({
  display: "inline-block",
  borderLeft: "solid 1px",
  borderLeftColor: "inherit",
  paddingLeft: "1.25rem",
  paddingBottom: "5rem",
  marginLeft: "0.75rem",
  [md]: {
    paddingLeft: "2.5rem",
  },
});

const IconWrapper = styled.div({
  backgroundColor: "var(--background)",
  color: "var(--iconColor)",
  position: "absolute",
  width: "1.5rem",
  height: "1.5rem",
  fontSize: "1.15rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: 0,
});

const TextWrapper = styled.div({
  height: "1.5rem",
  display: "flex",
  alignItems: "center",
  color: "var(--text)",
  opacity: 0.7,
  [lg]: {
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
    labelText = label ? label : "";
  }
  return (
    <Wrapper>
      <LeftBorder>
        <IconWrapper>
          <IconElement />
        </IconWrapper>
        <TextWrapper>
          <TimelineLabel>{labelText}</TimelineLabel>
        </TextWrapper>
        {children}
      </LeftBorder>
    </Wrapper>
  );
};
