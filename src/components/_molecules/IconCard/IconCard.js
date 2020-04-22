import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../_atoms/Text';
import { Content, SubTitle, Wrapper } from './IconCard.style';

const IconCard = ({ Text, children, strings }) => (
  <Wrapper>
    {children}
    <Content>
      <div>
        <Text path={`${strings}.Heading`} />
      </div>
      <SubTitle>
        <Text path={`${strings}.SubHeading`} />
      </SubTitle>
    </Content>
  </Wrapper>
);

IconCard.propTypes = {
  Text: PropTypes.func.isRequired,
  children: PropTypes.node,
  strings: PropTypes.string.isRequired,
};

IconCard.defaultProps = {
  children: null,
};

export default withText()(IconCard);
