import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/Group-9475.png";

const LimitedOffer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-15T00:00:00"); // set target date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8f8f8]  px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pb-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Flat 30% off <br />
            <span className="font-normal">limited time offer!</span>
          </h2>

          {/* Countdown */}
          <div className="flex justify-center md:justify-start gap-3 mb-6">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded-md shadow text-center"
              >
                <div className="text-xl font-bold">
                  {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
                </div>
                <div className="text-sm text-gray-600 uppercase">{unit}</div>
              </div>
            ))}
          </div>

          <button className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
            BUY NOW
          </button>
        </div>

        {/* Right Image */}
        <div className=" flex-col-reverse">
          <img
            src={BannerImage}
            alt="Offer"
            className="w-[800px] max-w-md mx-auto h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
