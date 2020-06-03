import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../theme';
import useDarkMode from '../useDarkMode';

const ThemeContext = React.createContext(['light', () => {}]);

const ThemeProvider = ({ children }) => {
  const themeHook = useDarkMode();
  const { theme, componentMounted } = themeHook;
  return (
    <ThemeContext.Provider value={themeHook}>
      <StyledProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {componentMounted ? children : <div /> }
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export { ThemeContext, ThemeProvider };
