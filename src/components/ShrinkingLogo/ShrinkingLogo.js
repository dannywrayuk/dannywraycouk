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
  const shrinkThreshold = Config.LogoShrinkThreshold.Distance;
  const [shouldShrink, setShouldShrink] = useState(false);

  useEffect(() => {
    let isFirstLoad = true;
    window.onscroll = () => {
      isFirstLoad &&
        window.innerWidth < Config.LogoShrinkThreshold.Width &&
        setShouldShrink(window.pageYOffset > shrinkThreshold);
    };
    return () => {
      isFirstLoad = false;
    };
  });

  return (
    <StickyContainer>
      <Transformer shouldShrink={shouldShrink}>
        <Link href="/">
          <Animation shouldShrink={shouldShrink}>
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
