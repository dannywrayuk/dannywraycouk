import styled from "styled-components";
import StandardLayout from "../StandardLayout";
import Greeting from "../Greeting";
import SocialLinks from "../SocialLinks";
import NavigationLinks from "../NavigationLinks";
import ContentsSection from "../ContentsSection";

import Config from "../../config";
const {
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

const DisplayBreakpoint = styled.div`
  @media ${OnMediumUp} {
    display: flex;
  }
`;

const FullPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  @media ${OnMediumUp} {
    margin-top: 100px;
    font-size: 6vw;
  }
`;

const EquationBlock = styled.div`
  color: white;
`;

const EquationInline = styled.span`
  color: white;
`;

const MDXComponents = {
  DisplayBreakpoint,
  FullPage,
  SectionMarker,
  SocialLinks,
  NavigationLinks,
  StandardLayout,
  Greeting,
  EquationBlock,
  EquationInline,
  ContentsSection,
  p: styled.p`
    color: ${({ theme }) => theme.Colours.PRIMARY3};
  `,
  h1: styled.h1`
    color: ${({ theme }) => theme.Colours.PRIMARY1};
  `,
};

export default MDXComponents;
