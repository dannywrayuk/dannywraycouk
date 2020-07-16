import React from 'react';
import PropTypes from 'prop-types';

import contents from '../../../text/Physics/Contents.json';
import Accordion from '../../_organisms/Accordion';

const Contents = ({ category }) => (
  <>
    {Object.entries(contents[category]).map((d) => (
      <Accordion key={`${category}${d[0]}`} structure={d} />
    ))}
  </>
);

Contents.propTypes = {
  category: PropTypes.string.isRequired,
};


export default Contents;
