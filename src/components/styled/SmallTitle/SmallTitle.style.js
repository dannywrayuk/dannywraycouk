import styled, { css } from 'styled-components';

const SmallTitle = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default SmallTitle;
