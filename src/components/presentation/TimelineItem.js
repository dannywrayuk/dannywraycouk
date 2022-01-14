import styled from "@emotion/styled";
import { TimelineLabel } from "@components/core";
import { MdAccessTimeFilled, MdOutlineArticle } from "react-icons/md";
import { FiFolder } from "react-icons/fi";
import { AiFillPushpin, AiFillHeart } from "react-icons/ai";

const Wrapper = styled.div({
  position: "relative",
  borderLeftColor: "var(--midGrey)",
  "&:last-child": {
    borderLeftColor: "#00000000",
  },
});

const LeftBorder = styled.div({
  borderLeft: "solid 1px",
  borderLeftColor: "inherit",
  paddingLeft: "1.25rem",
  paddingBottom: "5rem",
  marginLeft: "0.75rem",
});

const IconWrapper = styled.div({
  backgroundColor: "var(--background)",
  color: "var(--midGrey)",
  position: "absolute",
  width: "1.5rem",
  height: "1.5rem",
  fontSize: "1.1rem",
  padding: "0.2rem",
  left: 0,
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

export const TimelineItem = ({ children, label, icon, variant }) => {
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
        <TimelineLabel color="var(--midGrey)">{labelText}</TimelineLabel>
        {children}
      </LeftBorder>
    </Wrapper>
  );
};
