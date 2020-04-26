import styled, { css } from 'styled-components';

const BigTitle = styled.h1`
    font-size: ${({ theme }) => theme.text.size.bigTitle};
    color: ${({ theme }) => theme.text.color.title};
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default BigTitle;
