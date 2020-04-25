import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  padding: 50px 80px;

  ${({ isStatic }) => isStatic && css`
    display: flex;
    padding: 50px 80px;
  `}

  @media only screen and (max-width: 1000px) {
    padding: 20px 0px 20px;
  }
  @media only screen and (max-width: 800px) {
    display: block;
    padding: 0px;
  }
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 20px;

  ${({ flexWidth }) => flexWidth && css`
    flex: ${flexWidth};
  `}

  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
    width: 100%;
    justify-content: center;
  }
`;
