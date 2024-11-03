import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav/Nav";
import MediaContent from "../components/MediaContent/MediaContent";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(useGSAP);

const Catalogue = () => {
  const [loader, setLoader] = useState(true);
  const mediaRef = useRef();

  useGSAP(
    () => {
      if (loader == false) {
        gsap.to(".media-container", {
          duration: 0.5,
          opacity: 1,
        });
      }
    },
    { dependencies: [loader], scope: mediaRef.current }
  );

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
      ) : (
        <div ref={mediaRef}>
          <div className="media-container" style={{ opacity: 0 }}>
            <Nav />
            <MediaContent />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Catalogue;
