import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Footer,
  Topper,
} from './Card.style';

const Card = ({ children, topper }) => (
  <>
    {topper && <Topper />}
    <Container>
      {children}
    </Container>
  </>
);

Card.propTypes = {
  children: PropTypes.node,
  topper: PropTypes.bool,
};
Card.defaultProps = {
  children: null,
  topper: false,
};

const CardContent = ({ children }) => (
  <Content>
    {children}
  </Content>
);

CardContent.propTypes = {
  children: PropTypes.node,
};
CardContent.defaultProps = {
  children: null,
};

const CardFooter = ({ children }) => (
  <Footer>{children}</Footer>
);

CardFooter.propTypes = {
  children: PropTypes.node,
};
CardFooter.defaultProps = {
  children: null,
};

export { Card, CardContent, CardFooter };
