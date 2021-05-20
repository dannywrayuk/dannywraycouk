import ShrinkingLogo from "../ShrinkingLogo";
import Footer from "../Footer";
import DropDownMenu from "../DropDownMenu";
import { StandardHead } from "../Heads";
import { ChildrenContainer, MainContainer } from "./BlankPage.style";

const BlankPage = ({
  showLogo,
  showFooter,
  showDropDownMenu,
  applyMargin,
  children,
  Head = StandardHead,
}) => {
  return (
    <Head>
      <MainContainer>
        {showLogo && <ShrinkingLogo />}
        {showDropDownMenu && <DropDownMenu />}
        <ChildrenContainer applyMargin={applyMargin}>
          {children}
        </ChildrenContainer>
        {showFooter && <Footer />}
      </MainContainer>
    </Head>
  );
};

export default BlankPage;
