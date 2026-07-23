import ReactMarkdown from "react-markdown";

export default function MessageBubble({
  msg,
  index,
  copiedIndex,
  copyToClipboard,
}) {
  return (
    <div
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
  );
}