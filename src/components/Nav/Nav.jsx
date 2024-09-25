import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NavLink } from "react-router-dom";

import "./nav.css";

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const [nav, setNav] = useState(false);
  const container = useRef();
  const tl = useRef();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Who We Are" },
    { path: "/catalogue", label: "Catalogue" },
    { path: "/support", label: "Support Us" },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      gsap.set(".nav-link", { y: "100%", opacity: 0 });
    }

    tl.current = gsap.timeline().reverse();

    tl.current
      .to(".nav-links-wrapper", {
        yPercent: 100,
        duration: 0.75,
        ease: "power4.inOut",
      })
      .to(
        ".nav-link",
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          stagger: 0.02,
          ease: "back",
        },
        "-=0.3"
      );
  }, []);

  useEffect(() => {
    tl.current.reversed(!nav);
  }, [nav]);

  return (
    <nav className="nav" ref={container}>
      <h3 className="logo">
        <div>God&apos;s</div>
        <div>Gracies</div>
      </h3>
      <div className="nav-links-wrapper">
        {links.map((link, index) => {
          return (
            <div className="link-wrapper" key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={link.path}
              >
                {link.label}
              </NavLink>
            </div>
          );
        })}
      </div>

      <button className="hamburger" onClick={handleNav}>
        Menu
      </button>
    </nav>
  );
};

export default Nav;
