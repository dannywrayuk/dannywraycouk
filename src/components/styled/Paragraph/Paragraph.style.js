import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.text.size.paragraph};
  color: ${({ theme, dark }) => (dark ? theme.text.color.title : theme.text.color.paragraph)};
  line-height: 30px;
  ${({ center }) => center && css`
    text-align: center;
  `}
  ${({ inline }) => inline && css`
    display: inline;
  `}
`;

export default Paragraph;
