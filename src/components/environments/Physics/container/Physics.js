import React from 'react';
import PropTypes from 'prop-types';

import Contents from '../../../../text/Physics/Contents.json';
import Redirector from '../../../_atoms/Redirector';
import PhysicsCategory from '../presentation/PhysicsCategory';
import PhysicsMain from '../presentation/PhysicsMain';
import PhysicsPost from '../presentation/PhysicsPost';
import * as Posts from '../presentation/PhysicsPost/content/Posts';

const Physics = (props) => {
  const { match: { params: { category, section, post } } } = props;
  const categoryExist = Contents[category] !== undefined;

  let page;
  if (category === undefined) {
    page = <PhysicsMain {...props} />;
  } else if (post === undefined && categoryExist) {
    page = <PhysicsCategory {...props} category={category} />;
  } else if (categoryExist && Posts[post] !== undefined) {
    page = <PhysicsPost {...props} category={category} section={section} post={post} />;
  } else {
    page = <Redirector {...props} />;
  }
  return page;
};

Physics.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};

export default Physics;
