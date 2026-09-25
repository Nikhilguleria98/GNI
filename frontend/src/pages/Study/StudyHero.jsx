import React from 'react'
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import studyData from "../../data/studyData";
import { useParams } from "react-router-dom";
const StudyHero = () => {
  const { studySlug } = useParams();
  const study = studyData[studySlug];
    if (!study) {
        return (
            <div className="flex min-h-screen items-center justify-center">
            <h1>Study not found</h1>
            </div>
         );
        } 
  return (
    <div>
     <section className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[650px] lg:min-h-[600px]">
       <img
         src={study.heroImage || "/i1.png"}
         alt={`${study.title} Campus`}
         className="absolute inset-0 h-full w-full object-cover object-center"
       />
     
       <div className="absolute inset-0 bg-gradient-to-r from-[#f35b0a]/95 via-[#f35b0a]/60 to-transparent" />
     
       <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1400px] items-center px-5 py-16 sm:min-h-[650px] sm:px-8 md:px-10 lg:min-h-[600px] lg:px-14">
         <div className="w-full max-w-[800px]">
           <div className="mb-6 inline-flex items-center rounded-md bg-[#df2929] px-4 py-2.5 sm:mb-7 sm:px-5 sm:py-3">
             <span className="text-[12px] font-bold text-white sm:text-[13px] lg:text-[14px]">
               Study Here
             </span>
           </div>
     
           <h1 className="mb-5 max-w-[800px] text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[50px]">
             {study.title}
           </h1>
     
           <p className="mb-8 max-w-[610px] text-[14px] font-normal leading-6 text-white sm:text-[15px] sm:leading-7 md:text-[17px] lg:text-[18px] lg:leading-7">
             {study.description}
           </p>
     
           <div className="mt-6 flex flex-wrap gap-5 text-white">
              {study.points.map((point) => (
             <div key={point} className="flex items-center gap-2">
                 <IoCheckmarkDoneCircle size={24} />
                <span>{point}</span>
              </div>
               ))}
            </div>
         </div>
       </div>
     </section>  
    </div>
  )
}

export default StudyHero
