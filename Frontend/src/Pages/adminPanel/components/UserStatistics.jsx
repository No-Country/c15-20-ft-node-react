import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

export function UserStatistics(){

    return (
      <Card align='center' bg="gray.800" color="white" boxShadow="md" p="6" m="4" rounded="lg">
        <CardHeader>
          <Heading size='md' color="#ecbc4c">Usuarios</Heading>
        </CardHeader>
        <CardBody>
          <div>Total de usuarios registrados y total de productos.</div>
        </CardBody>
      </Card>
    );
};
