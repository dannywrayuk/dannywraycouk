import styled from 'styled-components';

import Paragraph from '../../styled/Paragraph';

export const Container = styled.div`
  display: inline-flex;
  height: 30px;
`;

export const Icon = styled.div`
  fill: ${({ theme }) => theme.colors.mainYellow};
  height: 100%;
`;

export const NameText = styled(Paragraph)`
  color: ${({ theme }) => theme.text.color.accent};
  font-size: ${({ theme }) => theme.text.size.smallTitle};
  margin-left: 10px;
  letter-spacing: -1px;
  white-space: nowrap;
`;
