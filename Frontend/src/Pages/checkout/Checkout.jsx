import Detail from "./checkoutComponents/Detail";
import TableCart from "./checkoutComponents/TableCart";

export default function Checkout() {
    return (
        <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
            <main>
                {/* {renderSpinner()} */}
                <Checkout onClick={handleClick} description />
                <Payment />
            </main>
            <Footer />
        </InternalProvider>
        // <div className="mt-6 px-6">
        //     <h2 className="font-bold text-2xl my-4">Carrito</h2>
        //     <TableCart />
        //     <Detail />
        // </div>
    )
}