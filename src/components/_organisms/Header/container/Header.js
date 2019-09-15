import React from 'react';
import { Breakpoint } from 'react-socks';
import HeaderDesktop from '../presentation/HeaderDesktop';
import HeaderMobile from '../presentation/HeaderMobile';

const Header = () => (
  <>
    <Breakpoint large up>
      <HeaderDesktop />
    </Breakpoint>
    <Breakpoint medium only>
      <HeaderDesktop Tablet />
    </Breakpoint>
    <Breakpoint small down>
      <HeaderMobile />
    </Breakpoint>
  </>
);


export default Header;
