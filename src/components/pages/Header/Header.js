import React from "react";
import './Header.css';

export const Header = () => {
  return (
  <>
    <div className="header">
      <div className="header-content">
        <h2>Welcome to Delicious Eats!</h2>
        <p>
          Welcome to Foodie Haven, where every meal is an adventure for your
          taste buds! Dive into a world of flavors with our diverse selection of
          dishes, crafted by passionate chefs using the freshest ingredients.
        </p>
        
      </div>
      <div className="viewmenubtn">
      <button type="button" className="btn btn-primary btn-sm">View Menu</button>

      </div>
    </div>
  </>
  );
};

export default Header;
