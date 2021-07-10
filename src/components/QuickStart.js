import { StandardHead } from "./Heads";
import CornerLogo from "./CornerLogo";
import { Menu } from "./Menu";
import Footer from "./Footer";
import Padding from "./Padding";

const QuickStart = ({ children }) => (
  <>
    <StandardHead />
    <CornerLogo />
    <Menu />
    <Footer>
      <Padding>{children}</Padding>
    </Footer>
  </>
);

export default QuickStart;
