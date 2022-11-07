import { Box, Container, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import googleMap from "../../image/google-map.jpg";
import "./MainPage.css";
import { gsap } from "gsap";
import FilterPage from "../filterPage/FilterPage";

const MainPage = () => {
  const tl = gsap.timeline();
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const [displayedMap, setDisplayedMap] = useState(false);

  useEffect(() => {
    tl.from([p1.current], {
      opacity: 0,
      skewX: -10,
      x: -100,
      ease: "power3.inOut",
      duration: 0.9,
    });
    tl.from(
      p2.current,
      {
        opacity: 0,
        skewX: 10,
        x: 100,
        ease: "power3.inOut",
        duration: 0.9,
      },
      ">-0.5"
    );
    tl.from(
      p3.current,
      {
        opacity: 0,
        skewX: 10,
        y: 10,
        ease: "power3.inOut",
        duration: 0.5,
      },
      ">-0.5"
    );
  }, []);

  const Banner = () => {
    return (
      <div className="mx-auto max-w-6xl text-center">
        <h1
          ref={p1}
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:text-7xl font-extrabold text-transparent sm:text-5xl custom-font"
        >
          Browse 16,000+ Apartment
          <span className="sm:block">for Rent in Thailand. </span>
        </h1>

        <p
          ref={p2}
          className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div ref={p3} className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setDisplayedMap((prev) => !prev)}
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm outline-none font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          >
            Get Started
          </button>

          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {!displayedMap ? <Banner /> : <FilterPage />}
      </div>
    </section>
  );
};

export default MainPage;
