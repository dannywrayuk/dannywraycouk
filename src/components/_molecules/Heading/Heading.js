import React from 'react';
import PropTypes from 'prop-types';

import style from './Heading.css';

const Heading = ({
  children, level, className, center,
}) => {
  const Tag = `h${level}`;
  const merged = `${center ? style.HeadingCenter : style.Heading} ${className}`;
  return (
    <Tag className={merged}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  center: PropTypes.bool,
};

Heading.defaultProps = {
  children: null,
  level: 1,
  className: null,
  center: false,
};

export default Heading;
