import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  },
];

function App() {
  const [items, setItems] = useState(
    menuItems.map((item) => ({ ...item, count: 0 }))
  );

  const updateCount = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count + delta) }
          : item
      )
    );
  };

  const clearAll = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, count: 0 })));
  };

  const handleOrder = () => {
    const orderedItems = items.filter((item) => item.count > 0);
    if (orderedItems.length === 0) {
      alert('No items selected.');
      return;
    }

    const orderSummary = orderedItems
      .map(
        (item) =>
          `${item.count}x ${item.title} = $${(item.count * item.price).toFixed(
            2
          )}`
      )
      .join('\n');

    alert(`Order placed:\n${orderSummary}\nTotal: $${subtotal.toFixed(2)}`);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.count * item.price,
    0
  );

  return (
    <div className="container">
      <MenuHeader />
      <div className="menu">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            imageName={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
            price={item.price}
            count={item.count}
            onIncrement={() => updateCount(item.id, 1)}
            onDecrement={() => updateCount(item.id, -1)}
          />
        ))}
      </div>

      <div className="cart-footer d-flex justify-content-between align-items-center mt-4 p-3">
        <h4 className="mb-0">Subtotal: ${subtotal.toFixed(2)}</h4>
        <div>
          <button className="btn custom-button mx-2" onClick={handleOrder}>
            Order
          </button>
          <button className="btn btn-secondary" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
