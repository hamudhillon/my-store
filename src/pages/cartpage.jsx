import { useCart } from "../context/CartContext";


function CartPage(){
    const {cart}=useCart()

    return (
        <h1>
            {cart.id}
        </h1>

    );
}

export default CartPage;