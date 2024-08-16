import React ,{useContext} from "react";
import { StoreContext } from "../../context/StoreContext";
import "../foodItem/foodItem.css";
import { assets } from "../../assets/asset";

const FoodItem = ({ id, name, image, price, description }) => {

  const { cart,addToCart,removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item">
      <div className="image_container">
        <img src={image} alt={name} className="item_image" />
        {!cart[id] ? (
          <img className="addcart" onClick={()=>addToCart(id)} src={assets.f7} alt="add_icon" />
        ) : (
          <div className="item_counter">
            <img onClick={()=>removeFromCart(id)} src={assets.f5} alt="minus_icon" />
            <p>
              {cart[id]}
            </p>
            <img onClick={()=>addToCart(id)}  src={assets.f6} alt="plus_icon" />
            

          </div>
        )}
      </div>
      <div className="food_description">
        <div className="rating">
          <p>{name}</p>
          <img src={assets.rating} alt="rating" className="rating-food" />
        </div>
        <p className="item_desc">{description}</p>
        <p className="item_price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
