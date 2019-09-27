import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './ShapeBlob.css';

const ShapeBlob = ({
  children, shadow, color, borderColor, size, square,
}) => {
  const [blobStyle, setBlobStyle] = useState(style.base);
  const [inlineStyle, setInlineStyle] = useState('');
  useEffect(() => {
    let mergeStyle = style.base;
    if (shadow) { mergeStyle += ` ${style.shadow}`; }
    if (borderColor) { mergeStyle += ` ${style.border}`; }
    if (!square) { mergeStyle += ` ${style.circle}`; }
    setBlobStyle(mergeStyle);
    setInlineStyle({
      backgroundColor: color,
      borderColor,
      width: size,
      height: size,
    });
  }, []);
  return (
    <div className={blobStyle} style={{ ...inlineStyle }}>
      <div className={style.align}>
        {children}
      </div>
    </div>
  );
};

ShapeBlob.propTypes = {
  children: PropTypes.node,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.string,
  square: PropTypes.bool,
};
ShapeBlob.defaultProps = {
  children: null,
  shadow: false,
  color: '#ffca1e',
  borderColor: '',
  size: '70px',
  square: false,
};

export default ShapeBlob;
