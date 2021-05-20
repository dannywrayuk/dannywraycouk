import { useState, useEffect, useRef } from "react";
import textStore from "../../textStore";
import { ArrowSVG } from "../SVG";
import {
  Sticky,
  Icon,
  StyledButton,
  Controls,
  Content,
  Option,
  MenuText,
} from "./DropDownMenu.style";

const {
  Landing: { Navigation: Text },
} = textStore;

const NavigationButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState();
  const buttonRef = useRef();

  useEffect(() => {
    setHeight(buttonRef.current.scrollHeight);
  });

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Sticky menuOpen={menuOpen}>
      <Controls>
        <MenuText menuOpen={menuOpen}>{Text.Menu}</MenuText>
        <StyledButton onClick={onClick}>
          <Icon menuOpen={menuOpen}>
            <ArrowSVG />
          </Icon>
        </StyledButton>
      </Controls>
      <Content menuOpen={menuOpen} height={height} ref={buttonRef}>
        <Option>{Text.Option1.Text}</Option>
        <Option>{Text.Option2.Text}</Option>
        <Option>{Text.Option3.Text}</Option>
        <Option>{Text.Option4.Text}</Option>
      </Content>
    </Sticky>
  );
};

export default NavigationButton;
