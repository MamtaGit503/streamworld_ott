import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay, FaEye, FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import videoBanner from "../assets/images/videoBanner.jpg";
import video1 from "../assets/images/video1.jpg";
import video2 from "../assets/images/video2.jpg";
import video3 from "../assets/images/video3.jpg";
import video4 from "../assets/images/video4.jpg";
import video5 from "../assets/images/video5.png";

const videos = [
  {
    id: 1,
    title: "The Boys",
    subtitle: "Watch The Trailer",
    time: "4:15",
    image: video1,
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Gladiator II (2025)",
    subtitle: "Watch The Trailer",
    time: "2:15",
    image: video2,
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "The Boys",
    subtitle: "Black partner",
    time: "3:15",
    image: video3,
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Maze Runner",
    subtitle: "Thrilling Adventure",
    time: "1:50",
    image: video4,
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Dark Forest",
    subtitle: "Watch Now",
    time: "2:05",
    image: video5,
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Video = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const openModal = (url) => {
    setCurrentUrl(url);
    setIsOpen(true);
  };

  return (
    <section
      id={id}
      className="scroll-mt-24  text-white py-14 max-w-7xl mx-auto px-4 w-full"
    >
      <div className="bg-black text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65]">
          <span className="ml-2">Exclusive Videos</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Featured Video */}
          <div className="relative rounded-xl overflow-hidden flex-1 min-h-[300px]">
            <img
              src={videoBanner}
              alt="Featured"
              className="w-full sm:h-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 bg-white cursor-pointer text-[#a70d65] hover:text-black rounded-full flex items-center justify-center shadow-lg "
                onClick={() =>
                  openModal("https://www.youtube.com/embed/dQw4w9WgXcQ")
                }
              >
                <FaPlay />
              </div>
            </div>
          </div>

          {/* Right: Slider List */}
          <div className="w-full lg:w-[400px]">
            <div className="max-h-full lg:max-h-[500px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-[#a70d65]/60 pr-2">
              <Swiper
                direction="vertical"
                spaceBetween={20}
                slidesPerView="auto"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id} className="!h-auto">
                    <div className="flex gap-4 items-start bg-gradient-to-b from-[#1c1c1c] to-[#121212] p-3 rounded-xl">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                        onClick={() => openModal(video.youtube)}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{video.time}</p>
                        <h3 className="text-lg font-semibold">{video.title}</h3>
                        <p className="text-sm text-gray-400">
                          {video.subtitle}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-[#a70d65]">
                          <span className="flex items-center gap-1">
                            <FaEye /> 345
                          </span>
                          <span className="flex items-center gap-1">
                            <FaHeart /> 34
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=63t6cn9rlXWWbKpb"
              title="YouTube video player"
              frameborder="0"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl  border border-gray-400"
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute youtube_cross text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
