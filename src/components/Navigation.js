import styled from "@emotion/styled";
import { Box, Flex, Link, Button } from "@style-system";
import React from "react";
import { IoMenu } from "react-icons/io5";

const NavItem = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: 85,
});

export const Navigation = () => (
  <Flex justifyContent="space-between" pt={45} px={10}>
    <NavItem>
      <Link variant="Logo" href="/" width="max-content" mr="auto">
        danny.
      </Link>
    </NavItem>
    <Flex as="nav" w={460} justifyContent="space-between">
      <NavItem>
        <Link
          variant="Navigation"
          href="/sticker-sheet"
          w="max-content"
          mr="auto"
        >
          Thoughts
        </Link>
      </NavItem>
      <NavItem>
        <Link
          variant="Navigation"
          href="/sticker-sheet"
          w="max-content"
          mx="auto"
        >
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          variant="Navigation"
          href="/sticker-sheet"
          w="max-content"
          ml="auto"
        >
          About
        </Link>
      </NavItem>
    </Flex>
    <NavItem>
      <Button mx="auto" onClick={() => alert("hey")}>
        <Box as={IoMenu} size={22} color="text" />
      </Button>
    </NavItem>
  </Flex>
);
