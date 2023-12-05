import { useState } from "react";
import ListProduct from "./storeComponents/ListProducts";

export default function StorePage() {
  const [cart, setCart] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const handleAddCart = (e) => {
    e.preventDefault();
    const idProduct = e.target.id;
    // check if already include in cart
    if (!cart.includes(idProduct)) {
      const newCart = cart.slice();
      newCart.push(e.target.id);
      return setCart(newCart)
    }
  }

  return (
    <div className="container mx-auto px-6 py-6">
      {/* <SearchBar value={value} setValue={setValue} handleFilter={handleFilter} /> */}
      <ListProduct filteredList={filteredList} handleAddCart={handleAddCart} cart={cart} />
    </div>
  );
}
