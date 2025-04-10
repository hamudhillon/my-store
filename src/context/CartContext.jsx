import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext()
export const useCart=()=>useContext(CartContext)

const CartProvider = ({children,userData})=>{
    const [cart, setCart] = useState([])
    const [user, setUser]=useState(null)
    const [counter,setCounter]=useState(0)
    // if(sessionStorage.getItem('user')){
    //     setUser(JSON.parse(sessionStorage.getItem('user')).id)
    //   }

    
    const addToCart = async (productId, quantity)=>{
            const resP=await fetch('https://dummyjson.com/carts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  userId: userData.id,
                  products: [
                    {
                      id: productId,
                      quantity: quantity,
                    },
                  ]
                })
              })
      
        
          const data=await resP.json()
          if(resP.ok){
            console.log(cart);
            setCounter(counter+1)
            if(cart.length>0){
              cart.push(data.products[0])
              console.log(cart);
            }
            else{
              setCart([data.products[0]])
            }
            // setCart(data)
          }
    };

    return (
        <CartContext.Provider value={{cart, addToCart,counter}}>
            {children}
        </CartContext.Provider>

    )

}

export {CartProvider}