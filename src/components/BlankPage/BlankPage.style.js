import styled, { css } from "styled-components";

export const ChildrenContainer = styled.div`
  flex-grow: 1;
  ${({ applyMargin }) =>
    applyMargin &&
    css`
      margin: 120px 15px 0px;
    `}
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
