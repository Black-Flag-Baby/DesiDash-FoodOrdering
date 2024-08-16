import React, { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/asset";



export const StoreContext= createContext(null)

const StoreContextProvider=(props)=>{


const [cart, setcart] = useState({})

const addToCart=(itemId)=>{
    // user added item first time  new enry for food product 
    if(!cart[itemId]){
        setcart((prev)=>({...prev,[itemId]:1}))
    }
    else{

        // otherwaise this executed 
        setcart((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
};

//  decrese the value by 1
 const removeFromCart=(itemId)=>{
    if(cart[itemId]>1){

        setcart((prev)=> ({...prev,[itemId]:prev[itemId]-1}))

    }
    else{
        deleteFromCart(itemId);
    }
     
 };

 const deleteFromCart = (itemId) => {
    setcart((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const cartTotalAmount=()=>{
    let totalAmount=0;
    for (const item in cart){
        if(cart[item]>0){
        let itemInfo=food_list.find((product)=>product.id=== item)
        totalAmount=totalAmount+ itemInfo.price * cart[item]
    }
}
return totalAmount;


  }


 useEffect(() => {
    
  console.log(cart)
   
 }, [cart]);
 



    const value= {
        food_list,
        cart,
        setcart,
        addToCart,
        removeFromCart,deleteFromCart,
        cartTotalAmount


    };

    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;