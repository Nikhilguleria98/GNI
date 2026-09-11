import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "James Pattinson",
    image: "/testimonial1.png",
    rating: 4,
    text: "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.",
  },
  {
    id: 2,
    name: "Greg Stuart",
    image: "/testimonial2.png",
    rating: 5,
    text: "Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices.",
  },
  {
    id: 3,
    name: "Trevor Mitchell",
    image: "/testimonial3.png",
    rating: 3,
    text: "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#eef2ff] px-4 py-10 sm:px-6 md:py-12 lg:px-8 lg:py-14">

      {/* heading */}
      <div className="mb-8 text-center sm:mb-10">
        <div className="group inline-block">
          <h2 className="text-[20px] font-bold tracking-wide text-[#f97316] sm:text-[22px] md:text-[24px] lg:text-[25px]">
            TESTIMONIALS
          </h2>

          <div className="mt-1.5 h-[2px] w-full origin-left scale-x-0 bg-[#f97316] transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </div>
      </div>

      {/* testimonials */}
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;

            return (
              <article key={testimonial.id} onClick={() => handleCardClick(index)} className={`group cursor-pointer rounded-[16px] border border-[#ff7a00] bg-[#eef2ff] px-5 pb-5 pt-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-5 md:px-6 lg:px-5 ${isActive ? "shadow-[0_5px_15px_rgba(255,122,0,0.08)]" : ""}`}>

                {/* profile image */}
                <div className="mx-auto mb-3 h-[82px] w-[82px] overflow-hidden rounded-full sm:h-[88px] sm:w-[88px]">
                  <img src={testimonial.image} alt={testimonial.name} width="100" height="100" className="h-full w-full object-cover" />
                </div>

                {/* name */}
                <h3 className="font-serif text-[17px] font-bold text-[#4b176b] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  {testimonial.name}
                </h3>

                {/* stars */}
                <div className="mt-1.5 flex justify-center gap-[4px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className={`text-[17px] sm:text-[18px] ${star <= testimonial.rating ? "text-[#f97316]" : "text-[#c9c9c9]"}`} />
                  ))}
                </div>

                {/* review */}
                <p className="mx-auto mt-4 max-w-[320px] font-serif text-[14px] leading-[1.6] text-[#333] sm:text-[15px] md:text-[16px] lg:text-[17px]">
                  “{testimonial.text}”
                </p>

              </article>
            );
          })}
        </div>
      </div>

      {/* slider dots */}
      <div className="mt-5 flex items-center justify-center gap-[6px]">
        {testimonials.map((testimonial, index) => (
          <button key={testimonial.id} type="button" aria-label={`Go to testimonial ${index + 1}`} onClick={() => handleDotClick(index)} className={`h-[8px] w-[8px] rounded-full transition-all duration-300 sm:h-[9px] sm:w-[9px] ${activeIndex === index ? "bg-[#f97316]" : "bg-[#f5b99a]"}`} />
        ))}
      </div>

    </section>
  );
}