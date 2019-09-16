import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AppConstants from '../../../../utilities/AppConstants';
import MorePageMain from '../presentation/MorePageMain';


const MorePage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.Blog;
  const stageSelector = {
    [STAGES.MAIN]: <MorePageMain {...props} />,
    [STAGES.ERROR]: <MorePageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

MorePage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.MorePage,
});

export default connect(mapStateToProps)(MorePage);
