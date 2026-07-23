export default function WelcomeCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 max-w-[90%]">
      <p className="text-cyan-400 font-semibold">
        SkillBridge AI ✨
      </p>

      <p className="mt-3 text-slate-300 leading-6">
        Hello! I'm your AI Career Companion.
        <br />
        <br />
        I'm here to help you build the skills, confidence, and experience you
        need to achieve your career goals.
        <br />
        <br />
        <span className="font-medium text-white">
          What would you like to work on today?
        </span>
      </p>
    </div>
  );
}