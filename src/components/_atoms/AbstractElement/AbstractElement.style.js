import { createElement } from 'react';

import styled from 'styled-components';

export const Element = styled(({ tag, children, ...props }) => createElement(tag, props, children))`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  &:focus {outline: none;}
  &::-moz-focus-inner {border: 0;}
`;
