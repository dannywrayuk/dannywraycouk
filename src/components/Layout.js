import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./Logo";
import FadeOnScroll from "./FadeOnScroll";
import { MenuDraw, MenuDrawContent } from "./MenuDraw";
import PagePadding from "./PagePadding";
import Footer from "./Footer";

const Layout = ({
  useLogo,
  logoFadeSettings = { start: 0, stop: 0.3, responsive: true },
  useMenu,
  usePadding,
  useFooter,
  children,
}) => {
  const responsiveLogoFadeSettings = logoFadeSettings.responsive
    ? useBreakpointValue({ base: {}, md: { start: 0, stop: 0 } })
    : {};
  return (
    <>
      {useLogo && (
        <FadeOnScroll {...logoFadeSettings} {...responsiveLogoFadeSettings}>
          <Logo />
        </FadeOnScroll>
      )}
      {useMenu && (
        <MenuDraw>
          <MenuDrawContent />
        </MenuDraw>
      )}
      <Flex minH="100vh" flexDirection="column">
        <Flex flexGrow={1}>
          {usePadding ? <PagePadding>{children}</PagePadding> : children}
        </Flex>
        {useFooter && <Footer />}
      </Flex>
    </>
  );
};

export default Layout;
