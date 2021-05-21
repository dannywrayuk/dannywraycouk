import { useEffect, useState } from "react";
import Link from "../Link";
import Config from "../../config";
import {
  StickyContainer,
  Animation,
  Line,
  Transformer,
} from "./ShrinkingLogo.style";

const { Logo: Text } = Config.Text;

const ShrinkingLogo = () => {
  const shrinkThreshold = 100;
  const [shouldShrink, setShouldShrink] = useState(false);
  const [transitionSpeed, setTransitionSpeed] = useState("0s");

  useEffect(() => {
    let isFirstLoad = true;
    setTransitionSpeed(window.pageYOffset > shrinkThreshold ? "0s" : "1s");
    window.onscroll = () => {
      isFirstLoad && setTransitionSpeed("1s");
      isFirstLoad && setShouldShrink(window.pageYOffset > shrinkThreshold);
    };
    return () => {
      isFirstLoad = false;
    };
  });

  return (
    <StickyContainer>
      <Transformer shouldShrink={shouldShrink}>
        <Link href="/">
          <Animation
            shouldShrink={shouldShrink}
            transitionSpeed={transitionSpeed}
          >
            <Line>{Text.Line1}</Line>
            <Line>{Text.Line2}</Line>
            <Line>{Text.Line3}</Line>
          </Animation>
        </Link>
      </Transformer>
    </StickyContainer>
  );
};

export default ShrinkingLogo;
