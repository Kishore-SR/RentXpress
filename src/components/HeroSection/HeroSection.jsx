import "./HeroSection.css";
import appleImage from "../../assets/Apple.png";
import playStoreImage from "../../assets/PlayStore.png";
import CarImage from "../../assets/HeroCar.png";

export const HeroSection = () => {
  return (
    <main>
      <section className="text-section">
        <h1>
          Drive Your <span>Dream Car</span> Today
        </h1>
        <p>
          Rent the perfect car for any trip with RentXpress. Enjoy flexible
          options, great prices, and a hassle-free experience. Get started in a
          few clicks!
        </p>

        <div className="app-links">
          <button className="app-btn">
            <div className="app-logo">
              <img src={appleImage} alt="Apple" />
            </div>
            <div className="app-text">
              <p>Download on the</p>
              <h4>Apple Store</h4>
            </div>
          </button>

          <button className="app-btn">
            <div className="app-logo">
              <img src={playStoreImage} alt="Play Store" />
            </div>
            <div className="app-text">
              <p>Get it from</p>
              <h4>Google Play</h4>
            </div>
          </button>
        </div>
      </section>

      <section className="hero-image-container">
        <div className="orange-box"></div>
        <img src={CarImage} alt="Car" className="car-image" />
      </section>
    </main>
  );
};
