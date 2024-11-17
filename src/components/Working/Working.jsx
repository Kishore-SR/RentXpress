import "./Working.css";

export const Working = () => {
  return (
    <section className="how-it-works">
      <div className="heading">
        <h4>How It Works</h4>
        <h3>
          Simple Steps to your <span>Perfect Ride</span>
        </h3>
      </div>

      <section className="steps">
        <div className="step step1">
          <div className="icon">
            <i class="ri-map-pin-fill"></i>
          </div>
          <div className="step-text">
            <h5>Choose a Location</h5>
            <p>Easily select the perfect location for your car rental.</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="step step2">
          <div className="icon">
            <i class="ri-calendar-schedule-fill"></i>
          </div>
          <div className="step-text">
            <h5>Pick-Up Date</h5>
            <p>Pick a convenient date to start your journey.</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="step step3">
          <div className="icon">
            <i class="ri-bookmark-3-fill"></i>
          </div>
          <div className="step-text">
            <h5>Book your Car</h5>
            <p>Reserve your ideal car in just a few clicks.</p>
          </div>
        </div>
      </section>
    </section>
  );
};
