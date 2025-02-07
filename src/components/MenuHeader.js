import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MenuHeader = () => {
  return (
    <header className="menu-header text-center my-4">
      <img
        src="/images/logo.png"
        alt="Restaurant Logo"
        className="restaurant-logo mb-2"
      />
      <h1 className="menu-header">
        Fresh, Flavorful, and Full of Tradition.
      </h1>
      <p className="menu-desc">
        Come enjoy a wide selection of the finest Japanese cuisine and immerse
        yourself in the rich flavors and even richer culture.
      </p>
      <hr className="my-2 border-danger" />
    </header>
  );
};

export default MenuHeader;
