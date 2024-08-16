import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/foodItem"; //

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="fav-food" id="fav-food">
      <h2>Discover Culinary Masterpieces Around You</h2>
      <div className="display_list">
        {food_list.map((item, index) => {
          if (category==="all" || category===item.category) {


            return(

              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                image={item.Image}
                price={item.price}
                description={item.description}
              />
              
            )
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
