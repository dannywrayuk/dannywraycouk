import styled from 'styled-components';

import LinkButton from '../../../../_molecules/LinkButton';
import AlignCenter from '../../../../styled/AlignCenter';

export const LogoWrapper = styled(AlignCenter)`
  margin: 0px 40px 0px 25px;
`;


export const Controls = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SearchWrapper = styled(AlignCenter)`
  margin-right: 20px;
  order: 2;
`;

export const Link = styled(LinkButton)`
  height: 30px;
`;
