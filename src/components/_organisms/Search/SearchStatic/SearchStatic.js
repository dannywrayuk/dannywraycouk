import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../../_atoms/Text';
import {
  Box,
  ImageContainer,
  Input,
  Search,
} from './SearchStatic.style';

const SearchStatic = ({ Text, handlers }) => (
  <Box>
    <ImageContainer onClick={handlers.handleSearch}>
      <Search />
    </ImageContainer>
    <Input
      type="text"
      placeholder={Text.get('placeholder')}
      value={handlers.searchValue}
      onChange={handlers.handleChange}
      onKeyDown={handlers.handleKeyPress}
    />
  </Box>
);

SearchStatic.propTypes = {
  Text: PropTypes.func.isRequired,
  handlers: PropTypes.shape().isRequired,
};

export default withText('Meta.Search')(SearchStatic);
