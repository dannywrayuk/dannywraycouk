import { createElement } from 'react';

import styled, { css } from 'styled-components';

export const Element = styled(({ tag, children, ...props }) => createElement(`h${tag}`, props, children))`
  ${({ tag }) => {
    switch (tag) {
      default: return css`font-size: 3rem;`;
      case 2: return css`font-size: 2rem;`;
      case 3: return css`font-size: 1.5rem;`;
      case 4: return css`font-size: 1.3rem;`;
    }
  }
}
  margin-bottom: 10px;
  ${({ center }) => center && css`
    text-align: center;
  `}
`;
