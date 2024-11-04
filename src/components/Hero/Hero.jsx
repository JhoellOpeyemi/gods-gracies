import "./hero.css";
import image from "/assets/image4.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="notification">
        <p>
          The event &quot;Taking Jesus to the Street&quot; is coming up on the
          21st of December, 2024.
        </p>
        <p aria-hidden="true">
          The event &quot;Taking Jesus to the Street&quot; is coming up on the
          21st of December, 2024.
        </p>
      </div>

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

          <a
            href="mailto:obasholaanjola@gmail.com"
            target="_blank"
            className="button"
          >
            Support Us
          </a>
        </div>

        <div className="hero-media">
          <div className="image-wrapper">
            <img src={image} alt="Children on the streets" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
