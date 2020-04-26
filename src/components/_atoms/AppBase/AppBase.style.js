import styled from 'styled-components';

export const App = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${({ theme }) => theme.spacing.header} 0 0;
`;
