import styled from "@emotion/styled";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const FooterSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
});

const CenterContent = styled.div({
  maxWidth: "1100px",
  padding: "0 32px 0",
  margin: "0 auto",
});

export const SectionSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "50px",
  maxWidth: "700px",
  margin: "0 auto",
  width: "100%",
});

export const LayoutCore = ({ children }) => (
  <CenterContent>
    <FooterSpacing>
      <Navigation />
      {children}
      <Footer />
    </FooterSpacing>
  </CenterContent>
);

export const Layout = ({ children }) => (
  <LayoutCore>
    <SectionSpacing>{children}</SectionSpacing>
  </LayoutCore>
);
