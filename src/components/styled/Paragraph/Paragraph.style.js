import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    color: #333;
    line-height: 30px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default Paragraph;
