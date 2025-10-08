import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

class OpenAIService {
  private chatModel: ChatOpenAI;

  constructor(apiKey?: string) {
    this.chatModel = new ChatOpenAI({
      apiKey: apiKey || "", 
      modelName: "gpt-4o",
      temperature: 0.7,
    });
  }

  updateApiKey(apiKey: string) {
    this.chatModel.apiKey = apiKey;
  }

  async generateBotResponse(userMessage: string): Promise<string> {
    try {
      const messages = [
        new SystemMessage("You are a helpful assistant inside Grafana, answer briefly."),
        new HumanMessage(userMessage),
      ];

      const response = await this.chatModel.invoke(messages);
      return response.content.toString() || "I couldn't generate a response.";
      
    } catch (err) {
      console.error("LangChain API Error:", err);
      return "Sorry, I encountered an error while generating a response.";
    }
  }
}

export default OpenAIService;