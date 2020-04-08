import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import contents from '../../../../../text/Physics/Contents.json';
import Background from '../../../../_atoms/BackgroundContainer';
import { ResponsiveDivider } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import FetchMarkdown from '../../../../_molecules/FetchMarkdown';
import Heading from '../../../../_molecules/Heading';
import { Card, CardContent } from '../../../../_organisms/Card';
import * as Images from './content/Images';
import * as Posts from './content/Posts';

import postStyle from './content/styles.css';

const PhysicsPost = ({ catagory, section, post }) => (
  <Background image={backgroundimage}>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <ResponsiveDivider>
            <Heading level={2}>
              {contents[catagory].find(s => s.link === `/${section}`).posts.find(p => p.link === `/${post}`).title}
            </Heading>
            <FetchMarkdown
              containerName={postStyle.contentContainer}
              location={Posts[post]}
              auxData={Images}
              styleData={postStyle}
            />
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);


PhysicsPost.propTypes = {
  catagory: PropTypes.string,
  section: PropTypes.string,
  post: PropTypes.string,
};

PhysicsPost.defaultProps = {
  catagory: '',
  section: '',
  post: '',
};

export default PhysicsPost;
