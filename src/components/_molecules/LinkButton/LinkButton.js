import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import AbstractElement from '../../_atoms/AbstractElement';

import style from './LinkButton.css';

const LinkButton = ({
  children,
  className,
  ...props
}) => (
  <AbstractElement
    as={Link}
    className={`${style.LinkButton} ${className}`}
    {...props}
  >
    {children}
  </AbstractElement>
);

LinkButton.propTypes = {
  children: PropType.node,
  className: PropType.string,
};

LinkButton.defaultProps = {
  children: null,
  className: null,
};

export default LinkButton;
