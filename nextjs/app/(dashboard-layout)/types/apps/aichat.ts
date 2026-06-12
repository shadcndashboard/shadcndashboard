export type ChatAIMessage = {
  id: number;
  sender: "user" | "ai";
  text: string;
  imageUrl?: string;
};

export type ChatHistoryItem = {
  id?: number | string;
  title: string;
  que: string;
  preview: string;
  status?: "active" | "deleted";
};

export type ChatSession = {
  id: string;
  title: string;
  messages: ChatAIMessage[];
  timestamp: number;
  status?: "active" | "deleted";
};

export type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};
