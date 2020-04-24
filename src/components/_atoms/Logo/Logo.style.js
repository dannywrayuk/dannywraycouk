import styled from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const Container = styled.div`
  height: 30px;
  display: inline-flex;
`;

export const Icon = styled(AlignCenter).attrs({
  as: 'img',
})`
  height: 100%;
`;

export const NameText = styled(AlignCenter)`
  height: 100%;
  margin-left: 10px;
  font-size: 1.35rem;
  letter-spacing: -1px;
  color: #727272;
  text-decoration: none;
  white-space: nowrap;
`;
