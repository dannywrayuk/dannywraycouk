import styled, { css } from 'styled-components';

const BigTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default BigTitle;
