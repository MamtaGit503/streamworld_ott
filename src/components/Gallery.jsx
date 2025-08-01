import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

import screenshot1 from "../assets/images/screenshot1.jpg";
import screenshot2 from "../assets/images/screenshot2.jpg";
import screenshot3 from "../assets/images/screenshot3.jpg";
import screenshot4 from "../assets/images/screenshot4.jpg";
import screenshot5 from "../assets/images/screenshot5.jpg";

const slides = [
  {
    id: 1,
    title: "Ghostly Encounter",
    image: screenshot1,
    duration: "01h 50m",
    quality: "HD",
  },
  {
    id: 2,
    title: "Happy Women's Day",
    image: screenshot2,
    duration: "02h 45m",
    quality: "4K Quality",
  },
  {
    id: 3,
    title: "Rising Dead",
    image: screenshot3,
    duration: "02h 10m",
    quality: "Full HD",
  },
  {
    id: 4,
    title: "Dark Forest",
    image: screenshot4,
    duration: "01h 30m",
    quality: "4K",
  },
  {
    id: 5,
    title: "Haunted Night",
    image: screenshot5,
    duration: "02h 00m",
    quality: "HD",
  },
];

const MovieSlider = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id={id}
      className=" text-white  py-14 max-w-7xl mx-auto px-4 w-full scroll-mt-24 "
    >
      <div className="bg-black text-white px-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65]">
          <span className="ml-2"> Latest Gallery</span>{" "}
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Pagination, Autoplay]}
          className="w-full max-w-7xl mx-auto"
        >
          {slides.map((slide, index) => {
            const visibleSlides = 1;
            const centerIndex = activeIndex + Math.floor(visibleSlides / 2);
            return (
              <SwiperSlide key={slide.id}>
                <div className="relative rounded-xl overflow-hidden mb-14">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-96 object-cover transition duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#a70d65]/50 to-transparent transition duration-300 z-10 ${
                      (screenWidth < 768 && index === activeIndex) ||
                      (screenWidth >= 768 && index === activeIndex + 1)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <span className="absolute screenshot_btn top-4 left-4 bg-[#a70d65] hover:!bg-black text-white text-sm px-2 py-1 rounded font-bold z-20">
                    {index + 1 < 10 ? `${index + 1}` : index + 1}
                  </span>
                  <div className="absolute bottom-24 left-4 flex items-center gap-3 z-20">
                    <button className="bg-white text-black p-2 rounded-full">
                      <FaPlay className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-12 left-4 text-sm opacity-80 z-20">
                    <p>{slide.duration}</p>
                    <p>{slide.quality}</p>
                  </div>
                  <div className="absolute bottom-2 left-4 text-lg font-bold z-20">
                    {slide.title}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieSlider;
