import { BsStars } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Hero() {
  return (
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black"
>

{/* Background */}

<div className="absolute inset-0">

<div className="absolute top-24 left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[130px] animate-float"></div>

<div className="absolute bottom-16 right-16 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px] animate-glow"></div>

</div>

<div className="relative z-10 max-w-7xl mx-auto px-8 py-20">

<div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT */}

<div>

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8 animate-float">

    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>

    <span className="text-cyan-300 font-medium">
      India's AI Career Copilot
    </span>

  </div>

  {/* Heading */}

 <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">

  Build Your
  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    Dream Career
  </span>

  <br />

  With SkillBridge AI

</h1>

  <p className="mt-8 text-xl text-slate-300 leading-9 max-w-xl">

    SkillBridge AI helps students build resumes,
    prepare for interviews, discover career roadmaps,
    practice aptitude, and land internships with personalized AI guidance.

  </p>

  {/* Buttons */}

  <div className="flex gap-5 mt-10">

   <Link to="/setup">
  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_40px_rgba(59,130,246,.6)] hover:scale-105 transition-all duration-300">
    Get Started →
  </button>
</Link>

    <button className="px-8 py-4 rounded-xl border border-cyan-400 text-white hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">

      Try AI Assistant

    </button>

  </div>

  {/* Stats */}

  <div className="grid grid-cols-3 gap-6 mt-16">

    <div>
      <h2 className="text-3xl font-bold text-cyan-400">10K+</h2>
      <p className="text-slate-400">Students</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-purple-400">500+</h2>
      <p className="text-slate-400">Companies</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
      <p className="text-slate-400">Placement Ready</p>
    </div>

  </div>

</div>

{/* RIGHT */}

<div className="relative flex items-center justify-center h-[650px]">

  {/* Outer Rotating Ring */}
  <div className="absolute h-96 w-96 rounded-full border border-cyan-400/30 animate-spin-slow"></div>

  {/* Second Ring */}
  <div className="absolute h-80 w-80 rounded-full border-2 border-purple-500/40 animate-rotate"></div>

  {/* Third Ring */}
  <div className="absolute h-64 w-64 rounded-full border border-cyan-300/40 animate-spin-slow"></div>

  {/* AI Core */}
  <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-glow shadow-[0_0_80px_rgba(59,130,246,0.8)] flex items-center justify-center">

    <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
<BsStars className="relative z-10 text-white text-6xl animate-pulse" />
  </div>
{/* Floating Dots */}

  <div className="absolute top-20 left-24 h-4 w-4 rounded-full bg-cyan-400 animate-bounce-slow"></div>

  <div className="absolute bottom-24 right-24 h-5 w-5 rounded-full bg-purple-500 animate-float"></div>

  <div className="absolute top-1/2 right-10 h-3 w-3 rounded-full bg-white animate-glow"></div>

  <div className="absolute bottom-10 left-20 h-2 w-2 rounded-full bg-cyan-300 animate-bounce-slow"></div>

</div>

</div>

</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

  <div className="w-6 h-10 rounded-full border-2 border-cyan-400 flex justify-center">

    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>

  </div>

</div>
</motion.section>
);
}

export default Hero;