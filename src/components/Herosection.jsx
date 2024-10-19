
const HeroSection = () => {
    const solutions = [
      {
        title: "Energy Storage",
        description:
          "Sourcing sustainable and high-quality materials for production.",
        icon: "/src/assets/accumulator (1).png",
      },
      {
        title: "Consumer Electronics",
        description: "Advanced technology ensures efficient energy conversion.",
        icon: "/src/assets/consumer.png",
      },
      {
        title: "Electric Vehicles",
        description:
          "Using state-of-the-art facilities to produce high-quality products.",
        icon: "/src/assets/vehicle.png",
      },
    ];
    return (
      <section>
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Leading the Future of Clean Energy</h1>
              <p className="hero-subtitle">
                Innovative solutions for a sustainable world
              </p>
              <button className="hero-button">Learn More</button>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">Our Process & Solutions</h2>
      <div className="cards-container">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <div className="card-icon">
              <img src={solution.icon} alt={`${solution.title} icon`} />
            </div>
            <div className="card-content">
              <h3 className="title">{solution.title}</h3>
              <p className="description">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
      </section>
    );
};

export default HeroSection;
