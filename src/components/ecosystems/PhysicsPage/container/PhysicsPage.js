import React from 'react';
import propTypes from 'prop-types';

import AppConstants from '../../../../utilities/AppConstants';
import PhysicsPageMain from '../presentation/PhysicsPageMain';

const PhysicsPage = (props) => {
  const { match } = props;
  const searchTerm = match.params.section;
  console.log(searchTerm);
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

export default PhysicsPage;
