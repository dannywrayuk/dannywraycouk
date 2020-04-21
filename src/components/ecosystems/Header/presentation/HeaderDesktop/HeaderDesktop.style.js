import styled from 'styled-components';

import LinkButton from '../../../../_molecules/LinkButton';

export const LogoWrapper = styled.div`
  margin: 0px 40px 0px 25px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;


export const Controls = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SearchWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: 20px;
  order: 2;
`;

export const Link = styled(LinkButton)`
  height: 30px;
`;
