import {
  Card, CardBody, CardFooter, ButtonGroup, Button, Image, Stack, Heading, HStack, Tag, Stat, StatNumber, Divider, Text
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../store/reducer/cartSlice';

// Check if product already exists in cart

export default function CardProduct({ title, imageUrl, price, tags, description }) {
  const dispatch = useDispatch();
  const cart = useSelector(s => s.cart);
  const isProductInCart = cart.some(item => item.title === title);
  const handleAddCart = () => {
    return dispatch(addProduct({
      title,
      imageUrl,
      price,
      tags,
      description
    }))
  }
  return (
    <li key={title} className="flex flex-col w-auto gap-2">
      <Card maxW='sm'>
        <CardBody style={{ paddingBottom: 0 }}>
          <Image
            src={imageUrl}
            alt={"Product Image" + title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='xs'>{title}</Heading>
            <HStack>
              {tags.map(t => (
                <Tag size={"sm"} key={t.body} variant='solid' colorScheme='green'>{t.body}</Tag>
              ))}
            </HStack>
            <Stat color="blue.800">
              <StatNumber>$ {price}</StatNumber>
            </Stat>
          </Stack>
        </CardBody>
        <CardFooter style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 0 }}>
          <Text cursor="pointer" fontSize='xs' textDecor="underline" textAlign="end">Ver detalle</Text>
          <Button onClick={handleAddCart} variant='solid' size="sm" fontSize="sm" bg='blue.800' color='white' disabled={isProductInCart}>
            Añadir al Carrito
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
}
