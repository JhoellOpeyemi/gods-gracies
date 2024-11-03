import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Testimonials from "../Testimonials/Testimonials";
import { data } from "../../testimonials";
import image from "/assets/anjy.jpg";

import "./aboutContent.css";

gsap.registerPlugin(useGSAP);

const AboutContent = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  const handleNext = () => {
    if (index >= data.length - 1) return;

    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index == 0) return;

    setIndex((prev) => prev - 1);
  };

  useGSAP(() => {
    gsap.to(".testimonial-slider", {
      xPercent: index * (-100 / data.length),
    });

    gsap.to(".scrollbar", {
      width: `${(index + 1) * (100 / data.length)}%`,
    });
  }, [{ dependencies: index, scope: sliderRef.current }]);

  return (
    <div className="about-content">
      <h1 className="page-heading">Who we are</h1>

      <p className="desc">
        God&apos;s Gracies is a community of Christian young adults and
        teenagers, whose aim is building and army of young people intentionally
        living for Christ. And as they burn for Christ, they are finding and
        fulfilling purpose. We equip them with the truth (Jesus), then go into
        the world and shine the light. Our various activities for 3 years has
        been helping to fulfill our mission and bring our vision to life.
      </p>

      <div className="vision-mission">
        <div className="vision">
          <h3>Vision</h3>
          <p>
            Raising generals and captains in different mountains of influence,
            so they can be able to tell a story with their lives to teach others
            to live fully for Christ.
          </p>
        </div>
        <div className="mission">
          <h3>Mission</h3>
          <p>
            Helping young people find God, build a relationship with Him, find
            purpose, walk in purpose and live purposefully.
          </p>
        </div>
      </div>

      <div className="team-content">
        <h1 className="page-heading">Meet the family</h1>

        <div className="about-team-lead">
          <div className="image-wrapper">
            <img src={image} alt="Anjola Obashola" className="image" />
          </div>

          <p>
            Anjolakristi Grace Obashola, passionate about seeing young people
            fulfil purpose and living fully the life God wants them to live.
            <br />
            She is a passionate believer of &quot;you can start young&quot;,
            that&apos;s why she&apos;s invested in children/teenage ministry.
            Because of her interest in fulfilling purpose, she&apos;s also
            interested and invested in lost souls, people who are living out of
            Christ. She wants everyone to enjoy the life of Christ and live
            fully the life God has called them into.
            <br />
            She has a saying, &quot;There&apos;s an assignment that has your
            name on it, find it, but you can only find it when you follow
            Christ.&quot;
            <br />
            <br />
            At the age of 19, as led by the Holy Spirit, due to her passion to
            help young people grow in Christ and their knowledge of themselves
            in Christ, She birthed &quot;God&apos;s Gracies&quot;.
          </p>
        </div>

        <div className="other-team-members" ref={sliderRef}>
          <div className="scrollbar" />
          <p className="testimonial-heading">Words from family members:</p>

          <div className="testimonial-slider">
            {data.map((testimonial, index) => (
              <Testimonials testimonial={testimonial} key={index} />
            ))}
          </div>

          <div className="btn-group">
            <button className="prev-btn btn" onClick={handlePrev}>
              &lt;
            </button>
            <button className="next-btn btn" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
