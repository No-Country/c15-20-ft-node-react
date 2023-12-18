import { ProductSection } from "./ProductSection";
import { RequestSection } from "./RequestSection";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Grid } from '@chakra-ui/react';

export default function Crud() {
  return (
    <Tabs variant="enclosed" colorScheme="yellow">
      <TabList mb="4" bg="gray.700" minWidth="100%">
        <Tab>Servicios</Tab>
        <Tab>Productos</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Grid placeItems="center" minH="300px">
            <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md" minWidth="100%">
              <RequestSection />
            </Box>
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid placeItems="center" minH="300px">
            <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md" minWidth="100%">
              <ProductSection />
            </Box>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

