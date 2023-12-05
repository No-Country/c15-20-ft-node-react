import TableCart from "./checkoutComponents/TableCart";

export default function Checkout () {
    return (
        <div className="mt-6 px-6">
            <h2 className="font-bold text-2xl my-4">Carrito</h2>
            <TableCart />
            <div className="w-1/2 ml-auto mt-4 border-2 border-black-600 p-4">
                <table className="w-full mb-4"> 
                    <tbody>
                        <tr className="border-b-2 border-black-600 h-12 text-center">
                            <td>Subtotal</td>
                            <td>$ 7,500,000.00</td>
                        </tr>
                        <tr className="border-b-2 border-black-600 h-12 text-center">
                            <td>Total</td>
                            <td>$ 7,500,000.00</td>
                        </tr>
                    </tbody>
                </table>
                <button className="w-full bg-green-600 py-2 rounded-md font-bold text-white">Finalizar compra</button>
            </div>
        </div>
    )
}