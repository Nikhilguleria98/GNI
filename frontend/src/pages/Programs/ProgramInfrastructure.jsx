import { useParams } from "react-router-dom";
import { courseData } from "./programCatalog";

export default function ProgramInfrastructure() {
  const { programSlug } = useParams();

  const data = courseData[programSlug];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div>
      {/* Heading Section */}
      <section className="bg-gray-100 py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">
            Our Infrastructure
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
            We provide world-class infrastructure to support learning,
            research, and innovation.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={data.image}
          alt="Program"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Central Library
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-200 sm:text-base md:text-lg lg:text-xl">
                Our modern library houses an extensive collection of books,
                journals, e-resources, and digital databases, providing
                students with an ideal environment for learning, research,
                and academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}