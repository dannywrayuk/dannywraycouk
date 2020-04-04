import React from 'react';
import PropTypes from 'prop-types';

import Contents from '../../../../text/Physics/Contents.json';
import Error from '../../Error';
import PhysicsMain from '../presentation/PhysicsMain';
import PhysicsPost from '../presentation/PhysicsPost';
import * as Posts from '../presentation/PhysicsPost/content/Posts';
import PhysicsSection from '../presentation/PhysicsSection';

const Physics = (props) => {
  const { match: { params: { section, post } } } = props;
  const sectionExist = Contents[section] !== undefined;

  let page;
  if (section === undefined) {
    page = <PhysicsMain {...props} />;
  } else if (post === undefined && sectionExist) {
    page = <PhysicsSection {...props} />;
  } else if (sectionExist && Posts[post] !== undefined) {
    page = <PhysicsPost {...props} />;
  } else {
    page = <Error {...props} />;
  }
  return page;
};

Physics.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};

export default Physics;
