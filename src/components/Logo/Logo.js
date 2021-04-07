import styled from "styled-components";
import { LogoSVG } from "./Logo.svg";

const Container = styled.div`
  fill: ${({ theme }) => theme.colours.PRIMARY1};
  width: 100px;
  height: 100px;
`;

const Logo = () => (
  <Container>
    <LogoSVG />
  </Container>
);

export default Logo;
