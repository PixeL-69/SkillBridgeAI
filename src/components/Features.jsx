import {
  FaBrain,
  FaFileAlt,
  FaBriefcase,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { MdTrackChanges } from "react-icons/md";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const features = [
  {
    icon: <FaBrain size={34} />,
    title: "AI Career Mentor",
    description:
      "Personalized career guidance based on your goals and skills.",
  },
  {
    icon: <FaFileAlt size={34} />,
    title: "Resume Analyzer",
    description:
      "Improve your ATS score and receive AI-powered resume suggestions.",
  },
  {
    icon: <FaBriefcase size={34} />,
    title: "Interview Coach",
    description:
      "Practice HR, technical and aptitude interviews with AI.",
  },
  {
    icon: <MdTrackChanges size={36} />,
    title: "Skill Gap Analysis",
    description:
      "Find missing skills needed for your dream company.",
  },
  {
    icon: <FaChartLine size={34} />,
    title: "Career Roadmaps",
    description:
      "Receive a personalized roadmap from college to placement.",
  },
  {
    icon: <FaRocket size={34} />,
    title: "Project Generator",
    description:
      "Get AI-generated project ideas that strengthen your portfolio.",
  },
];

function Features() {
  return (
  <section
    id="features"
    className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-black text-white py-24 px-8"
  >
    <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]"></div>
    <div className="absolute right-20 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[170px]"></div>

    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">
          Features
        </p>

        <h2 className="text-5xl font-bold mt-5">
          Everything You Need
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}to Get Hired
          </span>
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
          SkillBridge AI combines multiple AI-powered tools into one platform,
          helping students prepare for internships and placements.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          >
            <div className="text-cyan-400 mb-6 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-all duration-300">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-slate-400 leading-7">
              {feature.description}
            </p>

            <button className="mt-6 text-cyan-400 font-medium group-hover:translate-x-2 transition-transform">
              Learn More →
            </button>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);
}

export default Features;