import styled from 'styled-components';

import { ResponsiveDivider } from '../../_atoms/ResponsiveDividers';
import Paragraph from '../../styled/Paragraph';

export const Date = styled(Paragraph)`
  font-style: italic;
`;

export const ContentContainer = styled(ResponsiveDivider)`
  color: ${({ theme }) => theme.text.color.paragraph};
`;
