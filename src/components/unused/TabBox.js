import { Text, Flex, Box, Button } from "@components/core";
import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div({
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.5em",
  overflow: "hidden",
});

export const TabBox = ({ children, tabNames = [] }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const Tabs = React.Children.toArray(children);
  return (
    <Wrapper>
      <Flex _css={{ background: "var(--color-bg-muted)" }}>
        {tabNames.map((t, id) => (
          <Button
            onClick={() => setCurrentTab(id)}
            px="15px"
            _css={{
              background: currentTab === id ? "var(--color-bg-default)" : "",
              borderRadius: "0.5em 0.5em 0 0",
            }}
          >
            <Text>{t}</Text>
          </Button>
        ))}
      </Flex>
      {Tabs[currentTab]}
    </Wrapper>
  );
};

export const Tab = ({ children }) => <Box p="15px">{children}</Box>;
