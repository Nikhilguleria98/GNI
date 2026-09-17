const ProgramTestimonial = ({ data }) => {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ff5b00] sm:text-sm md:text-base">
            Student Voices
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl md:text-5xl">
            What Our Students Say?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 md:text-lg">
            Our alumni are making their mark across leading organizations and
            industries. Discover how our placement support has shaped their
            academic journeys and professional success.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="
                group
                flex
                h-full
                min-h-[280px]
                flex-col
                rounded-xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#ff5b00]/30
                hover:shadow-lg
                sm:p-6
              "
            >
              {/* Quote */}
              <div className="mb-3 text-4xl font-bold leading-none text-[#ff5b00]/20">
                “
              </div>

              {/* Testimonial Text */}
              <p className="flex-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                {testimonial.text}
              </p>

              {/* Student Info */}
              <div className="mt-5 border-t border-gray-100 pt-4">
                <h3 className="text-sm font-bold text-gray-800 sm:text-base">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-[#ff5b00] sm:text-sm">
                  {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramTestimonial;