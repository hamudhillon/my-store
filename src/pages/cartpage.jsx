import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart } = useCart();
  let cartTotal=0
  console.log(cart);
  cart.forEach(element => {

        cartTotal+=element.total
  });
  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="col-xl-7 mx-auto py-5">
        <table className="table w-100 table-hover table-striped">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
            cart &&
            cart.map((item, index) => {
             
                return(
                    <tr>
                    <td>
                      <img src={item.thumbnail} style={{"width":'80px'}} className="img-fluid" alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.total}</td>
                    <td>{item.quantity}</td>
                  </tr>
                )
            })}
            <tr>
                <td></td>
                <td className="text-end">Total</td>
                <td>{cartTotal}</td>
                <td>
                    <Link className="btn btn-dark" to={''}>
                    Checkout
                    </Link>
                </td>
                
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartPage;
