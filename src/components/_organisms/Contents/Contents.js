import React from 'react';
import PropTypes from 'prop-types';

import contents from '../../../text/Physics/Contents.json';
import Accordion from '../Accordion';

import style from './Contents.css';

const Contents = ({ catagory }) => (
  <div className={style.contents}>
    {contents[catagory] && contents[catagory].length > 0 ? contents[catagory].map((d) => (
      <Accordion key={`${catagory}${d.title}`} structure={d} />
    )) : null }
  </div>
);

Contents.propTypes = {
  catagory: PropTypes.string.isRequired,
};


export default Contents;
