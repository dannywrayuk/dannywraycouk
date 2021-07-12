import { StandardHead } from "./Heads";
import Logo from "./Logo";
import Menu from "./Menu";
import Footer from "./Footer";
import Padding from "./Padding";

const QuickStart = ({ children }) => (
  <>
    <StandardHead />
    <Logo />
    <Menu />
    <Footer>
      <Padding>{children}</Padding>
    </Footer>
  </>
);

export default QuickStart;
