import { Box, Flex, Button, useBreakpointValue } from "@chakra-ui/react";
import { BsCommand } from "react-icons/bs";
import { SubTitle } from "./Text";
import Link from "./Link";
import { Logo } from "./Logo";
import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

const StyledLink = ({ href, children, ...rest }) => (
  <Link
    href={href}
    transition="0.5s"
    _hover={{ color: "gray.400" }}
    _focus={{ borderBox: "none" }}
    {...rest}
  >
    <SubTitle>{children}</SubTitle>
  </Link>
);

export const Navigation = ({ current, menuOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const showBannerView = useBreakpointValue({ base: true, md: false });
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setScrollProgress(value);
    });
  }, [scrollYProgress]);
  return (
    <Box
      position="fixed"
      zIndex={99}
      transition="0.5s"
      w="100%"
      top={0}
      px={{ base: 5, md: 10 }}
      pb={{ base: 2, md: 10 }}
      pt={{ base: scrollProgress > 0 ? 2 : 5, md: 10 }}
      backgroundColor={
        showBannerView && scrollProgress > 0 ? "gray.800" : "none"
      }
      opacity={0.9}
      boxShadow={
        showBannerView && scrollProgress > 0
          ? "0 0 20px -5px rgba(0,0,0,0.7);"
          : "none"
      }
    >
      <Flex justifyContent="space-between">
        <Logo />
        <Flex
          justifyContent="space-between"
          gridGap="60px"
          alignItems="center"
          pb={{ base: 0, md: "30px" }}
        >
          {showBannerView || (
            <>
              <StyledLink
                href="/thoughts"
                opacity={scrollProgress > 0 ? 0 : 1}
                pointerEvents={scrollProgress > 0 ? "none" : "inherit"}
              >
                thoughts
              </StyledLink>
              <StyledLink
                href="/"
                opacity={scrollProgress > 0 ? 0 : 1}
                pointerEvents={scrollProgress > 0 ? "none" : "inherit"}
              >
                projects
              </StyledLink>
              <StyledLink
                href="/"
                opacity={scrollProgress > 0 ? 0 : 1}
                pointerEvents={scrollProgress > 0 ? "none" : "inherit"}
              >
                about
              </StyledLink>
            </>
          )}
          <Button padding={0} onClick={menuOpen}>
            <Box as={BsCommand} w={6} h={6} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
