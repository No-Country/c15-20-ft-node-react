import { Divider, Text, useDisclosure } from "@chakra-ui/react";
import FilterModal from "./storeComponents/FilterModal";
import ListProduct from "./storeComponents/ListProducts";
import SearchBar from "./storeComponents/SearchBar";

export default function StorePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
      {isOpen && <FilterModal isOpen={isOpen} onClose={onClose} />}
      <SearchBar onOpen={onOpen} />
      <Divider />
      <Text>Mostrando 1-12 de 18 productos</Text>
      <ListProduct />
    </div>
  );
}
