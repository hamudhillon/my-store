import {Link} from 'react-router-dom'
import './product-cards.css'
function ProductCards({img,category,title,price,rating}){

    return(
        <div className="card">
        <div className="card-img">
                <img src={img} className='img-fluid' alt="" />
        </div>
        <div className="card-body">
            <span className="category">{category}</span>
            <h2 className="card-title">
                    {title}
            </h2>
            <div className="price">
                    $ {price}
            </div>
            <div className="d-flex justify-content-between">
                    <div>
                        <Link to='/cart'>
                        <i className="fa-solid fa-shopping-cart"></i>
                        </Link>
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="fa-solid fa-star-full"></i>
                        {rating} (2)

                    </div>
            </div>
        </div>
    </div>
    );

};

export default ProductCards;