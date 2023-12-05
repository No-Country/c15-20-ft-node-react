import CardProduct from "./CardProduct";
import * as TEMPLATES from '../mockups/templates';

const { templates } = TEMPLATES;

export default function ListProduct({ filteredList, ...props }) {
    return (
        <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6" >
            {(
                filteredList.length ?
                    filteredList : templates).map(t => <CardProduct {...t} {...props} />
                    )}
        </ul>
    )
}