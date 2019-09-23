import PropTypes from 'prop-types';
import React from 'react';

import style from './ResponsiveDivider.css';

const ResponsiveDivider = ({ FirstSection, SecondSection, ThirdSection }) => {
  const flexType = ThirdSection ? style.Thirds : style.Halfed;
  return (
    <div className={style.Wrapper}>
      <div className={`${style.Content} ${flexType}`}>
        {FirstSection}
      </div>
      <div className={`${style.Content} ${flexType}`}>
        {SecondSection}
      </div>
      {ThirdSection && (
      <div className={`${style.Content} ${flexType}`}>
        {ThirdSection}
      </div>
      )}
    </div>
  );
};

ResponsiveDivider.propTypes = {
  FirstSection: PropTypes.node,
  SecondSection: PropTypes.node,
  ThirdSection: PropTypes.node,
};

ResponsiveDivider.defaultProps = {
  FirstSection: null,
  SecondSection: null,
  ThirdSection: null,
};


export default ResponsiveDivider;
