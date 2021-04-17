import React, { useEffect, useState } from "react";
import { Sticky, LogoContainer, StyledLogo } from "./ShrinkingLogo.style";
import Logo from "../Logo";

const ShrinkingLogo = () => {
  const shrinkThreshold = 100;
  const [shouldShrink, setShouldShrink] = useState(false);

  useEffect(() => {
    window.onscroll = () =>
      setShouldShrink(window.pageYOffset > shrinkThreshold);
    console.log(window.pageYOffset);
  });

  return (
    <Sticky>
      <LogoContainer shouldShrink={shouldShrink}>
        <StyledLogo shouldShrink={shouldShrink}>
          <Logo />
        </StyledLogo>
      </LogoContainer>
    </Sticky>
  );
};

export default ShrinkingLogo;
