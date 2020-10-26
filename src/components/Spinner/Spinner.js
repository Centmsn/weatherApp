import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ReactComponent as Scene } from "../../assets/loading.svg";

import "./spinner.css";

const Spinner = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const allRects = elements.querySelectorAll(".loading-rect");

    const getRandomColor = () => {
      return `rgb(${Math.random() * 255}, ${Math.random() * 100 + 150}, ${
        Math.random() * 100 + 150
      })`;
    };

    gsap.to(elements, {
      duration: 5,
      repeat: -1,
      rotation: 360,
      ease: "none",
    });

    gsap.to(allRects, {
      stagger: 0.3,
      fill: getRandomColor,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="spinner" ref={wrapper}>
      <Scene />
    </div>
  );
};

export default Spinner;
