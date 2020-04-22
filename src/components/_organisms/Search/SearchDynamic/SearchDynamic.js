import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../../_atoms/Text';
import {
  Box,
  Close,
  CloseButton,
  Field,
  Input,
  InputContainer,
  Search,
  SearchButton,
  Wrapper,
} from './SearchDynamic.style';

const SearchDynamic = ({
  Text,
  onSearchClick,
  onCloseClick,
  isExtended,
  handlers,
}) => (
  <Wrapper>
    <Box>
      <CloseButton
        onClick={() => { onCloseClick(); handlers.setSearchValue(''); }}
      >
        <Close isExtended={isExtended} />
      </CloseButton>
      <InputContainer isExtended={isExtended}>
        <Field>
          <Input
            type="text"
            placeholder={Text.get('placeholder')}
            value={handlers.searchValue}
            onChange={handlers.handleChange}
            onKeyDown={handlers.handleKeyPress}
          />
        </Field>
      </InputContainer>
      <SearchButton
        onClick={isExtended ? handlers.handleSearch : onSearchClick}
      >
        <Search />
      </SearchButton>
    </Box>
  </Wrapper>
);

SearchDynamic.propTypes = {
  Text: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool.isRequired,
  handlers: PropTypes.shape().isRequired,
};

export default withText('Meta.Search')(SearchDynamic);

// setInputStyle(isExtended ? style.inputContainer : style.inputHide);
