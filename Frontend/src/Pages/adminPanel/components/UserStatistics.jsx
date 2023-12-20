import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { UserStatisticsTable } from "./UserStatisticsTable";

export function UserStatistics(){

    return (
      <Card align='center' bg="gray.800" color="white" boxShadow="md" p="6" m="4" rounded="lg">
        <CardHeader>
          <Heading size='md' color="#ecbc4c">Usuarios</Heading>
        </CardHeader>
        <CardBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          < UserStatisticsTable />
        </CardBody>
      </Card>
    );
};
