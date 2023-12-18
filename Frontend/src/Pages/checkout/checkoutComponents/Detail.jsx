import { useSelector } from "react-redux"

export default function Detail() {
    const cart = useSelector(s => s.cart);
    return (
        <div className="w-1/3 ml-auto mt-4 p-2">
            <table className="w-full mb-4">
                <tbody>
                    <tr className="border-b-[1px] border-black-600 h-12 text-center">
                        <td>Subtotal</td>
                        <td>$ {cart.length ? cart.reduce((acc, product) => acc + product.price, 0) : "-"}</td>
                    </tr>
                    <tr className="border-b-[1px] border-black-600 h-12 text-center">
                        <td>Total</td>
                        <td>$ {cart.length ? cart.reduce((acc, product) => acc + product.price, 0) : "-"}</td>
                    </tr>
                </tbody>
            </table>
            <button disabled={!cart.length} className="w-full bg-green-600 py-2 rounded-md font-bold text-white">Finalizar compra</button>
        </div>
    )
}