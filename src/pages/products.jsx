import { useEffect, useState } from "react";
import ProductCards from "../components/product-cards";


function Products(){
    const [products,setProducts]=useState([])
    const [skip,setSkip]=useState(0)

    const limit=10

    useEffect(
        ()=>{
         fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}&`)
         .then(res=>res.json())
         .then(products=>setProducts(products.products))
        },[skip]
       )

    return (
        <>
            <div className="container">
            <h1>Products</h1>
            <div className="d-flex flex-xl-wrap gap-2 justify-content-between">
                {
                products &&
                products.map((product,index)=>{
                    return(
                        <ProductCards 
                        key={product.i} 
                        img={product.images[0]} 
                        title={product.title} 
                        category={product.category}
                        price={product.price}
                        rating={product.rating}
                        />   
                    );
                })}
            </div>
            </div>
        </>
    )
}


export default Products;