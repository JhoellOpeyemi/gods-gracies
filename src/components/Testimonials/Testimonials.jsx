import PropTypes from "prop-types";

import "./testimonials.css";

const Testimonials = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <p className="text">{testimonial.text}</p>
      <h4 className="name">- {testimonial.name}</h4>
    </div>
  );
};

Testimonials.propTypes = {
  testimonial: PropTypes.object,
};

export default Testimonials;
