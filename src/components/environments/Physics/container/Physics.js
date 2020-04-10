import React from 'react';
import PropTypes from 'prop-types';

import Contents from '../../../../text/Physics/Contents.json';
import Error from '../../Error';
import PhysicsCatagory from '../presentation/PhysicsCatagory';
import PhysicsMain from '../presentation/PhysicsMain';
import PhysicsPost from '../presentation/PhysicsPost';
import * as Posts from '../presentation/PhysicsPost/content/Posts';

const Physics = (props) => {
  const { match: { params: { catagory, section, post } } } = props;
  const catagoryExist = Contents[catagory] !== undefined;

  let page;
  if (catagory === undefined) {
    page = <PhysicsMain {...props} />;
  } else if (post === undefined && catagoryExist) {
    page = <PhysicsCatagory {...props} catagory={catagory} />;
  } else if (catagoryExist && Posts[post] !== undefined) {
    page = <PhysicsPost {...props} catagory={catagory} section={section} post={post} />;
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
