import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        <div className="line-break">
          <span>Nurturing Young Lives,</span>{" "}
        </div>
        <div className="line-break">
          <span>One Child at a Time</span>
        </div>
      </h1>

      <div className="hero-media-n-text">
        <div className="hero-text">
          <p>
            Your Support Can Change a Child&apos;s Story: Donate, Volunteer, or
            Support Today.
          </p>

          <a href="/" className="button">
            Support Us
          </a>
        </div>

        <div className="hero-media">
          <div className="video"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
