import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../../utilities/AppConstants';
import ErrorPage from '../../ErrorPage';
import PhysicsPageMain from '../presentation/PhysicsPageMain';
import PhysicsSectionPage from '../presentation/PhysicsSectionPage';

const PhysicsPage = (props) => {
  const { match } = props;
  const { section } = match.params;
  const { SECTIONS } = AppConstants.Physics;

  let page;
  if (section === undefined) {
    page = <PhysicsPageMain {...props} />;
  } else if (section.toUpperCase() in SECTIONS) {
    page = <PhysicsSectionPage {...props} />;
  } else {
    page = <ErrorPage {...props} />;
  }
  return page;
};

PhysicsPage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};

PhysicsPage.defaultProps = {
  match: { params: { section: 0 } },
  params: { section: 0 },
};

export default PhysicsPage;
