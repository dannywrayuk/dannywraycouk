import React from 'react';
import { Breakpoint } from 'react-socks';
import HeaderDesktop from '../presentation/HeaderDesktop';
import HeaderMobile from '../presentation/HeaderMobile';

const Header = () => (
  <>
    <Breakpoint medium up>
      <HeaderDesktop />
    </Breakpoint>
    <Breakpoint small down>
      <HeaderMobile />
    </Breakpoint>
  </>
);


export default Header;
