import { useState, useEffect, useRef } from "react";
import textStore from "../../textStore";
import { ArrowSVG } from "../SVG";
import {
  Sticky,
  Icon,
  StyledButton,
  Content,
  Line,
} from "./NavigationButton.style";

const {
  Landing: { Navigation: Text },
} = textStore;

const NavigationButton = () => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState();
  const buttonRef = useRef();

  useEffect(() => {
    setHeight(buttonRef.current.scrollHeight);
  });

  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Sticky open={open}>
      <StyledButton onClick={onClick}>
        <Icon open={open}>
          <ArrowSVG />
        </Icon>
      </StyledButton>
      <Content open={open} height={height} ref={buttonRef}>
        <Line>{Text.Line1}</Line>
        <Line>{Text.Line2}</Line>
        <Line>{Text.Line3}</Line>
        <Line>{Text.Line4}</Line>
      </Content>
    </Sticky>
  );
};

export default NavigationButton;
