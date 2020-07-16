import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../images/svg/background.svg';
import Contents from '../../../text/Posts/Contents.json';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import FetchMarkdown from '../../_organisms/FetchMarkdown';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';
import Ruler from '../../styled/Ruler';
import Error from '../Error';
import * as Images from './content/Images';
import * as Posts from './content/Posts';
import {
  ContentContainer,
  Date,
} from './Post.style';

import postStyle from './content/styles.css';

const Post = (props) => {
  const { match: { params: { post } } } = props;
  const data = Contents.find(element => element.link === `post/${post}`);
  if (data === undefined) return <Error />;
  const { title, date, description } = data;
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

Post.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withText('Post')(Post);
