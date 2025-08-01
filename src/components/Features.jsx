import React from "react";
import {
  FaBroadcastTower,
  FaUserCog,
  FaLanguage,
  FaDownload,
  FaMobileAlt,
  FaLock,
  FaBell,
  FaHeart,
  FaHistory,
} from "react-icons/fa";

const Features = ({ id }) => {
  const features = [
    {
      icon: <FaBroadcastTower className="iconFeat" />,
      title: "Live Broadcasting",
      description: "Watch live events with low latency.",
    },
    {
      icon: <FaUserCog className="iconFeat" />,
      title: "User Profiles",
      description: "Personalized experience for every user.",
    },
    {
      icon: <FaLanguage className="iconFeat" />,
      title: "Multi-language Support",
      description: "Interface and content in your language.",
    },
    {
      icon: <FaDownload className="iconFeat" />,
      title: "Offline Downloads",
      description: "Watch later without internet.",
    },
    {
      icon: <FaMobileAlt className="iconFeat" />,
      title: "Cross-Platform Support",
      description: "Use on mobile, TV, and desktop.",
    },
    {
      icon: <FaLock className="iconFeat" />,
      title: "Secure Streaming",
      description: "Encrypted and safe viewing.",
    },
    {
      icon: <FaBell className="iconFeat" />,
      title: "Instant Alerts",
      description: "Get notified for live shows and updates.",
    },
    {
      icon: <FaHeart className="iconFeat" />,
      title: "Favorites",
      description: "Bookmark what you love.",
    },
    {
      icon: <FaHistory className="iconFeat" />,
      title: "Watch History",
      description: "Continue from where you left off.",
    },
  ];

  return (
    <section
      id={id}
      className=" text-white  sm:px-6 py-14 mt-10 max-w-7xl mx-auto px-4 w-full scroll-mt-24 "
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65]">
        <span className="ml-2">Top Features</span>
      </h2>

      <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 pb-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] max-w-sm bg-[#121212] rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Feature Icon */}
            <div className="flex justify-start items-center mb-4 relative">
              <div className="feature_icon">{item.icon}</div>
            </div>

            <div className="px-4 pb-4 space-x-2 text-center flex items-center justify-center">
              <p className="text-xl !w-2 !h-2 bg-[#a70d65] font-bold rounded-full"></p>
              <span className="ml-1 text-[20px]">{item.title}</span>
            </div>

            <div className="px-4 pb-4 space-y-2 text-center">
              <h3 className="text-[16px]">{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
