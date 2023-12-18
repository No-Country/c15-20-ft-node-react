import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  CheckboxGroup,
  Checkbox
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAdvanced } from '../../../store/reducer/productSlice';
import { useState } from 'react';

export default function FilterModal({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const getMinPrice = () => filteredProducts.length ? Math.min(...filteredProducts.map((product) => product.price))
    : Math.min(...allProducts.map((product) => product.price));

  const getMaxPrice = () => filteredProducts.length ? Math.max(...filteredProducts.map((product) => product.price))
    : Math.max(...allProducts.map((product) => product.price));

  const { tags, allProducts, filteredProducts, price } = useSelector(s => s.products);

  const [priceSelected, setPrice] = useState({ min: getMinPrice(), max: getMaxPrice() })
  const [tagsSelected, setTags] = useState([tags])

  const handleClick = () => {
    console.log(priceSelected)
    dispatch(filterAdvanced({
      price: priceSelected,
      tags
    }))
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filtros</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col gap-2 mb-4">
            <Text>Precio</Text>
            <RangeSlider defaultValue={[price.min ?? priceSelected.min, price.max ?? priceSelected.max]} min={getMinPrice()} max={getMaxPrice()} step={50} onChangeEnd={(val) => setPrice({
              min: val[0],
              max: val[1]
            })}>
              <RangeSliderTrack bg='green.100'>
                <RangeSliderFilledTrack bg='green' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Text>Tags</Text>
            <CheckboxGroup colorScheme='green' defaultValue={[tagsSelected]}>
              <Stack spacing={[1, 5]} style={{ display: "grid", gridTemplateColumns: "2, 1fr" }}>
                {tags.map(t => <Checkbox key={t} value={t}>{t}</Checkbox>)}
              </Stack>
            </CheckboxGroup>
          </div>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="space-between">
          <Button variant='ghost' fontSize="xs" className="underline" >Limpiar Filtros</Button>
          <ButtonGroup>
            <Button size="sm" colorScheme='blue' variant='outline' onClick={onClose}>
              Cerrar
            </Button>
            <Button size="sm" colorScheme='blue' onClick={handleClick}>
              Aplicar
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};