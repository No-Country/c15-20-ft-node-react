import { useEffect, useState } from "react";
import Carrito from "../components/carrito";
import * as TEMPLATES from '../mockups/templates';

const { templates } = TEMPLATES;

export default function Tienda() {
    // const [value, setValue] = useState("");
    const [cart, setCart] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    // const handleFilter = () => {
    //     const filteredItems = templates.filter(x => x.title.includes(value));
    //     console.log(filteredItems);
    //     setFilteredList(filteredItems);
    // }

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
        <>
            <nav className="w-full flex justify-between px-8 py-2">
                <p>Logo</p>
                <Carrito cart={cart} />
            </nav>
            <div className="container mx-auto px-6 py-6">
                {/* <SearchBar value={value} setValue={setValue} handleFilter={handleFilter} /> */}
                <List filteredList={filteredList} handleAddCart={handleAddCart} cart={cart} />
            </div>
        </>
    )
}

const List = ({ filteredList, ...props }) => {
    return (
        <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6" >
            {(
                filteredList.length ?
                    filteredList : templates).map(t => <ItemList {...t} {...props} />)}
        </ul>
    )
}

const SearchBar = ({ value, setValue, handleFilter }) => {
    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ACA");
        handleFilter();
    }
    return (
        <header>
            <span>Mostrando 1-12 de 18 resultados</span>
            <form className="mx-auto w-[max-content] bg-blue flex items-center pt-4 gap-4">
                <input
                    value={value}
                    onChange={handleChange}
                    className="border-2 border-black rounded-md px-4 py-2"
                    type="text"
                    required
                />
                <button
                    type="button"
                    // disabled={!value}
                    onSubmit={handleSubmit}
                    className="border-2 border-black-600 px-2 rounded-md"
                >
                    Buscar
                </button>
                <button
                    className="underline text-sm"
                >
                    Filtros
                </button>
            </form>
        </header>
    )
}

const ItemList = ({ id, title, imageUrl, description, tags, price, handleAddCart, cart }) => (
    <li key={title} className="flex flex-col w-auto gap-2">
        <img className="rounded-md hover:scale-[1.01]" src={imageUrl} />
        <p className="text-sm">{description}</p>
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="flex items-center gap-4">
            {tags.map(t => (
                <p className="bg-green-600 w-[max-content] px-2 inline text-white text-sm font-semibold rounded-md" key={t.body}>{t.body}</p>
            ))}
        </div>
        <p className="text-md font-bold uppercase">$ {price}</p>
        <a href={"/products/" + title} className="ml-auto text-xs mr-2 underline pointer">Ver detalle</a>
        <button id={title} disabled={cart.includes(title)} onClick={handleAddCart} className="bg-blue-400 w-[max-content] px-4 py-2 mx-auto rounded-md text-white font-semibold mt-4">Añadir al carrito</button>
    </li>
)