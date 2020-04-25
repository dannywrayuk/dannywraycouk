import styled, { css } from 'styled-components';

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default Title;
