import styled from 'styled-components';

import AnchorButton from '../../_molecules/AnchorButton';
import AlignCenter from '../../styled/AlignCenter';

export const FollowText = styled(AlignCenter).attrs({
  as: AnchorButton,
})`
  vertical-align: middle;
`;

export const Icon = styled.div`
  margin-left: 15px;
  width: 20px;
  height: 20px;
`;
