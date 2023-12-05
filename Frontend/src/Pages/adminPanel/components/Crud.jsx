import { ProductSection } from "./ProductSection";
import { RequestSection } from "./RequestSection";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export default function Crud() {
  return <div>
    <Tabs>
  <TabList>
    <Tab>Servicios</Tab>
    <Tab>Productos</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    < RequestSection />
    </TabPanel>
    <TabPanel>
    < ProductSection />
    </TabPanel>
  </TabPanels>
</Tabs>    
  </div>;
};