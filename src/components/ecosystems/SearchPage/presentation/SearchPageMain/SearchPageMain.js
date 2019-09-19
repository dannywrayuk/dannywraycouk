import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


const SearchPageMain = ({ Text: text, match }) => {
  const searchTerm = match.params.term;

  return (
    <>
      <Head title={text({ path: 'defaultTitle' })} />
      <p>{searchTerm}</p>
    </>
  );
};

SearchPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
};

export default withText('Meta')(SearchPageMain);
