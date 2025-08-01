import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { FaQuoteRight } from "react-icons/fa";
import client1 from "../assets/images/client_1.png";
import client2 from "../assets/images/client_2.png";
import client3 from "../assets/images/client_3.png";

const testimonials = [
  {
    id: 1,
    name: "Marvin",
    title: "Manager",
    text: `From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"`,
    rating: 4,
    image: client1,
  },
  {
    id: 2,
    name: "Esther Howard",
    title: "UX Designer",
    text: `Outstanding service and a beautifully serene environment. Highly recommended!`,
    rating: 5,
    image: client2,
  },
  {
    id: 3,
    name: "Darrell Steward",
    title: "Developer",
    text: `Everything was top-notch. Staff was courteous, rooms were clean, and the atmosphere was luxurious.`,
    rating: 5,
    image: client3,
  },
];

const Testimonials = ({ id }) => {
  return (
    <section
      id={id}
      className="text-white py-14 px-4 max-w-7xl mx-auto w-full scroll-mt-24 "
    >
      <div className="bg-black px-4 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65] pl-2">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-3">
              What Our Users Say
            </h2>
            <p className="text-gray-400 mb-5">
              We pride ourselves on delivering unforgettable experiences — but
              don’t just take our word for it. Our guests return time and again
              for the impeccable service, exquisite surroundings, and the
              feeling of true indulgence.
            </p>
            <p className="mt-3 text-white font-semibold text-lg">
              More than 25K clients reviews
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="bg-[#121212] rounded-xl !pb-5"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="relative p-7">
                    {/* Rating */}
                    <div className="flex mb-4 text-yellow-400 text-lg">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <span key={i}>
                            {i < testimonial.rating ? "★" : "☆"}
                          </span>
                        ))}
                    </div>

                    <p className="text-gray-300 mb-6 text-sm sm:text-base">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    <FaQuoteRight className="absolute bottom-10 right-7 text-[#a70d65] text-xl sm:text-2xl" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
