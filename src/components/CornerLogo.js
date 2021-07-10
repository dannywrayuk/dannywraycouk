import { useBreakpointValue } from "@chakra-ui/react";
import FadeOnScroll from "./FadeOnScroll";
import Logo from "./Logo";

const CornerLogo = ({
  settings = { start: 0, stop: 0.3, responsive: true },
}) => {
  const responsiveProps = settings.responsive
    ? useBreakpointValue({ base: {}, md: { start: 0, stop: 0 } })
    : {};
  return (
    <FadeOnScroll {...settings} {...responsiveProps}>
      <Logo />
    </FadeOnScroll>
  );
};

export default CornerLogo;
