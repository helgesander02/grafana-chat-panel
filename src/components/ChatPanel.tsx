// components/ChatPanel.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PanelProps } from '@grafana/data';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { getChatPanelStyles } from './ChatPanelStyle';
import { Header } from './Header';
import { ChatArea } from './ChatArea';
import { InputArea } from './InputArea';
import { ChatOptions, ChatMessage } from '../types';
import OpenAIService from '../service';

interface Props extends PanelProps<ChatOptions> {}

/**
 * ChatPanel component
 * @param options - Panel options
 * @param width - Panel width
 * @param height - Panel height
 * @returns ChatPanel component
 */
export const ChatPanel: React.FC<Props> = ({ options, width, height }) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getChatPanelStyles(theme));

  // State management
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Initialize OpenAI service with memoization
  const openaiService = useMemo(() => new OpenAIService(options.apiKey), []);

  // Update API key when options change
  useEffect(() => {
    openaiService.updateApiKey(options.apiKey);
  }, [options.apiKey, openaiService]);

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMsg: ChatMessage = {
        id: 'welcome',
        text: 'Hello! I am Grafana Chatbot, how can I help you?',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages([welcomeMsg]);
    }
  }, [messages.length]);

  // Message management with maxMessages limit
  const addMessage = useCallback((message: ChatMessage) => {
    setMessages(prev => {
      const updated = [...prev, message];
      return updated.length > options.maxMessages 
        ? updated.slice(-options.maxMessages)
        : updated;
    });
  }, [options.maxMessages]);

  // Send message handler
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    addMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    try {
      const botText = await openaiService.generateBotResponse(userMessage.text);
      
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };

      addMessage(botResponse);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, isTyping, addMessage, openaiService]);

  return (
    <div className={styles.wrapper} style={{ width, height }}>
      <Header />
      
      <ChatArea
        messages={messages}
        isTyping={isTyping}
        showTimestamp={options.showTimestamp}
      />
      
      <InputArea
        inputValue={inputValue}
        isTyping={isTyping}
        onInputChange={setInputValue}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};