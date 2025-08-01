import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2eb8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="flex flex-col space-y-4">
            <img src={logo} alt="Logo" className="w-28 h-auto" />

            <div>
              <p className="text-sm mb-2">
                Email us:{" "}
                <span className="text-white">customer@streamit.com</span>
              </p>
              <p className="text-sm">Helpline number</p>
              <p className="text-lg font-bold mt-2">+(480) 555-0103</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Movies to Watch</h3>
            <ul className="space-y-2 text-sm text-gray-300 ">
              <li className="cursor-pointer hover:text-[#a70d65]">Asur</li>
              <li className="cursor-pointer hover:text-[#a70d65]">Churuli</li>
              <li className="cursor-pointer hover:text-[#a70d65]">Patallok</li>
              <li className="cursor-pointer hover:text-[#a70d65]">Tumbbad</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Home",
                "Features",
                "Gallery",
                "Video",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="cursor-pointer hover:text-[#a70d65] block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Company</h3>
            <ul className="space-y-2 text-sm text-gray-300 ">
              <li className="cursor-pointer hover:text-[#a70d65]">About Us</li>
              <li className="cursor-pointer hover:text-[#a70d65]">Shop</li>
              <li className="cursor-pointer hover:text-[#a70d65]">
                Terms and Use
              </li>
              <li className="cursor-pointer hover:text-[#a70d65]">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
            <form className="flex flex-col gap-3 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-[#48474777] text-white rounded focus:outline-none"
              />
              {/* <button
                type="submit"
                className="bg-[#a70d65] px-4 py-2 text-white rounded-r hover:bg-black hover:border rounded hover:border-[#a70d65] border border-transparent"
              >
                SUBSCRIBE
              </button> */}
              <a href="#Subscriptions">
                <button
                  type="button"
                  className="bg-[#a70d65] w-full px-4 py-2 text-white rounded-r hover:bg-black hover:border rounded hover:border-[#a70d65] border border-transparent"
                >
                  SUBSCRIBE
                </button>
              </a>
            </form>
            <p className="text-sm mb-2">Follow Us:</p>
            <div className="flex gap-3">
              <div className="bg-[#121212] p-2 rounded-full cursor-pointer">
                <FaFacebookF className="hover:text-[#a70d65]" />
              </div>
              <div className="bg-[#121212] p-2 rounded-full cursor-pointer">
                <FaXTwitter className="hover:text-[#a70d65]" />
              </div>
              <div className="bg-[#121212] p-2 rounded-full cursor-pointer">
                <FaInstagram className="hover:text-[#a70d65]" />
              </div>
              <div className="bg-[#121212] p-2 rounded-full cursor-pointer">
                <FaLinkedinIn className="hover:text-[#a70d65]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center md:text-left text-gray-400">
            © 2025{" "}
            <span className="text-[#a70d65] font-bold text-[16px] pl-2 pr-1">
              Stream Watch
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-col   items-center gap-4">
            <span className="text-md">Download Stream Watch App</span>
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
