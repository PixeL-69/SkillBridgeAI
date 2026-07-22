import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Setup from "./pages/Setup";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;