import styled from 'styled-components';

export const Fill = styled.div`
  height: 100%;
  width: 100%;
`;


export const Wrapper = styled.div`
  height: 100%;
  margin: 0 20px;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1280px) {
      height: 100%;
      margin: 0 100px;
  }
 
  /* Extra large devices (large laptops and desktops, 1280px and up) */
  @media only screen and (min-width: 1480px) {
      height: 100%;
      max-width: 1280px;
      margin: 0 auto;
  } 
`;
