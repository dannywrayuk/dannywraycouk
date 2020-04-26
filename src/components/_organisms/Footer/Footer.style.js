import styled from 'styled-components';

import Paragraph from '../../styled/Paragraph';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mainYellow};
  width: 100%;
  text-align: center;
  padding:  30px 0;
`;

export const DarkParagraph = styled(Paragraph)`
 color: ${({ theme }) => theme.colors.icon}
`;
