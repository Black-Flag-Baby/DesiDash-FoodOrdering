import React from "react";
import './ExploreMenu.css'
import { menu_list } from "../../../assets/asset";

export const ExploreMenu = ({category,setcategory}) => {

  return (
    <div className="explore_menu" id='explore_menu'>
      <h1>Feast Your Eyes: Explore Our Menu</h1>
      <p className="menu_text">
        Discover the vibrant flavors of India with our diverse menu. From
        classic favorites to contemporary creations, our dishes promise an
        unforgettable culinary journey. Explore our menu and treat yourself to
        an array of authentic Indian delights.
      </p>
      <div className="menulist">
        {menu_list.map((item,id)=>
        {
          return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={id} className="menu_listItem">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  );
};
export default ExploreMenu;
