import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "../components/Loader/Loader";
import AboutContent from "../components/AboutContent/AboutContent";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(useGSAP);

const About = () => {
  const [loader, setLoader] = useState(true);
  const aboutRef = useRef();

  useGSAP(
    () => {
      if (loader == false) {
        gsap.to(".about-container", {
          duration: 0.5,
          opacity: 1,
        });
      }
    },
    { dependencies: [loader], scope: aboutRef.current }
  );

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
      ) : (
        <div ref={aboutRef}>
          <div className="about-container" style={{ opacity: 0 }}>
            <Nav />
            <AboutContent />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
