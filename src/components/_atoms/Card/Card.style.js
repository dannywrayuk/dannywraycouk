import styled from 'styled-components';

export const Topper = styled.div`
  height:  50px;
`;

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;

  margin: 0 0 50px 0;
  box-sizing: border-box;  
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 30px;
  padding: 20px;
  box-sizing: border-box; 
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0 0 10px 10px;
`;
