import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cart,food_list,deleteFromCart,cartTotalAmount}= useContext(StoreContext);

     const navigate=useNavigate();



  return (
    <div className="cart" id="cart">
        <div className="cart-items">
            <div className="cart-item-hd">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qunatity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cart[item.id]>=0)
                {
                    return(
                        <div className="cart-item-title cart-items-item">
                            <img src={item.Image} alt="" />
                            <p>{item.name}</p>
                            <p>Rs:{item.price}</p>
                            <p>{cart[item.id]}</p>
                            <p>Rs:{item.price * cart[item.id]}</p>

                            <p className='' onClick={() => deleteFromCart(item.id)}>x</p>
                        </div>

                    )

                }
                    

            }) }

        </div>
        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Order Summary</h2>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>₹{cartTotalAmount()}</p>
                </div>
                <div className="cart-total-details">
                    <p>Shipping Cost</p>
                    <p>₹{cartTotalAmount()===0?0:70}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>₹{cartTotalAmount()===0?0:cartTotalAmount()+70}</p>
                    </div>
                
                <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>Enter Promo Code here</p>
                    <div className="cart-promocode-input">
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart