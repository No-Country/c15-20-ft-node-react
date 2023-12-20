import TableCart from "./checkoutComponents/TableCart";
import Button from "../../components/Button";

export default function Checkout() {
  return (
    <div className='py-24 px-6 font-common-font'>
      <h2 className='font-bold font-grotesk-font text-2xl my-4'>Carrito</h2>
      <TableCart />
      <div className='w-1/2 ml-auto mt-4 border-2 border-black-600 p-4'>
        <table className='w-full mb-4'>
          <tbody>
            <tr className='border-b-2 border-black-600 h-12 text-center'>
              <td>Subtotal</td>
              <td>$ 7,500,000.00</td>
            </tr>
            <tr className='border-b-2 border-black-600 h-12 text-center'>
              <td>Total</td>
              <td>$ 7,500,000.00</td>
            </tr>
          </tbody>
        </table>
        <Button extraStyles='w-full'>Finalizar compra</Button>
      </div>
    </div>
  );
}
