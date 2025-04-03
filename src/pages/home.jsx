import { useEffect, useState } from "react";
import ProductCards from "../components/product-cards";


function Home({userData}){
    const [products,setProducts]=useState([])
    const limit=10
    useEffect(
        ()=>{
         fetch(`https://dummyjson.com/products?skip=0&limit=${limit}&`)
         .then(res=>res.json())
         .then(products=>setProducts(products.products))
        },[]
       )

    return (
        <>
            <h1>Home {userData && userData.firstName}</h1>
            <div className="d-flex flex-xl-wrap gap-2 justify-content-center">
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
        </>
    )
}


export default Home;