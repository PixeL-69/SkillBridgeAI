import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-between px-8 py-5 bg-slate-950"
>

      {/* Logo */}

      <div className="flex items-center gap-2">

        <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-[0_0_25px_rgba(59,130,246,0.8)]">
          SB
        </div>

        <div>

          <h1 className="text-xl font-bold">
            SkillBridge AI
          </h1>

          <p className="text-xs text-gray-400">
            AI Career Companion
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex gap-8">

        <a  href="#"
            className="hover:text-cyan-400 transition duration-300"
        >
            Features
        </a>

        <a href="#"
            className="hover:text-cyan-400 transition duration-300"
        >
            About
        </a>


        <a   href="#"
            className="hover:text-cyan-400 transition duration-300"
        >
            Pricing
        </a>

      </div>

      {/* Buttons */}

      <div className="flex gap-3">

        <button className="px-6 py-2 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300">
          Login
        </button>

        <Link to="/setup">
  <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.8)]">
    Get Started
  </button>
</Link>

      </div>

    </motion.nav>
  );
}

export default Navbar;