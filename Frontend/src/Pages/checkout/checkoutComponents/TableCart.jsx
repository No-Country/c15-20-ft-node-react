import * as TEMPLATES from '../../store/mockups/templates';

const {templates} = TEMPLATES;

export default function TableCart () {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-white border-2 border-black-600">
                    <td className="font-bold text-black-700 text-md py-4 text-center">Imágen</td>
                    <td className="font-bold text-black-700 text-md py-4 text-center">Producto</td>
                    <td className="font-bold text-black-700 text-md py-4 text-center">Precio</td>
                    <td className="font-bold text-black-700 text-md py-4 text-center">Cantidad</td>
                    <td className="font-bold text-black-700 text-md py-4 text-center">Subtotal</td>
                </tr>
            </thead>
            <tbody>
                {templates.map(t => (
                    <tr key={t.title} className="h-40 border-2 border-black-600 text-center">
                        <td>
                            <img src={t.imageUrl} className="w-24 h-[auto] mx-auto" />
                        </td>
                        <td>{t.title}</td>
                        <td>$ {t.price}</td>
                        <td>1</td>
                        <td>$ {t.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}