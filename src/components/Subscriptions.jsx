import React, { useState } from "react";
import { FaCrown } from "react-icons/fa";

const plans = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently titles.",
    monthly: "$9.99",
    yearly: "$99.99",
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    monthly: "$12.99",
    yearly: "$129.99",
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    monthly: "$14.99",
    yearly: "$149.99",
  },
];

const Subscriptions = ({ id }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section
      id={id}
      className="text-white py-14 px-4 max-w-7xl mx-auto w-full scroll-mt-24 "
    >
      <div className="bg-black px-4 md:px-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#a70d65] pl-3">
          Subscription Plan
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#090909b3] p-1 rounded flex gap-2 border  hover:border-transparent transition flex items-center space-x-3 gap-3 relative btn_line text-white shadow-lg px-3 py-2 rounded font-bold text-[16px] font-semibold">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded font-medium text-sm sm:text-base transition ${
                billingCycle === "monthly"
                  ? "bg-[#a70d65] text-white"
                  : "text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded font-medium text-sm sm:text-base transition ${
                billingCycle === "yearly"
                  ? "bg-[#a70d65] text-white"
                  : "text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6  rounded-xl shadow-lg flex flex-col justify-between"
            >
              <div className="hidden lg:flex space-x-2 items-center bg-black text-white px-5 mb-6 py-3 rounded font-bold text-[16px]">
                <FaCrown className="text-[#a70d65] text-[18px]" />
                <span>{plan.title}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-xl sm:text-2xl font-bold mb-6">
                {billingCycle === "monthly" ? plan.monthly : plan.yearly}
                <sub className="text-sm font-normal text-gray-400 ml-1">
                  /{billingCycle === "monthly" ? "Month" : "Year"}
                </sub>
              </div>

              {/* Buttons */}
              <div className="flex flex-col xl:flex-row gap-3 mt-auto">
                <button className="bg-black flex items-center gap-2 border px-5 py-2 rounded relative btn_line hover:border hover:border-transparent hover:bg-black text-[#a70d65] hover:text-[#a70d65]">
                  Start Free Trial
                </button>
                <button className="bg-[#a70d65] transition flex items-center space-x-3 gap-3 relative btn_line text-white px-5 py-2 rounded text-[14px] font-semibold">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
