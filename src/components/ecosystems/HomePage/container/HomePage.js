import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import appConstants from '../../../../utilities/AppConstants';
import HomePageMain from '../presentation/HomePageMain';


const HomePage = (props) => {
  const { stage } = props;
  const { STAGES } = appConstants.HomePage;
  const stageSelector = {
    [STAGES.MAIN]: <HomePageMain {...props} />,
    [STAGES.ERROR]: <HomePageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

HomePage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.HomePage,
});

export default connect(mapStateToProps)(HomePage);
