import { useEffect, useState } from "react";
import textStore from "../../textStore";
import {
  StickyContainer,
  Animation,
  Line,
  Transformer,
} from "./ShrinkingLogo.style";

const { Logo: Text } = textStore;

const ShrinkingLogo = () => {
  const shrinkThreshold = 100;
  const [shouldShrink, setShouldShrink] = useState(false);

  useEffect(() => {
    window.onscroll = () =>
      setShouldShrink(window.pageYOffset > shrinkThreshold);
  });

  return (
    <StickyContainer>
      <Transformer shouldShrink={shouldShrink}>
        <Animation shouldShrink={shouldShrink}>
          <Line>{Text.Line1}</Line>
          <Line>{Text.Line2}</Line>
          <Line>{Text.Line3}</Line>
        </Animation>
      </Transformer>
    </StickyContainer>
  );
};

export default ShrinkingLogo;
