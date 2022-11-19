import React, { useRef, useEffect, useState } from "react";
import "./MainPage.css";
import { gsap } from "gsap";
import FilterPage from "../filterPage/FilterPage";
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const tl = gsap.timeline();
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const [displayedMap, setDisplayedMap] = useState(false);
  const navigate = useNavigate();

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
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-6xl text-center">
          <h1
            ref={p1}
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:text-6xl font-extrabold text-transparent sm:text-5xl custom-font"
          >
            Everything You Need All Right Here.
            <span className="sm:block mt-4">Apartments in KMITL. </span>
          </h1>

          <p
            ref={p2}
            className="mx-auto mt-10 max-w-[620px] sm:text-xl sm:leading-relaxed"
          >
            ให้เราได้เป็นส่วนหนึ่งในการเลือกอพาร์ทเมนท์ ให้เหมาะกับทุกสไตล์ของคุณ
            ต้องการที่พัก นึกถึง PIRANYA HUB.
          </p>

          <div ref={p3} className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/FilterPage')}
              class="rounded-full ml-5 group relative inline-block outline-none text-white focus:outline-none focus:ring"
            >
              <span class="
              rounded-full
              absolute 
              outline-0 
              inset-0 
              border 
              focus:outline-none 
              outline-none 
              border-white
              group-active:border-white">
              </span>
              <span class="
              rounded-full
              font-IBMPlexSansThai 
              outline-0 
              focus:outline-none 
              outline-none 
              text-lg block 
              border 
              border-white 
              text-black 
              bg-white
              px-12 
              py-3 
              transition-transform 
              active:border-white 
              active:bg-white
              group-hover:-translate-x-1 
              group-hover:-translate-y-1">
                ค้นหาที่พัก
              </span>
            </button>
            <button
              onClick={() => navigate('/aboutus')}
              class="rounded-full ml-5 group relative inline-block outline-none text-white focus:outline-none focus:ring"
            >
              <span class="
                rounded-full 
                absolute 
                outline-0 
                inset-0 
                border 
                focus:outline-none 
                outline-none 
                border-white 
                group-active:border-white">
              </span>
              <span class="
              rounded-full 
              font-IBMPlexSansThai 
              outline-0 
              focus:outline-none 
              outline-none 
              text-lg 
              block 
              border 
              border-white
              text-black 
              bg-white
              px-12 py-3 transition-transform active:border-white  active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
              Contact us
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-900 text-white">
      {/* {!displayedMap ? <Banner /> : <FilterPage />} */}
      <Banner />
    </section>
  );
};

export default MainPage;
