import { Logo as LogoContent } from "./Content/Logo";
import { WithScroll } from "./Animation";

const Logo = (props) => (
  <WithScroll {...props}>
    <LogoContent />
  </WithScroll>
);

export default Logo;
