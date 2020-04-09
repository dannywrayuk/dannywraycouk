import React from 'react';
import PropTypes from 'prop-types';

import style from './ShapeBlob.css';

const ShapeBlob = ({
  className, children, shadow, square,
}) => {
  let mergeStyle = `${className} ${style.base}`;
  if (shadow) { mergeStyle += ` ${style.shadow}`; }
  if (!square) { mergeStyle += ` ${style.circle}`; }
  return (
    <div className={mergeStyle}>
      <div className={style.align}>
        {children}
      </div>
    </div>
  );
};

ShapeBlob.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shadow: PropTypes.bool,
  square: PropTypes.bool,
};
ShapeBlob.defaultProps = {
  className: '',
  children: null,
  shadow: false,
  square: false,
};

export default ShapeBlob;
