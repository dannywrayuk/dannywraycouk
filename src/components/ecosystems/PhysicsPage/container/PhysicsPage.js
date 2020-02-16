import React from 'react';
import PropTypes from 'prop-types';

import Contents from '../../../../text/Physics/Contents.json';
import * as Posts from '../../../../text/Physics/Posts.js';
import ErrorPage from '../../ErrorPage';
import PhysicsPageMain from '../presentation/PhysicsPageMain';
import PhysicsPostPage from '../presentation/PhysicsPostPage';
import PhysicsSectionPage from '../presentation/PhysicsSectionPage';

const PhysicsPage = (props) => {
  const { match: { params: { section, post } } } = props;
  const sectionExist = Contents[section] !== undefined;

  let page;
  if (section === undefined) {
    page = <PhysicsPageMain {...props} />;
  } else if (post === undefined && sectionExist) {
    page = <PhysicsSectionPage {...props} />;
  } else if (sectionExist && Posts[post] !== undefined) {
    page = <PhysicsPostPage {...props} />;
  } else {
    page = <ErrorPage {...props} />;
  }
  return page;
};

PhysicsPage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};

export default PhysicsPage;
