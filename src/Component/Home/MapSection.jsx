// MapSection.jsx
import React from "react";

const MapSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="w-full h-[400px]  overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.908434482049!2d90.39127451543144!3d23.75090358459192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a8035f43d3%3A0x93be11b427d4df8f!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1654163602734!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
