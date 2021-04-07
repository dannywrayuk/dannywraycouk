import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colours.PRIMARY2};
`;

export const TitleText = styled.h1`
  color: ${(props) => props.theme.colours.PRIMARY3};
  margin: 0;
`;
