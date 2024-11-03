import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

import "./loader.css";

gsap.registerPlugin(useGSAP);

const Loader = ({ setLoader }) => {
  const loaderRef = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({})
        .to(loaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power4.inOut",
        })
        .to(".loader-text", { opacity: 1 })
        .to(".loader-text", { opacity: 0, delay: 0.5 })
        .to(loaderRef.current, {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => setLoader(false),
        });
    },
    { scope: loaderRef.current }
  );

  return (
    <div className="loader-container" ref={loaderRef}>
      <h3 className="loader-text">
        God&apos;s <br />
        Gracies
      </h3>
    </div>
  );
};

Loader.propTypes = {
  setLoader: PropTypes.func,
};

export default Loader;
