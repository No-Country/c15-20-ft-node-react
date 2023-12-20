import { Text, Box } from "@chakra-ui/react"

export function BestProduct(){

    //sacar los tres mejores productos y definirlos o algo así

    return(
        <Box p={4} rounded="md" shadow="md" textAlign="center" bg="gray.700">
            <Text fontSize="xl" fontWeight="bold" mb={4}>Mejor Producto</Text>
            <Text>Nombre del producto</Text>
        </Box>
    )
};