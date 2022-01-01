import styled from "@emotion/styled";

const Wrapper = styled.div({
  maxWidth: 1296,
  margin: "0 auto 0",
});

export const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;
