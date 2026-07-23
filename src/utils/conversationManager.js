export const createConversation = () => ({
  id: crypto.randomUUID(),
  title: "New Chat",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  messages: [],
});
const STORAGE_KEY = "skillbridge-conversations";

export const saveConversations = (conversations) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
};

export const loadConversations = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  return saved ? JSON.parse(saved) : [];
};
const ACTIVE_CHAT_KEY = "skillbridge-active-chat";

export const saveActiveConversation = (conversationId) => {
  localStorage.setItem(ACTIVE_CHAT_KEY, conversationId);
};

export const loadActiveConversation = () => {
  return localStorage.getItem(ACTIVE_CHAT_KEY);
};