import OpenAI from "openai";

class OpenAIService {
  private openai: OpenAI;

  constructor(apiKey?: string) {
    this.openai = new OpenAI({
      apiKey: apiKey || "", 
      dangerouslyAllowBrowser: true,
    });
  }

  updateApiKey(apiKey: string) {
    this.openai.apiKey = apiKey;
  }

  async generateBotResponse(userMessage: string): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful assistant inside Grafana, answer briefly." },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7
      });
      return completion.choices[0]?.message?.content || "I couldn't generate a response.";
      
    } catch (err) {
      console.error("OpenAI API Error:", err);
      return "Sorry, I encountered an error while generating a response.";
    }
  }
}

export default OpenAIService;