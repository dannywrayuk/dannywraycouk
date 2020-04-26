import styled, { css } from 'styled-components';

const SmallTitle = styled.h3`
    font-size: ${({ theme }) => theme.text.size.smallTitle};
    color: ${({ theme }) => theme.text.color.title};
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default SmallTitle;
