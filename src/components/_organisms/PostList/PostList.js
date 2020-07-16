import React from 'react';
import PropTypes from 'prop-types';

import DefaultImage from '../../../images/png/logoicon_square.png';
import * as Images from '../../environments/Post/content/Images';
import Paragraph from '../../styled/Paragraph';
import SmallTitle from '../../styled/SmallTitle';
import {
  Image,
  Stripe,
  TextRegion,
  Wrapper,
} from './PostList.style';

const PostList = ({
  structure, filter, start, max,
}) => (
  <div>
    {Object.entries(structure).map(([id, data]) => {
      if (start <= id && id < start + max) {
        if ((filter === data.category || filter === '')) {
          return (
            <Wrapper key={`${data.title}${id}`} to={data.link || ''}>
              <Stripe>
                <Image src={Images[data.image] || DefaultImage} />
              </Stripe>
              <TextRegion>
                <SmallTitle>{data.title}</SmallTitle>
                <Paragraph>{data.date}</Paragraph>
                <Paragraph>{data.description}</Paragraph>
              </TextRegion>
            </Wrapper>
          );
        }
      }
      return null;
    })}
  </div>
);

PostList.propTypes = {
  structure: PropTypes.array.isRequired,
  filter: PropTypes.string,
  max: PropTypes.number,
  start: PropTypes.number,
};

PostList.defaultProps = {
  filter: '',
  start: 0,
  max: 5,
};

export default PostList;
