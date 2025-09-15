export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatOptions {
  apiKey: string;
  showTimestamp: boolean;
  maxMessages: number;
}