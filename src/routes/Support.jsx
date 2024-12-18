import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav/Nav";
import SupportTexts from "../components/SupportTexts/SupportTexts";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(useGSAP);

const Support = () => {
  const [loader, setLoader] = useState(true);
  const supportRef = useRef();

  useGSAP(
    () => {
      if (loader == false) {
        gsap.to(".support-container", {
          duration: 0.5,
          opacity: 1,
        });
      }
    },
    { dependencies: [loader], scope: supportRef.current }
  );

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
      ) : (
        <div ref={supportRef}>
          <div className="support-container" style={{ opacity: 0 }}>
            <Nav />
            <SupportTexts />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
