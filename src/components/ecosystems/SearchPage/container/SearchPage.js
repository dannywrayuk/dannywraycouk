import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import AppConstants from '../../../../utilities/AppConstants';
import SearchPageMain from '../presentation/SearchPageMain';

const SearchPage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.Search;
  const stageSelector = {
    [STAGES.MAIN]: <SearchPageMain {...props} />,
    [STAGES.ERROR]: <SearchPageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

SearchPage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.SearchPage,
});

export default connect(mapStateToProps)(SearchPage);
