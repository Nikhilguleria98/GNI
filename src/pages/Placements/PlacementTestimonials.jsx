const PlacementTestimonials = ({ data }) => { 
  return ( 
    <section className="w-full bg-[#f8fafc] py-12 sm:py-14 md:py-16 lg:py-20"> 
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"> 
 
        {/* Heading */} 
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12"> 
 
          <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.3em] text-[#ff5b00] sm:text-[15px] md:text-[16px]"> 
            Student Voices 
          </p> 
 
          <h2 className="text-[28px] font-extrabold leading-[1.15] text-[#111827] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]"> 
            What Our Students Say? 
          </h2> 
 
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-6 text-gray-500 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7"> 
            Our alumni are making their mark across leading organizations and 
            industries. Discover how our placement support has shaped their 
            academic journeys and professional success. 
          </p> 
        </div> 
 
        {/* Testimonials */} 
        <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"> 
          {data.map((testimonial, index) => ( 
            <div key={`${testimonial.name}-${index}`} className="group flex min-h-[245px] flex-col rounded-md border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5b00]/30 hover:shadow-md sm:p-6"> 
 
              {/* Quote */} 
              <div className="mb-3 text-[36px] font-bold leading-none text-[#ff5b00]/20 sm:text-[40px]"> 
                “ 
              </div> 
 
              {/* Text */} 
              <p className="flex-1 text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:text-[17px] md:leading-7 lg:text-[18px] lg:leading-7"> 
                {testimonial.text} 
              </p> 
 
              {/* Student */} 
              <div className="mt-5 border-t border-gray-100 pt-4"> 
                <h3 className="text-[14px] font-bold leading-tight text-gray-800 sm:text-[15px] md:text-[17px]"> 
                  {testimonial.name} 
                </h3> 
 
                <p className="mt-1 text-[12px] font-medium text-[#ff5b00] sm:text-[13px] md:text-[14px]"> 
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
 
export default PlacementTestimonials;