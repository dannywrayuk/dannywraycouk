import styled from 'styled-components';

export const Topper = styled.div`
  height: 50px;
`;

export const Container = styled.div`
  width: 100%;

  background-color: white;
  border-radius: 10px;

  margin: 0px 0px 50px 0px;
  box-sizing: border-box;  
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);
  -webkit-box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
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
  background-color: #e9e9e9;
  border-radius: 0 0 10px 10px;
`;
