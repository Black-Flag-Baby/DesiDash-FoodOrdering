import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { cartTotalAmount } = useContext(StoreContext);

  return (
    <div className="place-order">
      <div className="placeorder-leftside">
        <p className="title">Delivery information</p>
        <div className="input-fields">
          <input type="text" placeholder="Enter First Name" />
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <input type="text" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="input-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>

        <div className="input-fields">
          <input type="text" placeholder="Pin Code " />
          <input type="number" placeholder="Mobile Number" />
        </div>
      </div>
      <div className="placeorder-rightside">
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
                
                <button>Proceed to Payment</button>
            </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
