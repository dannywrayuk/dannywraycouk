import { Button, Text } from "@components/core";
import styled from "@emotion/styled";
import { useCycle } from "@utils/useCycle";
import { useRef, useState } from "react";

const Wrapper = styled.div({});
const RevealContent = styled.div(
  {
    overflow: "hidden",
    transition: "0.3s",
  },
  ({ contentHeight }) => ({
    maxHeight: contentHeight,
    opacity: contentHeight ? 1 : 0,
  })
);

const RevealButton = styled(Button)({ margin: "10px auto" });

export const Reveal = ({ children }) => {
  const [showing, toggleShowing] = useCycle(2);
  const buttonString = showing ? "Less" : "More";
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const onClick = () => {
    setHeight(contentRef.current.scrollHeight);
    toggleShowing();
  };
  return (
    <Wrapper>
      <RevealContent ref={contentRef} contentHeight={showing ? height : 0}>
        {children}
      </RevealContent>
      <RevealButton onClick={onClick}>
        <Text _css={{ fontSize: "0.8rem" }}>{buttonString}</Text>
      </RevealButton>
    </Wrapper>
  );
};
