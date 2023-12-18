import { Card, CardHeader, CardBody, Heading, Divider } from "@chakra-ui/react";
import { ServiceStatisticsTable } from "./ServiceStatisticsTable";
import { ServiceSalesGraph } from "./ServiceSalesGraph";

export function ServiceStatistics() {
  return (
    <Card align='center' bg="gray.800" color="white" boxShadow="md" p="6" m="4">
      <CardHeader>
        <Heading size='md' color="#ecbc4c">Servicios</Heading>
      </CardHeader>
      <CardBody>
        <ServiceStatisticsTable />
        <Divider colorScheme="yellow" />
        <ServiceSalesGraph />
      </CardBody>
    </Card>
  );
};

