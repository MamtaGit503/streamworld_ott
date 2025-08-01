import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import bgImage from "../assets/images/hero.jpg";
import slide1 from "../assets/images/tumbad1.jpg";
import slide2 from "../assets/images/tumbad2.jpg";
import slide3 from "../assets/images/tumbad3.avif";
import slide4 from "../assets/images/tumbad4.jpg";
import slide5 from "../assets/images/tumbad5.webp";
import android_download from "../assets/images/android_download.svg";
import ios_download from "../assets/images/ios_download.svg";

const HeroSection = ({ id }) => {
  return (
    <section
      id={id}
      className="relative min-h-screen bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000cb] z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row md:items-center justify-center gap-10 min-h-screen">
        <div className="lg:flex-1 flex flex-col justify-between h-full text-left">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
              Blockbuster Movie
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              2025 · 2h 45m · multi language · sci-fi / adventure
            </p>
            <p className="max-w-xl mb-8 text-sm md:text-base leading-relaxed">
              The journey from the vibrant souks and palaces of Marrakech to the
              tranquil, starlit sands of Merzouga showcases the diverse splendor
              of Morocco. Watch full seasons of exclusive streaming series.
            </p>

            <div className="flex flex-wrap justify-start gap-4 sm:gap-8 mb-10">
              <button className="bg-[#a70d65] transition flex items-center space-x-3 gap-3 relative btn_line text-white px-5 py-2 rounded font-bold text-[16px] font-semibold">
                <MdOutlineAddShoppingCart className="text-[26px]" />
                Add To List
              </button>
              <button className="flex items-center gap-2 border px-5 py-2 rounded relative btn_line hover:border-0 hover:bg-black">
                <FaPlay className="text-[#a70d65]" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col items-center md:items-start gap-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full !pb-12"
          >
            {[slide1, slide2, slide3, slide4, slide5].map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-lg w-full h-32 sm:h-36 object-cover hover:scale-105 transition duration-300 border border-white/20"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Download Section under slider */}
          <div className="w-full flex flex-col items-center gap-4 mt-5">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">
              Download Now
            </h3>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* Play Store */}
              <a href="#" className="w-36 sm:w-40 md:w-44 h-12">
                <img
                  src={android_download}
                  alt="Download on Play Store"
                  className="w-full h-full object-contain"
                />
              </a>

              {/* App Store */}
              <a href="#" className="w-36 sm:w-40 md:w-44 h-12">
                <img
                  src={ios_download}
                  alt="Download on App Store"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
