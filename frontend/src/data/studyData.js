import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaFlask,
  FaHandsHelping,
  FaDesktop,
  FaEye,
  FaLaptopCode,
  FaUsers,
  FaMicroscope,
  FaTools,
  FaLightbulb,
  FaShieldAlt,
  FaBookOpen,
  FaProjectDiagram,
  FaBriefcase,
  FaChartLine,
  FaFileAlt,
  FaComments,
  FaBrain,
  FaHandshake,
  FaRobot,
  FaLeaf,
  FaHeartbeat,
  FaWifi,
  FaTrophy,
  FaUserFriends,
  FaRunning,
  FaSmileBeam,
} from "react-icons/fa";
const studyData = {
  faculty: {
    title: "Experienced & Dedicated Faculty",
    description:
      "Learn from highly qualified and experienced faculty members who are committed to your growth and success. Our mentors guide you at every step of our academic journey",

    image: "/g1.png",

    points: [
      "Industry Experts",
      "Research Mentors",
      "Personal Guidance",
      "Student Support",
    ],
  },

  classrooms: {
    title: "Modern Smart Classrooms",
    description:
      "Interactive learning spaces with digital tools and technology-enabled teaching methods.",

    image: "/g2.png",

    points: [
      "Smart Boards",
      "Digital Learning",
      "Interactive Sessions",
      "AV Facilities",
    ],
  },

  laboratories: {
    title: "Advanced Laboratories",
    description:
      "State-of-the-art laboratories with modern equipment.",

    heroImage: "/Advan.jpg",

    points: [
      "Modern Equipment",
      "Hands-On Training",
      "Research Support",
      "Innovation Labs",
    ],
  },

  curriculum: {
    title: "Industry-Oriented Curriculum",
    description:
      "Future-ready curriculum aligned with industry requirements.",

    image: "/g4.png",

    points: [
      "Industry Projects",
      "Case Studies",
      "Skill Development",
      "Career Focused",
    ],
  },

  placements: {
    title: "Excellent Placement Support",
    description:
      "Comprehensive placement assistance and career guidance.",

    image: "/g5.png",

    points: [
      "Top Recruiters",
      "Mock Interviews",
      "Resume Building",
      "Career Guidance",
    ],
  },

  research: {
    title: "Innovation & Research Culture",
    description:
      "We encourage ",

    image: "/g6.png",

    points: [
      "Research Projects",
      "Innovation Labs",
      "Startup Support",
      "Patent Guidance",
    ],
  },

  campus: {
    title: "Vibrant Campus Life",
    description:
      "More than just academics - experience a vibrant campus life with events,clubs, sports and opportunities to beyond the classrooms.",

    image: "/g7.png",

    points: [
      "Student Clubs",
      "Sports Activities",
      "Cultural Events",
      "Leadership Programs",
    ],
  },
};
export const studyOverviewData = {
  faculty: {
    highlight: {
      number: "100+",
      title: "Expert Faculty",
      description:
        "Learn from highly qualified and experienced professors dedicated to academic excellence.",
    },

    cards: [
      {
        title: "Experienced Mentors",
        description:
          "Faculty members with strong academic and industry backgrounds.",
        image: "/i31.png",
      },
      {
        title: "Personal Guidance",
        description:
          "Regular mentoring and academic support for every student.",
        image: "/per.png",
      },
      {
        title: "Interactive Learning",
        description:
          "Modern teaching methods that encourage participation and innovation.",
        image: "/int.png",
      },
    ],

    image: "/faculty-overview.jpg",
  },

  classrooms: {
    highlight: {
      number: "50+",
      title: "Smart Classrooms",
      description:
        "Technology-enabled classrooms designed for engaging learning experiences.",
    },

    cards: [
      {
        title: "Digital Boards",
        description:
          "Interactive smart boards for enhanced teaching and presentations.",
        image: "/digit.png",
      },
      {
        title: "Audio Visual Learning",
        description:
          "Projectors and multimedia tools for better understanding.",
        image: "/classroom-2.jpg",
      },
      {
        title: "Comfortable Environment",
        description:
          "Spacious classrooms with modern infrastructure.",
        image: "/classroom-3.jpg",
      },
    ],

    image: "/smart-classroom.jpg",
  },

  laboratories: {
    highlight: {
      number: "25+",
      title: "Advanced Labs",
      description:
        "Hands-on practical learning through modern laboratories and equipment.",
    },

    cards: [
      {
        title: "Modern Equipment",
        description:
          "Industry-standard tools and laboratory instruments.",
        image: "/lab-1.jpg",
      },
      {
        title: "Practical Training",
        description:
          "Real-world experimentation and project-based learning.",
        image: "/prac.png",
      },
      {
        title: "Research Support",
        description:
          "Facilities that encourage innovation and research activities.",
        image: "/lab-3.jpg",
      },
    ],

    image: "/labs.jpg",
  },

  curriculum: {
    highlight: {
      number: "95%",
      title: "Industry Focus",
      description:
        "Curriculum aligned with current industry trends and requirements.",
    },

    cards: [
      {
        title: "Skill Development",
        description:
          "Programs designed to improve employability and practical skills.",
        image: "/curriculum-1.jpg",
      },
      {
        title: "Industry Projects",
        description:
          "Exposure to real-world projects and case studies.",
        image: "/curriculum-2.jpg",
      },
      {
        title: "Professional Training",
        description:
          "Workshops and certifications from industry experts.",
        image: "/curriculum-3.jpg",
      },
    ],

    image: "/curriculum.jpg",
  },

  placements: {
    highlight: {
      number: "500+",
      title: "Placement Opportunities",
      description:
        "Dedicated placement cell helping students build successful careers.",
    },

    cards: [
      {
        title: "Top Recruiters",
        description:
          "Connections with leading national and international companies.",
        image: "/placement-1.jpg",
      },
      {
        title: "Career Guidance",
        description:
          "Resume building, interview preparation and counseling.",
        image: "/placement-2.jpg",
      },
      {
        title: "Campus Drives",
        description:
          "Regular recruitment and placement activities on campus.",
        image: "/placement-3.jpg",
      },
    ],

    image: "/i30.png",
  },

  research: {
    highlight: {
      number: "100+",
      title: "Research Projects",
      description:
        "Strong focus on innovation, creativity and research excellence.",
    },

    cards: [
      {
        title: "Innovation Labs",
        description:
          "Dedicated spaces for research and development.",
        image: "/lab.png",
      },
      {
        title: "Research Guidance",
        description:
          "Support from faculty members and industry experts.",
        image: "/research.png",
      },
      {
        title: "Startup Culture",
        description:
          "Encouragement for entrepreneurship and innovation.",
        image: "/Start.png",
      },
    ],

    image: "/research.jpg",
  },

  campus: {
    highlight: {
      number: "50+",
      title: "Campus Events",
      description:
        "A vibrant campus with cultural, sports and academic activities.",
    },

    cards: [
      {
        title: "Student Clubs",
        description:
          "Multiple clubs for leadership, creativity and networking.",
        image: "/stu.png",
      },
      {
        title: "Sports Activities",
        description:
          "Indoor and outdoor sports facilities for students.",
        image: "/sport.png",
      },
      {
        title: "Cultural Programs",
        description:
          "Festivals, competitions and celebrations throughout the year.",
        image: "/cul.png",
      },
    ],

    image: "/event.png",
  },
};
export const studyBenefitsData = {
  faculty: {
    title: "Why Choose Our Faculty?",
    benefits: [
      {
        icon: FaChalkboardTeacher,
        title: "Highly Qualified Faculty",
        description:
          "Learn from professors with strong academic and industry experience.",
      },
      {
        icon: FaUserGraduate,
        title: "Mentorship Programs",
        description:
          "Personalized guidance for academic and career success.",
      },
      {
        icon: FaFlask,
        title: "Research & Innovation",
        description:
          "Faculty actively contribute to research and innovation projects.",
      },
      {
        icon: FaHandsHelping,
        title: "Student Support",
        description:
          "Dedicated support to help students achieve their goals.",
      },
    ],
  },

  classrooms: {
    title: "Why Learn in Smart Classrooms?",
    benefits: [
      {
        icon: FaDesktop,
        title: "Interactive Learning",
        description:
          "Digital tools make learning more engaging and effective.",
      },
      {
        icon: FaEye,
        title: "Better Understanding",
        description:
          "Visual content improves concept clarity and retention.",
      },
      {
        icon: FaLaptopCode,
        title: "Flexible Learning",
        description:
          "Technology-enabled learning experience for modern students.",
      },
      {
        icon: FaUsers,
        title: "Collaborative Environment",
        description:
          "Encourages teamwork, discussion, and participation.",
      },
    ],
  },

  // ... baki sections bhi isi tarah

  campus: {
    title: "Why Campus Life Matters?",
    benefits: [
      {
        icon: FaTrophy,
        title: "Build Confidence",
        description:
          "Develop leadership and communication skills.",
      },
      {
        icon: FaUserFriends,
        title: "Create Friendships",
        description:
          "Build meaningful and lifelong connections.",
      },
      {
        icon: FaRunning,
        title: "Develop Skills",
        description:
          "Participate in clubs, sports, and activities.",
      },
      {
        icon: FaSmileBeam,
        title: "Make Memories",
        description:
          "Enjoy a vibrant and memorable campus experience.",
      },
    ],
  },
};
export default studyData;