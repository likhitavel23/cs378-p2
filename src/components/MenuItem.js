// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MenuItem = ({
  title,
  description,
  imageName,
  price,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom py-3">
      <img src={imageName} alt={title} className="menu-item-img" />

      <div className="flex-grow-1 mx-3">
        <h5 className="menu-title mb-1">{title}</h5>
        <p className=" menu-desc text-muted small mb-0">{description}</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="mb-2 font-weight-bold">${price.toFixed(2)}</p>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-sm btn-outline-secondary mx-1 small-btn"
            onClick={onDecrement}
            disabled={count === 0}
          >
            -
          </button>
          <span className="mx-1">{count}</span>
          <button
            className="btn btn-sm btn-outline-secondary mx-1 small-btn"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
