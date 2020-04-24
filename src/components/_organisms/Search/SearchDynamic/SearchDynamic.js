import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../../_atoms/Text';
import Button from '../../../_molecules/Button';
import AlignCenter from '../../../styled/AlignCenter';
import {
  Box,
  Close,
  Field,
  Input,
  InputContainer,
  Search,
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
      <AlignCenter
        as={Button}
        onClick={() => { onCloseClick(); handlers.setSearchValue(''); }}
      >
        <Close isExtended={isExtended} />
      </AlignCenter>
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
      <AlignCenter
        onClick={isExtended ? handlers.handleSearch : onSearchClick}
      >
        <Search />
      </AlignCenter>
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
