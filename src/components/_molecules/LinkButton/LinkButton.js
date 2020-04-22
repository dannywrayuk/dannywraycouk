import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledElement } from './LinkButton.style';

const LinkButton = ({
  children,
  ...props
}) => (
  <StyledElement
    as={Link}
    {...props}
  >
    {children}
  </StyledElement>
);

LinkButton.propTypes = {
  children: PropType.node,
};

LinkButton.defaultProps = {
  children: null,
};

export default LinkButton;
