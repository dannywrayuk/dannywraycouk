import React, { useContext } from 'react';

import { ReactComponent as SvgMoon } from '../../../images/svg/moon.svg';
import { ReactComponent as SvgSun } from '../../../images/svg/sun.svg';
import { ThemeContext } from '../../../utilities/ThemeContext';
import { Icon, ToggleButton, Wrapper } from './DarkModeButton.style';

const DarkModeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <ToggleButton onClick={toggleTheme}>
        <Icon as={theme === 'light' ? SvgSun : SvgMoon} />
      </ToggleButton>
    </Wrapper>
  );
};


export default DarkModeButton;
