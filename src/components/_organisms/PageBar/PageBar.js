import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../_atoms/Text';
import Paragraph from '../../styled/Paragraph';
import {
  PageCounter,
  StyledButton,
  Wrapper,
} from './PageBar.style';

const PageBar = ({
  Text, hidePrev, hideNext, onPrevClick, onNextClick, pageNum,
}) => (
  <Wrapper>
    <StyledButton disabled={hidePrev} onClick={onPrevClick}>
      <Paragraph dark>
        <Text path="Prev" />
      </Paragraph>
    </StyledButton>
    <PageCounter>
      <Paragraph>
        {pageNum}
      </Paragraph>
    </PageCounter>
    <StyledButton disabled={hideNext} onClick={onNextClick}>
      <Paragraph dark>
        <Text path="Next" />
      </Paragraph>
    </StyledButton>
  </Wrapper>
);

PageBar.propTypes = {
  Text: PropTypes.func.isRequired,
  hidePrev: PropTypes.bool,
  hideNext: PropTypes.bool,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  pageNum: PropTypes.number,
};

PageBar.defaultProps = {
  hidePrev: true,
  hideNext: true,
  onPrevClick: () => {},
  onNextClick: () => {},
  pageNum: 1,
};

export default withText('Meta.PageBar')(PageBar);
