import { useCart } from "../context/CartContext";


function CartPage(){
    const {cart}=useCart()

   
    return (
        <h1>
            {cart[1].title}
        </h1>

    );
}

export default CartPage;