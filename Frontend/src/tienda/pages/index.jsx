import Carrito from "../components/carrito";
import * as TEMPLATES from '../mockups/templates';

const { templates } = TEMPLATES;

export default function Tienda() {
    return (
        <>
            <nav className="w-full flex justify-between px-8 py-2">
                <p>Logo</p>
                <Carrito />
            </nav>
            <div className="container mx-auto">
                {/* search bar */}
                <header>
                    <span>Mostrando 1-12 de 18 resultados</span>
                    <form className="mx-auto w-[max-content] bg-blue flex items-center pt-4 gap-4">
                        <input className="border-2 border-black rounded-md px-4 py-2" type="text" required />
                        <button type="submit" className="border-2 border-black-600 px-2 rounded-md">Buscar</button>
                        <button className="underline text-sm ">Filtros</button>
                    </form>
                </header>
                <ul className="w-full grid grid-cols-4 grid-rows-auto gap-4">
                    {templates.map(t => <ItemList {...t} />)}
                </ul>
                {/*  categoría plantillas */}
                {/* search bar */}
            </div>
        </>
    )
}

const ItemList = ({ title, imageUrl, description, tags, price }) => (
    <li key={title} className="flex flex-col w-auto gap-2">
        <img src={imageUrl} />
        <p>{description}</p>
        <h4>{title}</h4>
        {tags.map(t => (
            <p>{t.body}</p>
        ))}
        <b>$ {price}</b>
        <button>Añadir al carrito</button>
    </li>
)