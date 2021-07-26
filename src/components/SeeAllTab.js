import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
} from "@chakra-ui/react";
import IndexList from "./IndexList";

const SeeAllTab = ({ children, primaryTabName = "Featured", list }) => {
  const responsiveAlign = useBreakpointValue({ base: "center", sm: "end" });
  return (
    <Tabs align={responsiveAlign} variant="solid-rounded">
      <TabList>
        <Tab>{primaryTabName}</Tab>
        <Tab>See all</Tab>
      </TabList>
      <TabPanels textAlign="start">
        <TabPanel>{children}</TabPanel>
        <TabPanel>
          <IndexList list={list} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SeeAllTab;
