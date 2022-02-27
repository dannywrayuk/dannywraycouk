import styled from "@emotion/styled";
import { lg } from "@utils/breakpoints";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const FooterSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
});

const CenterContent = styled.div({
  maxWidth: "1296px",
  margin: "0 auto",
  padding: "0 10px 0",
  [lg]: { padding: 0 },
});

const SectionSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "50px",
  marginBottom: "auto",
});

export const Layout = ({ children }) => (
  <CenterContent>
    <FooterSpacing>
      <Navigation />
      <SectionSpacing>{children}</SectionSpacing>
      <Footer />
    </FooterSpacing>
  </CenterContent>
);
