import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import appConstants from '../../../../utilities/AppConstants';
import HomePageMain from '../presentation/HomePageMain';

const HomePage = (props) => {
  const { stage } = props;
  const { STAGES } = appConstants.HomePage;
  switch (stage) {
    case STAGES.MAIN:
      return (
        <HomePageMain {...props} />
      );
    default:
      return (
        <HomePageMain {...props} />
      );
  }
};

HomePage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ HomePageReducer }) => ({
  stage: HomePageReducer.stage,
});

export default connect(mapStateToProps)(HomePage);
