import { Editable, EditablePreview, EditableInput, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../../../store/reducer/productSlice';

export default function SearchBar({ onOpen }) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(filterProduct({
      query: searchValue,
      tags: []
    }))
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-2/3 flex gap-4">
        <Editable placeholder='Filtrar por nombre' colorScheme="gray.500" borderColor="gray.500" className="w-2/3 border-[1px] border-solid px-4 py-1 rounded-lg text-[#4A5568]">
          <EditablePreview />
          <EditableInput onChange={handleSearchChange} />
        </Editable>
        <Button colorScheme="green" className="rounded-lg p-0" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 p-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </Button>
      </div>
      <Button onClick={onOpen} variant='outline' colorScheme="gray.500" fontWeight={400} className="flex gap-2 rounded-lg text-[#4A5568]">
        <svg fill="#4A5568" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" role="img" className="icon filter-icon icon-14">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"></path>
        </svg>
        Filtros
      </Button>
    </div>
  );
}
