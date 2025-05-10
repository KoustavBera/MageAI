import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font font-semibold">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12">What our customers are saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/45 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center ">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full w-14"
              />
              <h2>{testimonial.name}</h2>
              <p className="font-light text-zinc-700">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, starIndex) => (
                    <img
                      src={assets.rating_star}
                      key={`star-${index}-${starIndex}`}
                      alt=""
                    />
                  ))}
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
