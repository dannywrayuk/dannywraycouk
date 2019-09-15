import React from 'react';
import propTypes from 'prop-types';
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

const mapStateToProps = ({ MorePageReducer }) => ({
  stage: MorePageReducer.stage,
});

export default connect(mapStateToProps)(MorePage);
