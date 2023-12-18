import CardProduct from "./CardProduct";
import { useSelector } from 'react-redux';

export default function ListProduct({ filteredList, ...props }) {
    const { allProducts, filteredProducts } = useSelector(s => s.products);
    return (
        <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6" >
            {(
                filteredProducts.length ?
                    filteredProducts : allProducts).map(t => <CardProduct key={t.title} {...t} {...props} />
                    )}
        </ul>
    )
}