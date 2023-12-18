import { Card, CardHeader, CardBody, Heading, Divider } from "@chakra-ui/react";
import { ProductStatisticsTable } from "./ProductStatisticsTable";
import { BestProduct } from "./BestProduct";

export function ProductStatistics() {
  return (
    <Card align='center' bg="gray.800" color="white" boxShadow="md" p="6" m="4" rounded="lg">
      <CardHeader>
        <Heading size='md' color="#ecbc4c">Productos</Heading>
      </CardHeader>
      <CardBody>
        <ProductStatisticsTable />
        <Divider colorScheme="yellow" />
        <BestProduct />
      </CardBody>
    </Card>
  );
};
