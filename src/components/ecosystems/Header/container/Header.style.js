import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color:  ${({ theme }) => theme.colors.header};
  box-shadow: ${({ theme }) => theme.shadow};
  height: ${({ theme }) => theme.spacing.header};
  z-index: 99;
`;
