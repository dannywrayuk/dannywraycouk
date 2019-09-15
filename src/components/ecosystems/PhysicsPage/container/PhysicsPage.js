import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import AppConstants from '../../../../utilities/AppConstants';
import PhysicsPageMain from '../presentation/PhysicsPageMain';


const PhysicsPage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.Physics;
  const stageSelector = {
    [STAGES.MAIN]: <PhysicsPageMain {...props} />,
    [STAGES.ERROR]: <PhysicsPageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

PhysicsPage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.PhysicsPage,
});

export default connect(mapStateToProps)(PhysicsPage);
