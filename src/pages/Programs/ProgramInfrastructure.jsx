import { useParams } from "react-router-dom";
import { courseData } from "./programCatalog";

export default function ProgramInfrastructure() {
  const { programSlug } = useParams();

  const data = courseData[programSlug];

  console.log("Slug:", programSlug);
  console.log("Data:", data);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
      </div>
    );
  }

  return (
    <div>
    <section className="w-full bg-gray-100">
      {/* Heading */}
      <div className="py-12 text-center">
        <h2 className="text-5xl font-bold text-orange-600">
          Our Infrastructure
        </h2>

        <p className="mt-4 text-gray-600 text-xl">
          We provide world-class infrastructure to support learning,
          research, and innovation.
        </p>
      </div>
    </section>
      <section className="relative h-[700px] w-full overflow-hidden">
        <img
         src={data.image}
          alt="Program"
           className="absolute inset-0 h-full w-full object-cover"
         />
         <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl px-8 md:px-16 text-white">
    <h2 className="text-4xl mt-20 md:text-5xl font-bold mb-4">
     Central Library
    </h2>

    <p className="text-lg leading-relaxed">
      Our modern library houses an extensive collection of books, journals, e-resources, and digital databases, providing students with an ideal environment for learning, research, and academic excellence.
    </p>
  </div>
      </section>
    </div>
  );
}