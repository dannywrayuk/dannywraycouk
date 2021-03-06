import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import contents from '../../../../../text/Physics/Contents.json';
import Background from '../../../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import FetchMarkdown from '../../../../_organisms/FetchMarkdown';
import BigTitle from '../../../../styled/BigTitle';
import Paragraph from '../../../../styled/Paragraph';
import Ruler from '../../../../styled/Ruler';
import * as Images from './content/Images';
import * as Posts from './content/Posts';
import {
  ContentContainer,
  Date,
} from './PhysicsPost.style';

import postStyle from './content/styles.css';

const PhysicsPost = ({ category, section, post }) => {
  const { title, date, description } = contents[category][section].posts[post];
  return (
    <Background image={backgroundimage}>
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <ResponsiveDivider>
              <ResponsiveElement>
                <BigTitle center>
                  {title}
                </BigTitle>
                <Date center>{date || ''}</Date>
                <Paragraph center>{description || ''}</Paragraph>
                <Ruler />
              </ResponsiveElement>
            </ResponsiveDivider>
            <ContentContainer>
              <FetchMarkdown
                containerName={postStyle.contentContainer}
                location={Posts[post]}
                auxData={Images}
                styleData={postStyle}
              />
            </ContentContainer>
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};


PhysicsPost.propTypes = {
  category: PropTypes.string,
  section: PropTypes.string,
  post: PropTypes.string,
};

PhysicsPost.defaultProps = {
  category: '',
  section: '',
  post: '',
};

export default PhysicsPost;
