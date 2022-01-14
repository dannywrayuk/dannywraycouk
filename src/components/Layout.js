import styled from "@emotion/styled";
import { lg } from "@utils/breakpoints";

const FooterSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

const Wrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr minmax(auto, 1296px) 1fr",
  margin: "0 0 100px",
  padding: "0 10px 0",
  [lg]: { padding: 0 },
});
const Content = styled.div({ gridColumn: 2 });

export const Layout = ({ children, footer }) => (
  <FooterSpacing>
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
    {footer}
  </FooterSpacing>
);
