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
    {Object.entries(structure).map((d) => {
      if (start <= d[0] && d[0] < start + max) {
        if ((filter === d[1].catagory || filter === '')) {
          return (
            <Wrapper key={`${d[1].title}${d[0]}`} to={d[1].link}>
              <Image src={Images[d[1].image] || Me} />
              <TextRegion>
                <Title>{d[1].title}</Title>
                <Paragraph>{`${d[1].date} - ${d[1].description}`}</Paragraph>
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
