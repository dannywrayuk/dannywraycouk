import styled from 'styled-components';

import ShapeBlob from '../../_atoms/ShapeBlob';

export const Container = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Circle = styled(ShapeBlob)`
  background-color: ${({ theme }) => theme.colors.mainYellow};
  width: 70px;
  min-width: 70px;
  height: 70px;
  min-height: 70px;
`;

export const Icon = styled.div`
  height:25px;
  fill: ${({ theme }) => theme.colors.icon};
`;
