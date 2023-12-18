import { Flex, Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

export default function AdminPanel() {
  return (
    <Flex h="100vh">
      <Box w="12rem" bg="gray.800">
        <SideNav />
      </Box>
      <Flex direction="column" w="100%">
        <Box bg="gray.900" color="white" px="12rem" py="4" position="sticky" top="0" zIndex="1">
          <Heading as="h1" fontSize="4xl" textAlign="center" color="#ecbc4c">
            Panel de Administración
          </Heading>
        </Box>
        <Box px="12rem" py="4" flex="1" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

