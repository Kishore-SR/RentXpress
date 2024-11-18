import "./Download.css";
import appleImage from "../../assets/Apple.png";
import playStoreImage from "../../assets/PlayStore.png";
import footerImage from "../../assets/FooterCar.png";

export const Download = () => {
  return (
    <section className="download" id="contact">
      <div className="left-text">
        <div className="only-text">

        <h2>Download the free RentXpress app</h2>
        <p>for faster, easier booking and exclusive deals.</p>
        </div>
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
      </div>

      <div className="right-img">
        <img src={footerImage} alt="car" />
      </div>
    </section>
  );
};