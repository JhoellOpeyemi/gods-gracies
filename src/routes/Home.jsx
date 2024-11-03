import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "../components/Loader/Loader";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const homeRef = useRef();
  const [loader, setLoader] = useState(true);

  useGSAP(
    () => {
      if (loader == false) {
        gsap.to(".home-container", {
          duration: 0.5,
          opacity: 1,
        });
      }
    },
    { dependencies: [loader], scope: homeRef.current }
  );

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
      ) : (
        <div ref={homeRef}>
          <div className="home-container" style={{ opacity: 0 }}>
            <Nav />
            <Hero />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
