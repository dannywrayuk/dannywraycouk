import React from 'react';
import PropTypes from 'prop-types';

import contents from '../../../text/Physics/Contents.json';
import Accordion from '../Accordion';

import style from './Contents.css';

const Contents = ({ catagory }) => (
  <div className={style.contents}>
    {Object.entries(contents[catagory]).map((d) => (
      <Accordion key={`${catagory}${d[0]}`} structure={d} />
    ))}
  </div>
);

Contents.propTypes = {
  catagory: PropTypes.string.isRequired,
};


export default Contents;
