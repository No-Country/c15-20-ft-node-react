import { ProductOrderSection } from "./ProductOrderSection";
import { RequestsOrderSection } from "./RequestsOrderSection";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid } from '@chakra-ui/react';

export default function Log() {
  return (
    <Tabs variant="enclosed" colorScheme="yellow">
  <TabList mb="4" bg="gray.700" minWidth="100%">
    <Tab>Órdenes de servicios</Tab>
    <Tab>Órdenes de productos</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Grid placeItems="center" minH="300px">
        <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md" minWidth="100%">
        < RequestsOrderSection />
        </Box>
      </Grid>
    </TabPanel>
    <TabPanel>
    <Grid placeItems="center" minH="300px">
      <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md" minWidth="100%">
      < ProductOrderSection />
      </Box>
    </Grid>
    </TabPanel>
  </TabPanels>
</Tabs>    
  );
};
