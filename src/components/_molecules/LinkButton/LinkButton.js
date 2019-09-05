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
  children: PropType.node,
};

LinkButton.defaultProps = {
  children: null,
};

export default LinkButton;
