import vehicleImage from "../assets/v-page.jpg";
import batteryIcon from "../assets/v-page.jpg";
import efficiencyIcon from "../assets/v-page.jpg";
import rangeIcon from "../assets/v-page.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electric Vehicles", link: "/Electric" },
  { name: "Consumer Electronics", link: "/Consumer" },
  { name: "Energy Storage", link: "/Energy" },
];
const Electric = () => {
    const [activeCategory, setActiveCategory] = useState("Electric Vehicles");

  return (
    <div className="ev-page">
      {/* Horizontal Sub-Navigation */}
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

      {/* Features Section */}
      <section className="ev-features">
        <div className="feature-card">
          <img src={batteryIcon} alt="Battery Technology" />
          <h3>Advanced Battery Technology</h3>
          <p>
            High-efficiency, long-lasting battery systems for extended range and
            reliability.
          </p>
        </div>
        <div className="feature-card">
          <img src={efficiencyIcon} alt="Energy Efficiency" />
          <h3>Energy Efficiency</h3>
          <p>
            Optimized systems to reduce energy consumption and maximize
            performance.
          </p>
        </div>
        <div className="feature-card">
          <img src={rangeIcon} alt="Extended Range" />
          <h3>Extended Range</h3>
          <p>
            Powerful motors and intelligent design for longer distances on a
            single charge.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Electric;
