import styled from "styled-components";
import Config from "../../config";

const {
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

export const LinkContainer = styled.div`
  display: flex;
  margin: 50px auto 0 auto;
  max-width: 400px;
  @media ${OnMediumUp} {
    display: inline-flex;
    flex-direction: column;
    height: 300px;
    margin: auto;
    padding-left: 50px;
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.Colours.PRIMARY1};
  fill: ${({ theme }) => theme.Colours.PRIMARY2};
`;

export const Icon = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
