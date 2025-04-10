import { Link } from "react-router-dom";
import "./product-cards.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
function ProductCards({ pid, img, category, title, price, rating }) {
  const { addToCart } = useCart();
  const [qyt, setQyt] = useState(1);

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div className="card-body">
        <span className="category">{category}</span>
        <h2 className="card-title">{title}</h2>
        <div className="price">$ {price}</div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <button className="dec btn btn-danger" onClick={()=>{setQyt(qyt - 1)} }>-</button>
            <div className="col-xl-2">
              <input
                type="text"
                className="w-100 form-control qyt text-center"
                min={1}
                value={qyt}
                name="qyt"
              />
            </div>
            <button className="inc btn btn-success" onClick={()=>{setQyt(qyt + 1)} }>+</button>
          </div>
          <div>
            {/* <Link to='/cart'> */}
            <i
              className="fa-solid fa-shopping-cart"
              onClick={() => addToCart(pid, qyt)}
            ></i>
            {/* </Link> */}
          </div>
          <div className="rating d-flex align-items-center gap-1">
            <i className="fa-solid fa-star-full"></i>
            {rating} (2)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
