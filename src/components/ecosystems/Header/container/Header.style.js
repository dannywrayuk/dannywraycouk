import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  -webkit-box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  /* height: var(--ySpaceHeader); */
  height: 48px;
  z-index: 99;
`;
