import React from "react";
import ShopBg from "../../assets/flowers-on-wooden-cupboard-in-natural-living-room-2023-11-27-05-05-49-utc.jpg";
import MapSection from "../Home/MapSection";

const Contact = () => {
  return (
    <section>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: `url(${ShopBg})` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg mt-2">Home | Contact</p>
        </div>
      </div>

      {/* map */}
      <MapSection/>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            If you would like to know more about our policies, you can consult
            our Terms and Conditions. You will also be able to follow your order
            (tracking number will be provided in an e-mail after ordering). You
            wish to return some items? Click here.
          </p>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-xl mt-1">📍</span>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>78 Marmora Road, Glasgow, D04 89GR</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl mt-1">📞</span>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+880173812417</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl mt-1">✉️</span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>krishnorooy@gamil.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl mt-1">⏰</span>
              <div>
                <h4 className="font-semibold">Open Hours</h4>
                <p>
                  Monday to Friday 09:30 – 17:30
                  <br />
                  Saturday & Sunday 10:00 – 15:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us An Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded w-full hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
