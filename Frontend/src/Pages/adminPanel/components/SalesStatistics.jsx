import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { SalesStatisticsGraph } from "./SalesStatisticsGraph";

export function SalesStatistics(){

    return (
      <Card align='center' bg="gray.800" color="white" boxShadow="md" p="6" m="4" rounded="lg">
        <CardHeader>
          <Heading size='md' color="#ecbc4c">Ventas</Heading>
        </CardHeader>
        <CardBody>
          <SalesStatisticsGraph />
        </CardBody>
      </Card>
    );
};
