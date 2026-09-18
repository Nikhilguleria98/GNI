import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaHome,
  FaTag,
  FaCheckCircle,
  FaGraduationCap,
  FaBriefcase,
  FaBookOpen,
} from "react-icons/fa";

const events = {
  "scholarship-result": {
    title: "Student Scholarships & Academic Excellence",
    date: "GNI STUDENT INITIATIVE",
    images: [
      "/scholarship.png",
      "/scholarship.png",
      "/scholarship.png",
      "/scholarship.png",
    ],
    intro:
      "Guru Nanak Institutions, Hema Majra Road, Mullana (Ambala), supports students through academic opportunities and initiatives that encourage learning, achievement and overall development.",
    sections: [
      {
        title: "Encouraging Academic Excellence",
        text:
          "GNI encourages students to work towards academic excellence and make the most of the learning opportunities available across its institutions.",
      },
      {
        title: "Supporting Student Growth",
        text:
          "Along with classroom learning, students are encouraged to develop professional skills, participate in academic activities and prepare for future career opportunities.",
      },
      {
        title: "Student Development",
        points: [
          "Focus on academic learning and achievement.",
          "Opportunities for professional and personal development.",
          "Supportive academic environment for students.",
        ],
      },
    ],
  },

  "faculty-development": {
    title: "Faculty Development & Academic Learning",
    date: "GNI ACADEMIC INITIATIVE",
    images: [
      "/faculty-development.jpg",
      "/faculty-development.jpg",
      "/faculty-development.jpg",
      "/faculty-development.jpg",
    ],
    intro:
      "Guru Nanak Institutions promotes continuous academic development and knowledge sharing among faculty members to support an effective learning environment for students.",
    sections: [
      {
        title: "Academic Development",
        text:
          "Faculty members contribute to the academic environment through teaching, academic discussions and continuous improvement in educational practices.",
      },
      {
        title: "Knowledge Sharing",
        text:
          "Academic interaction and knowledge sharing help faculty members exchange ideas and explore new approaches to teaching and learning.",
      },
      {
        title: "Key Focus Areas",
        points: [
          "Continuous academic learning.",
          "Knowledge sharing among faculty members.",
          "Improvement of teaching and learning practices.",
        ],
      },
    ],
  },

  "research-innovation": {
    title: "Research & Innovation at GNI",
    date: "GNI ACADEMIC INITIATIVE",
    images: [
      "/research-innovation.jpg",
      "/research-innovation.jpg",
      "/research-innovation.jpg",
      "/research-innovation.jpg",
    ],
    intro:
      "Guru Nanak Institutions encourages students and faculty members to explore research, technology and innovative ideas as part of academic and professional development.",
    sections: [
      {
        title: "Promoting Innovation",
        text:
          "GNI provides an academic environment where students and faculty can explore new ideas, technical concepts and research-oriented learning.",
      },
      {
        title: "Learning Beyond the Classroom",
        text:
          "Research and practical learning allow students to connect academic concepts with real-world applications and emerging technologies.",
      },
      {
        title: "Innovation Focus",
        points: [
          "Research-oriented academic learning.",
          "Technology and innovation awareness.",
          "Opportunities to explore new ideas and applications.",
        ],
      },
    ],
  },

  "skill-development": {
    title: "Skill Development & Career Preparation",
    date: "GNI STUDENT DEVELOPMENT",
    images: [
      "/skill-development.jpg",
      "/skill-development.jpg",
      "/skill-development.jpg",
      "/skill-development.jpg",
    ],
    intro:
      "Guru Nanak Institutions focuses on helping students develop academic, technical and professional skills that can support their future career journey.",
    sections: [
      {
        title: "Developing Industry-Ready Skills",
        text:
          "Students are encouraged to develop practical knowledge and professional skills alongside their academic studies.",
      },
      {
        title: "Career & Professional Growth",
        text:
          "GNI's academic and placement-related activities provide students with opportunities to prepare for professional careers and interact with the world of work.",
      },
      {
        title: "Student Skill Development",
        points: [
          "Technical and practical learning.",
          "Professional and communication skills.",
          "Career preparation and placement-oriented development.",
        ],
      },
    ],
  },
};

const latestEvents = [
  {
    slug: "faculty-development",
    title: "Faculty Development & Academic Learning",
    date: "GNI ACADEMIC INITIATIVE",
  },
  {
    slug: "research-innovation",
    title: "Research & Innovation at GNI",
    date: "GNI ACADEMIC INITIATIVE",
  },
  {
    slug: "skill-development",
    title: "Skill Development & Career Preparation",
    date: "GNI STUDENT DEVELOPMENT",
  },
];

const EventDetailsPage = () => {
  const { eventSlug } = useParams();
  const event = events[eventSlug];

  const [activeImage, setActiveImage] = useState(0);

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#18233b]">
            Event Not Found
          </h1>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-5 py-3 text-sm font-semibold text-white"
          >
            Back to Home
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-10">

        {/* Breadcrumb */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-[#ff5b00]"
          >
            <FaHome />
            Home
          </Link>

          <span>/</span>

          <span>Latest Updates & Events</span>

          <span>/</span>

          <span className="truncate text-[#ff5b00]">
            {event.title}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-10">

          {/* Main Content */}
          <article className="min-w-0">

            {/* Title */}
            <h1 className="text-3xl font-extrabold leading-tight text-[#18233b] sm:text-4xl md:text-5xl">
              {event.title}
            </h1>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#ff5b00]" />
                {event.date}
              </div>

              <span className="hidden h-5 w-px bg-gray-300 sm:block" />

              <div className="flex items-center gap-2">
                <FaTag className="text-[#ff5b00]" />
                GNI Updates
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-7 grid gap-3 lg:grid-cols-[minmax(0,1.7fr)_minmax(180px,0.8fr)]">

              {/* Big Image */}
              <div className="h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[500px]">
                <img
                  src={event.images[activeImage]}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small Images */}
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:grid-rows-3">
                {event.images.slice(1, 4).map((image, index) => {
                  const imageIndex = index + 1;

                  return (
                    <button
                      key={imageIndex}
                      onClick={() => setActiveImage(imageIndex)}
                      className={`h-[110px] overflow-hidden rounded-xl sm:h-[130px] lg:h-auto lg:min-h-0 ${
                        activeImage === imageIndex
                          ? "ring-2 ring-[#ff5b00]"
                          : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${event.title} ${imageIndex}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Intro */}
            <p className="mt-7 text-[15px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
              {event.intro}
            </p>

            {/* Event Sections */}
            <div className="mt-8 space-y-8">
              {event.sections.map((section, index) => (
                <div key={index}>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-7 w-1 shrink-0 rounded-full bg-[#ff5b00]" />

                    <h2 className="text-xl font-bold text-[#18233b] sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  {section.text && (
                    <p className="mt-3 pl-4 text-[15px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                      {section.text}
                    </p>
                  )}

                  {section.points && (
                    <ul className="mt-4 space-y-3 pl-4">
                      {section.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-[15px] leading-6 text-gray-600"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-[#ff5b00]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
            </div>

            {/* Academic & Career Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-gray-200 p-5">
                <FaGraduationCap className="text-2xl text-[#ff5b00]" />

                <h3 className="mt-3 font-bold text-[#18233b]">
                  Academic Growth
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Opportunities that support learning, academic development
                  and student progress at GNI Mullana.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <FaBookOpen className="text-2xl text-[#ff5b00]" />

                <h3 className="mt-3 font-bold text-[#18233b]">
                  Learning Opportunities
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Students can explore academic and professional learning
                  across different areas of study.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <FaBriefcase className="text-2xl text-[#ff5b00]" />

                <h3 className="mt-3 font-bold text-[#18233b]">
                  Career Preparation
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  GNI's placement-oriented activities help students prepare
                  for professional opportunities.
                </p>
              </div>

            </div>

            {/* Academic Opportunities */}
            {/* <div className="mt-10 rounded-xl bg-[#fff7f1] p-6 sm:p-7">

              <h2 className="text-2xl font-bold text-[#18233b]">
                Academic Opportunities at GNI Mullana
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-gray-600">
                GNI Mullana provides students with opportunities to pursue
                higher education and develop knowledge and professional
                skills in their chosen fields.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Engineering
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Computer Science
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Electronics & Communication
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Civil Engineering
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Mechanical Engineering
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#18233b] shadow-sm">
                  Pharmacy
                </span>

              </div>
            </div> */}

            {/* Bottom Message */}
            <div className="mt-10 rounded-xl bg-[#fff5ef] p-5 sm:p-6">
              <p className="text-[15px] leading-7 text-gray-700">
                Guru Nanak Institutions, Mullana continues to provide
                students with opportunities for learning, skill development,
                academic growth and professional development.
              </p>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="min-w-0">

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

              <h2 className="text-xl font-extrabold text-[#18233b]">
                Latest Updates
                <span className="text-[#ff5b00]"> & Events</span>
              </h2>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#ff5b00]" />

              <div className="mt-5 divide-y divide-gray-200">
                {latestEvents.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/events/${item.slug}`}
                    className="group block py-5 first:pt-0 last:pb-0"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                      {item.date}
                    </p>

                    <h3 className="mt-2 text-[16px] font-bold leading-6 text-[#18233b] group-hover:text-[#ff5b00]">
                      {item.title}
                    </h3>

                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5b00]">
                      Read More
                      <FaArrowRight className="text-xs" />
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                to="/"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#ff5b00] px-5 py-3 text-sm font-semibold text-white hover:bg-[#e65000]"
              >
                View All Events
                <FaArrowRight />
              </Link>

            </div>

          </aside>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#ff5b00] px-4 py-8 sm:px-6 lg:px-18">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* CTA Content */}
            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Guru Nanak Institutions, Mullana
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Explore Academic Opportunities
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/90 sm:text-base">
                Discover programmes, academic learning and career-focused
                opportunities available at GNI Mullana.
              </p>

            </div>

            {/* CTA Button */}
            <Link
              to="/programs"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#ff5b00] transition hover:shadow-lg"
            >
              View Programs
              <FaArrowRight />
            </Link>

          </div>

          {/* CTA Links */}
          {/* <div className="mt-6 grid gap-3 sm:grid-cols-3">

            <Link
              to="/programs"
              className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Academic Programs
            </Link>

            <Link
              to="/placements"
              className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Placements & Careers
            </Link>

            <Link
              to="/campus-life"
              className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Campus Life
            </Link>

          </div> */}

        </div>
      </div>

    </section>
  );
};

export default EventDetailsPage;