import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
  return (
    <div className="card text-center m-3" style={{ width: '18rem' }}>
      <img src={imageName} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text text-success font-weight-bold">
          ${price.toFixed(2)} 
        </p>
        <button className="btn custom-button">Order Now</button>
      </div>
    </div>
  );
};

export default MenuItem;
