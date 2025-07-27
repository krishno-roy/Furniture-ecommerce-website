import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Peter, Belgium",
    subtitle: "on what he learned when sitting with himself",
    text: `Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance. Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance.`,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Peter, Belgium",
    subtitle: "on what he learned when sitting with himself",
    text: `Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance. Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance.`,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Peter, Belgium",
    subtitle: "on what he learned when sitting with himself",
    text: `Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance. Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance.`,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Peter, Belgium",
    subtitle: "on what he learned when sitting with himself",
    text: `Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance. Indulge in our luxury women’s jewelry collection. Handcrafted to perfection, our pieces offer timeless beauty and elegance.`,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Our happy customer saying
      </h2>
      <p className="text-gray-600 mb-10">
        Discover rings, earrings, bracelets, and more. Shop today for exquisite
        treasures.
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-white p-6 text-left h-full ${
                index % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
