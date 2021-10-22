import { CenterContent } from "../CenterContent";
import { Footer } from "../Footer";
import { StandardHead } from "../Heads";
import { Navigation } from "../Navigation";
import { NameBanner } from "../NameBanner";

export const HomeLayout = ({ children }) => (
  <>
    <StandardHead />
    <Navigation />
    <NameBanner />
    <CenterContent>
      {children}
      <Footer />
    </CenterContent>
  </>
);
