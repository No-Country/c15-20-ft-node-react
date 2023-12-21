import { Text, Box } from "@chakra-ui/react"
import useProductOrderStore from "../../../store/productOrderStore"

export function BestProduct(){
    const productOrders = useProductOrderStore(state => state.productOrders);

    //sacar los tres mejores productos y definirlos o algo así
      // const orderTypeCounts = serviceOrders.reduce((total, order) => {
  //   total[order.orderType || 0] = (total[order.orderType] || 0) + 1;
  //   return total;
  // }, {});

  // const mostRepeatedType = Object.entries(orderTypeCounts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  // const maxCount = orderTypeCounts[mostRepeatedType];

    return(
        <Box p={4} rounded="md" shadow="md" textAlign="center" bg="gray.700">
            <Text fontSize="xl" fontWeight="bold" mb={4}>Mejor Producto</Text>
            <Text>Nombre del producto</Text>
        </Box>
    )
};