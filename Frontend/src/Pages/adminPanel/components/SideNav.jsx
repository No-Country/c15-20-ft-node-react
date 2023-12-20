import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SideNav() {
  const linkStyle = {
    display: "block",
    padding: "8px",
    borderRadius: "4px",
    _hover: { bg: 'gray.700' },
  };

  return (
    <Box h="100%" w="12rem" bg="gray.800" color="#ecbc4c" p="4">
      <ul className="flex flex-col space-y-2">
        <li>
          <ChakraLink as={Link} to="/admin" {...linkStyle}>General</ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/admin/crud" {...linkStyle}>Productos y servicios</ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/admin/log" {...linkStyle}>Órdenes</ChakraLink>
        </li>
      </ul>
    </Box>
  );
};