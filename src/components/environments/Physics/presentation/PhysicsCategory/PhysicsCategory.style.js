import styled from 'styled-components';

import SmallTitle from '../../../../styled/SmallTitle';

export const ItalicSmallTitle = styled(SmallTitle)`
    color: ${({ theme }) => theme.text.color.accent};
    font-style: italic;
`;
