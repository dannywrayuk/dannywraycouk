import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import AbstractElement from '../../_atoms/AbstractElement';


const LinkButton = ({
  children,
  ...props
}) => (
  <AbstractElement
    as={Link}
    {...props}
  >
    {children}
  </AbstractElement>
);

LinkButton.propTypes = {
  to: PropType.string,
  children: PropType.node,
  style: PropType.shape({}),
};

LinkButton.defaultProps = {
  to: null,
  children: null,
  style: null,
};

export default LinkButton;
