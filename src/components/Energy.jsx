import { useState } from "react";
import { Link } from "react-router-dom";
import vehicleImage from "../assets/v-page.jpg";

const categories = [
  { name: "Electric Vehicles", link: "/Electric" },
  { name: "Consumer Electronics", link: "/Consumer" },
  { name: "Energy Storage", link: "/Energy" },
];
const Energy = () => {
      const [activeCategory, setActiveCategory] = useState("Electric Vehicles");

  return (
    <div className="energy-page">
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
      {/* Hero Section */}
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
    </div>
  );
};

export default Energy;
