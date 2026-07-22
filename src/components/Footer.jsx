import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-5 px-6 text-center text-sm text-slate-400">

      <p>
        Helping students bridge the gap between learning and landing their dream careers.
      </p>

      <p className="mt-2">
        Built with{" "}
        <span className="text-cyan-400">React</span> •{" "}
        <span className="text-cyan-400">Tailwind CSS</span> •{" "}
        <span className="text-cyan-400">Google Gemini AI</span>
      </p>

      <div className="flex justify-center gap-6 mt-4 text-2xl">

        <a
          href="https://github.com/PixeL-69"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-cyan-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/swayam-kumar-swain-6ab052296/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/swayhehe19"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-cyan-400"
        >
          <FaInstagram />
        </a>

      </div>

      <p className="mt-2">
        © {new Date().getFullYear()} SkillBridge AI • Developed by{" "}
        <span className="text-cyan-400 font-bold">
          Swayam Kumar Swain
        </span>
      </p>

    </footer>
  );
}

export default Footer;