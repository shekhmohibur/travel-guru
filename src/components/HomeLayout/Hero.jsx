import SliderCard from "../SliderCard";
import coxsBazar from "../../assets/Rectangle 1.png";
import sajek from "../../assets/Sajek.png";
import sreemongol from "../../assets/Sreemongol.png";
import sundorbon from "../../assets/sundorbon.png";
import SlideHeadline from "../SlideHeadline";
import { useLoaderData } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
const Hero = () => {
  const places = useLoaderData();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlide = 4;
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlide) % totalSlide);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlide);
  };
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full flex flex-col gap-5 lg:gap-20  lg:grid grid-cols-3 relative">
      <div className="max-w-[550px] overflow-hidden">
        <div
          className={`flex col-span-1 gap-8`}
          style={{ transform: `translateX(-${current * 105}%)` }}
        >
          <div className="w-full shrink-0 overflow-hidden">
            <SlideHeadline
              title={places.coxsBazar.title}
              description={places.coxsBazar.description}
              navigate={places.coxsBazar.id}
            />
          </div>
          <div className="w-full shrink-0 overflow-hidden">
            <SlideHeadline
              title={places.sreemongol.title}
              description={places.sreemongol.description}
              navigate={places.sreemongol.id}
            />
          </div>
          <div className="w-full shrink-0 overflow-hidden">
            <SlideHeadline
              title={places.sundarban.title}
              description={places.sundarban.description}
              navigate={places.sundarban.id}
            />
          </div>
          <div className="w-full shrink-0 overflow-hidden">
            <SlideHeadline
              title={places.sajek.title}
              description={places.sajek.description}
              navigate={places.sajek.id}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 lg:absolute bottom-3/5 lg:-bottom-20 left-1/2" onMouseLeave={() => setIsPaused(false)} onMouseEnter={() => setIsPaused(true)}>
        <button onClick={prevSlide} className="btn rounded-full w-12 h-12">
          <FaChevronLeft size={27} />
        </button>
        <button onClick={nextSlide} className="btn rounded-full w-12 h-12">
          <FaChevronRight size={27} />
        </button>
      </div>
      <div className="overflow-hidden col-span-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div
          className="flex gap-8 shrink-0 transition-transform duration-500"
          style={{ transform: `translateX(-${current * 30}%)` }}
        >
          {[
            { img: coxsBazar, title: "cox's bazar" },
            { img: sreemongol, title: "sreemongol" },
            { img: sundorbon, title: "sundorbon" },
            { img: sajek, title: "sajek" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-2 rounded-xl transition-all duration-300 ${
                current === index
                  ? "scale-105 shadow-xl" // highlight
                  : "opacity-70"
              }`}
            >
              <SliderCard
                current={current}
                index={index}
                locationImage={item.img}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
