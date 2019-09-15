import React from 'react';
import propTypes from 'prop-types';
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

const mapStateToProps = ({ HomePageReducer }) => ({
  stage: HomePageReducer.stage,
});

export default connect(mapStateToProps)(HomePage);
