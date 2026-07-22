import { useEffect, useRef, useState } from "react";
import { askGemini } from "../services/gemini";
import ReactMarkdown from "react-markdown";
import { HiMenu, HiX } from "react-icons/hi";
import Footer from "../components/Footer";

function Chat() {
const [sidebarOpen, setSidebarOpen] = useState(false);
const [user, setUser] = useState(null);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [copiedIndex, setCopiedIndex] = useState(null);
const messagesEndRef = useRef(null);
const inputRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("skillbridgeUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, isLoading]);
const handleClearChat = () => {
  if (window.confirm("Are you sure you want to clear this conversation?")) {
    setMessages([]);
    setMessage("");
    inputRef.current?.focus();
  }
};
const handleNewChat = () => {
  if (
    messages.length === 0 ||
    window.confirm("Start a new conversation?")
  ) {
    setMessages([]);
    setMessage("");
    inputRef.current?.focus();
  }
};
const copyToClipboard = async (text, index) => {
  try {
    await navigator.clipboard.writeText(text);

    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  } catch (err) {
    alert("Failed to copy.");
  }
};
  
const handleSend = async () => {
if (!message.trim() || isLoading) return;
if (!user) {
  alert("User profile is still loading.");
  return;
}

  // Save the user's message before clearing the input
  const userInput = message;

  const userMessage = {
    sender: "user",
    text: userInput,
  };

  // Show the user's message immediately
  setMessages((prev) => [...prev, userMessage]);

  // Clear the input box
  setMessage("");
  
  const history = [...messages, userMessage]
  .slice(-10)
  .map((msg) => {
    return `${msg.sender === "user" ? "User" : "Assistant"}:
${msg.text}`;
  })
  .join("\n\n");  

try {
  setIsLoading(true);

  const prompt = `You are SkillBridge AI, an expert AI Career Coach.

User Profile:
Name: ${user.name}
College: ${user.college}
Degree: ${user.degree}
Year: ${user.year}
Dream Company: ${user.company}
Career Goal: ${user.goal}
Skills: ${user.skills}

Conversation History:
${history}

Current User Message:
${userInput}

Instructions:
- Greet the user ONLY if this is the first AI response.
- If there is previous conversation history, continue naturally.
- Remember everything from the conversation.
- Personalize every answer using the user's profile.
- Keep responses under 150 words unless the user asks for more details.
- Be conversational and supportive.
- Use short paragraphs.
- Use bullet points whenever useful.
- Give practical, actionable advice.
- If the question is broad, answer briefly and ask if the user wants a detailed roadmap.
- End with exactly one follow-up question.
`;

  const reply = await askGemini(prompt);

  const aiMessage = {
    sender: "ai",
    text: reply,
  };

  setMessages((prev) => [...prev, aiMessage]);

} catch (error) {
  console.error("Gemini Error:", error);

  setMessages((prev) => [
    ...prev,
    {
      sender: "ai",
      text: "Sorry, something went wrong while contacting Gemini.",
    },
  ]);

} finally {
  setIsLoading(false);
  inputRef.current?.focus();
}
};

  return (
  <div className="flex flex-col md:flex-row h-screen bg-slate-950 text-white">
 {sidebarOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}
    {/* Sidebar */}
    <div
  className={`fixed md:static top-0 left-0 h-full md:h-auto w-72 md:min-w-72 bg-slate-900 border-r border-slate-800 flex flex-col z-50 transform transition-transform duration-300 ${
  sidebarOpen ? "translate-x-0" : "-translate-x-full"
} md:translate-x-0`}
>

<div className="p-4 md:p-6 border-b border-slate-800">

  <div className="flex justify-between items-center">

    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      SkillBridge AI
    </h2>

    <button
      className="md:hidden text-3xl"
      onClick={() => setSidebarOpen(false)}
    >
      <HiX />
    </button>

  </div>

<button
  onClick={handleNewChat}
  className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 rounded-xl py-3 font-semibold transition"
>
  + New Chat
</button>

</div>

      <div className="flex-1 p-4 md:p-6 space-y-4">
        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
          📈 Career Blueprint
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
          📄 Resume Review
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
          🎤 Interview Coach
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
          💬 Chat History
        </button>
      </div>

    </div>
   

    {/* Main Chat Area */}

    <div className="flex flex-col flex-1">

      {/* Header */}

      <div className="border-b border-slate-800 p-4 md:p-6">
<div className="flex items-center justify-between">
 {/* Left Side */}
  <div className="flex items-center gap-4">
    <button
      className="md:hidden text-3xl"
      onClick={() => setSidebarOpen(true)}
    >
      <HiMenu />
    </button>

    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
        Welcome back{user ? `, ${user.name}` : ""}! 👋
      </h1>

      <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
        {user
          ? `You're a ${user.year} pursuing ${user.degree} at ${user.college}, aiming to become a ${user.goal} at ${user.company}.`
          : "Loading profile..."}
      </p>
    </div>
  </div>

  {/* Right Side */}
 {messages.length > 0 && (
  <button
    onClick={handleClearChat}
    className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition"
  >
    🗑 Clear
  </button>
)}

</div>
</div>
      

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
{messages.length === 0 && (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 max-w-[90%] md:max-w-xl mb-6">

    <p className="text-cyan-400 font-semibold">
      SkillBridge AI
    </p>

    <p className="mt-3 text-slate-300">
      👋 Hi! I'm your AI Career Mentor.

      I can help you build a roadmap, improve your resume,
      prepare for interviews, learn new skills,
      and answer career-related questions.

      What would you like to do today?
    </p>

  </div>
)}
        <div className="mt-6 space-y-4">
  {messages.map((msg, index) => (
    <div
  key={index}
  className={`max-w-[90%] md:max-w-xl p-4 rounded-xl ${
    msg.sender === "user"
      ? "ml-auto bg-cyan-600"
      : "mr-auto bg-slate-800"
  }`}
>
 <div className="flex justify-between items-center mb-2">
  <p className="text-sm font-semibold">
    {msg.sender === "user" ? "You" : "SkillBridge AI"}
  </p>

  {msg.sender === "ai" && (
    <button
      onClick={() => copyToClipboard(msg.text, index)}
      className="text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 transition"
    >
      {copiedIndex === index ? "✅ Copied!" : "📋 Copy"}
    </button>
  )}
</div>

 <ReactMarkdown
  components={{
    p: ({ children }) => (
      <p className="mb-3 leading-7">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-6 mb-3">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-3">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-cyan-300">
        {children}
      </strong>
    ),
  }}
  
>
  {msg.text}
</ReactMarkdown>
</div>
  ))}
  {isLoading && (
  <div className="max-w-[90%] md:max-w-xl p-4 rounded-xl mr-auto bg-slate-800 animate-pulse">
    <p className="text-sm font-semibold mb-2 text-cyan-400">
      SkillBridge AI
    </p>

    <p className="text-slate-300 mb-3">
  Thinking...
</p>

<div className="flex gap-2">
      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
      <div
        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
        style={{ animationDelay: "0.15s" }}
      ></div>
      <div
        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </div>
  </div>
  )}
  <div ref={messagesEndRef} />
</div>

      </div>

      {/* Input */}

     

      <div className="border-t border-slate-800 p-4 md:p-6">

        <div className="flex flex-col sm:flex-row gap-4">

          <input
          ref={inputRef}
  type="text"
    placeholder="Ask anything about your career..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
   if (e.key === "Enter" && !isLoading) {
    handleSend();
}
  }}
  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
/>

          <button
  onClick={handleSend}
  disabled={isLoading}
  className={`w-full sm:w-auto px-6 md:px-8 py-4 rounded-xl transition ${
    isLoading
      ? "bg-slate-600 cursor-not-allowed"
      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105"
  }`}
>
  {isLoading ? "Thinking..." : "Send"}
</button>

        </div>

      </div>
     <Footer />
    </div>

  </div>
);
}
export default Chat;