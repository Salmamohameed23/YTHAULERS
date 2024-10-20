import vehicleImage from "../assets/v-page.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { name: "Electric Vehicles", link: "/Electric" },
  { name: "Consumer Electronics", link: "/Consumer" },
  { name: "Energy Storage", link: "/Energy" },
];
const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest 5G smartphone",
    price: "$799",
    imageUrl: "/src/assets/phone.jpg",
  },
  {
    id: 2,
    name: "Tablet",
    description: "High-resolution tablet",
    price: "$499",
    imageUrl: "/src/assets/tablet.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    price: "$199",
    imageUrl: "/src/assets/headphone.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$299",
    imageUrl: "/src/assets/smartwatch.jpg",
  },
  {
    id: 5,
    name: "Camera",
    description: "High-definition camera for photography",
    price: "$899",
    imageUrl: "/src/assets/camera.jpg",
  },
  // More products can be added here
];

const Consumer = () => {
      const [activeCategory, setActiveCategory] = useState("Electric Vehicles");

  return (
    <div className="consumer-page">
      <nav className="sub-nav">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className={`sub-nav-item ${
              activeCategory === category.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </Link>
        ))}
      </nav>
      <header className="ev-hero-section">
        <img src={vehicleImage} alt="Electric Vehicle" className="hero-image" />
        <div className="hero-text">
          <h1>Electric Vehicles</h1>
          <p>
            Driving the future with innovative technology and sustainable
            solutions.
          </p>
        </div>
      </header>
      <h1>Consumer Electronics</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consumer;
