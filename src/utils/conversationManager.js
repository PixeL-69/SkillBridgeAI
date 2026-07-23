export const createConversation = () => ({
  id: crypto.randomUUID(),
  title: "New Chat",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  messages: [],
});