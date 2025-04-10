import { useEffect, useState } from "react";
import ProductCards from "../components/product-cards";
import { useCart } from "../context/CartContext";
import { DNA } from "react-loader-spinner";



function Home({userData}){
    const {cart,addToCart}=useCart()
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const limit=10
    useEffect(
        ()=>{
         fetch(`https://dummyjson.com/products?skip=0&limit=${limit}&`)
         .then(res=>res.json())
         .then(products=>{setProducts(products.products)
            setLoading(false)}
        )
        },[]
       )
    if(loading) return(<>
    <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    </>)
    return (
        <>
            <h1>Home {userData && userData.firstName}</h1>
            <div className="d-flex flex-xl-wrap gap-2 justify-content-center">
                {
                products &&
                products.map((product,index)=>{
                    return(
                        <ProductCards 
                        key={product.id} 
                        pid={product.id}
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