import React from 'react';
import PropTypes from 'prop-types';

import Me from '../../../images/png/me.png';
import * as Images from '../../environments/Post/content/images';
import Paragraph from '../../styled/Paragraph';
import Title from '../../styled/Title';
import {
  Image,
  TextRegion,
  Wrapper,
} from './PostList.style';

const PostList = ({
  structure, filter, start, max,
}) => (
  <div>
    {Object.entries(structure).map(([id, data]) => {
      if (start <= id && id < start + max) {
        if ((filter === data.catagory || filter === '')) {
          return (
            <Wrapper key={`${data.title}${id}`} to={data.link}>
              <Image src={Images[data.image] || Me} />
              <TextRegion>
                <Title>{data.title}</Title>
                <Paragraph>{`${data.date} - ${data.description}`}</Paragraph>
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
