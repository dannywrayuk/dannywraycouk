import React from 'react';
import propTypes from 'prop-types';

import AppConstants from '../../../../utilities/AppConstants';
import HomePageMain from '../presentation/HomePageMain';

const HomePage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.HomePage;
  const stageSelector = {
    [STAGES.MAIN]: <HomePageMain {...props} />,
    [STAGES.ERROR]: <HomePageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

HomePage.propTypes = {
  stage: propTypes.string.isRequired,
};

export default HomePage;
