import ShrinkingLogo from "../ShrinkingLogo";
import Footer from "../Footer";
import DropDownMenu from "../DropDownMenu";
import { StandardHead } from "../Heads";
import { ChildrenContainer, MainContainer } from "./BlankPage.style";

const BlankPage = ({
  showLogo,
  showFooter,
  showDropDownMenu,
  sideMargin,
  topMargin,
  children,
  Head = StandardHead,
}) => {
  return (
    <Head>
      <MainContainer>
        {showLogo && <ShrinkingLogo />}
        {showDropDownMenu && <DropDownMenu />}
        <ChildrenContainer sideMargin={sideMargin} topMargin={topMargin}>
          {children}
        </ChildrenContainer>
        {showFooter && <Footer />}
      </MainContainer>
    </Head>
  );
};

export default BlankPage;
