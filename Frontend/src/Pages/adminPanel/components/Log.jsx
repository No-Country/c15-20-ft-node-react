import { ProductOrderSection } from "./ProductOrderSection";
import { RequestsOrderSection } from "./RequestsOrderSection";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export default function Log() {
  return <div>
    <Tabs>
  <TabList>
    <Tab>Servicios</Tab>
    <Tab>Productos</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    < RequestsOrderSection />
    </TabPanel>
    <TabPanel>
    < ProductOrderSection />
    </TabPanel>
  </TabPanels>
</Tabs>    
  </div>;
};
