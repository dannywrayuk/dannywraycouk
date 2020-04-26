import styled, { css } from 'styled-components';

const Title = styled.h2`
    font-size: ${({ theme }) => theme.text.size.title};
    color: ${({ theme }) => theme.text.color.title};
    margin-bottom: 10px;
    ${({ center }) => center && css`
        text-align: center;
  `}
`;

export default Title;
