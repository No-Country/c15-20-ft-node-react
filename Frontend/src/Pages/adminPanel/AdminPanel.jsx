import { Flex, Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

export default function AdminPanel() {
  return (
    <Flex direction={{ base: "column", md: "row" }} minHeight="100vh" bg="gray.900">
      <Box w={{ base: "100%", md: "12rem" }} bg="gray.800" boxShadow="lg" marginTop={12}>
        <SideNav />
      </Box>
      <Flex direction="column" w="100%" marginTop={12}>
        <Box bg="gray.900" color="white" px={{ base: "4", md: "12" }} py="4" boxShadow="md">
          <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" color="#ecbc4c">
            Panel de Administración
          </Heading>
        </Box>
        <Box px={{ base: "4", md: "12" }} py="4" flex="1" overflowY="auto" boxShadow="xl">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

