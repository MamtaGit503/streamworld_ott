import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="text-white py-14 px-4 max-w-7xl mx-auto w-full scroll-mt-24 "
    >
      <div className="bg-black px-4 md:px-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65] pl-3">
          Contact Us
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <div className="bg-[#121212] p-5 rounded-lg space-y-8 r flex flex-col justify-center">
            {/* Phone */}
            <div className="flex items-start gap-4 border-b pb-6">
              <div className="border-2 border-dashed border-white rounded-full p-4 animate-pulse">
                <FaPhoneAlt className="text-xl " />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us 24/7</p>
                <p className="md:text-lg text-sm font-semibold">
                  +208-555-0112
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 border-b pb-6">
              <div className="border-2 border-dashed border-white rounded-full p-4 animate-pulse">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Make a Quote</p>
                <p className="md:text-lg text-sm font-semibold">
                  demo@Gmail.Com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="border-2 border-dashed border-white rounded-full p-4 animate-pulse">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="md:text-lg text-sm  font-semibold">
                  4517 Washington Ave.
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div>
            <h2 className="font-bold mb-6 text-[#a70d65] md:text-xl text-lg">
              Ready To Get Started?
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2.5 text-md">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#121212] p-3 rounded text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2.5 text-md">Your Email*</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#121212] p-3 rounded text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2.5 text-md">Write Message*</label>
                <textarea
                  rows="6"
                  placeholder="Write Message"
                  className="w-full bg-[#121212] p-3 rounded text-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black flex items-center gap-2 px-4 py-2  md:px-5 md:py-3 rounded relative btn_line hover:border hover:border-transparent hover:bg-black text-[#a70d65] hover:text-[#a70d65] border border-[#a70d65] text-white font-semibold"
              >
                <span className="md:text-md text-sm ">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
