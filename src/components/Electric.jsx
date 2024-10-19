import vehicleImage from "../assets/v-page.jpg";
import batteryIcon from "../assets/v-page.jpg";
import efficiencyIcon from "../assets/v-page.jpg";
import rangeIcon from "../assets/v-page.jpg";

const Electric = () => {
  return (
    <div className="ev-page">
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
