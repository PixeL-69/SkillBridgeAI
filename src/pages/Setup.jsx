import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Setup() {
    const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  college: "",
  degree: "",
  year: "",
  company: "",
  goal: "",
  skills: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = () => {
  if (
    !formData.name ||
    !formData.college ||
    !formData.degree ||
    !formData.year ||
    !formData.company ||
    !formData.goal ||
    !formData.skills
  ) {
    alert("Please fill in all the fields.");
    return;
  }

  localStorage.setItem(
    "skillbridgeUser",
    JSON.stringify(formData)
  );

  navigate("/chat");
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

        <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
          Welcome
        </p>

       <h1 className="text-5xl font-bold mt-4">
  Let's Build Your
  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
    {" "}Career Blueprint
  </span>
</h1>

<div className="w-full bg-slate-800 rounded-full h-2 mt-8">
  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full w-1/3"></div>
</div>

<p className="text-sm text-slate-400 mt-2">
  Step 1 of 2 • Profile Setup
</p>

        <p className="text-slate-400 mt-5 text-lg">
          Tell us a little about yourself so our AI can personalize your career roadmap.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
        

          <div>
  <label className="block text-slate-300 mb-2 font-medium">
    Full Name
  </label>

  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Enter your full name"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>
<div>
  <label className="block text-slate-300 mb-2 font-medium">
    College
  </label>

  <input
    name="college"
    value={formData.college}
    onChange={handleChange}
    placeholder="Enter your college"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>
<div>
  <label className="block text-slate-300 mb-2 font-medium">
    Degree
  </label>

  <input
    name="degree"
    value={formData.degree}
    onChange={handleChange}
    placeholder="BTech CSE AI & ML"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>
        <div>
  <label className="block text-slate-300 mb-2 font-medium">
    Current Year
  </label>

  <input
    name="year"
    value={formData.year}
    onChange={handleChange}
    placeholder="3rd Year"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>
 <div>
  <label className="block text-slate-300 mb-2 font-medium">
    Dream Company
  </label>

  <input
    name="company"
    value={formData.company}
    onChange={handleChange}
    placeholder="Google"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>
<div>
  <label className="block text-slate-300 mb-2 font-medium">
    Career Goal
  </label>

  <input
    name="goal"
    value={formData.goal}
    onChange={handleChange}
    placeholder="Software Engineer"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>

        </div>
        <div className="mt-6">
  <label className="block text-slate-300 mb-2 font-medium">
    Skills
  </label>

  <textarea
    name="skills"
    value={formData.skills}
    onChange={handleChange}
    placeholder="Example: Python, React, SQL, Machine Learning, Public Speaking, Leadership..."
    rows="5"
    required
    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition-all duration-300"
  />
</div>

      

        <div className="mt-8 flex justify-end">
  <button
    onClick={handleSubmit}
    className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 hover:shadow-[0_0_45px_rgba(59,130,246,.8)] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,.6)]"
  >
    Generate My Career Blueprint →
  </button>
        </div>

      </div>

    </div>
  );
}

export default Setup;