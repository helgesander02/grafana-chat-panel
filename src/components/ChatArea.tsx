import React, { useRef, useEffect } from 'react';
import { cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { ChatMessage } from '../types';
import { getChatAreaStyles } from './ChatAreaStyles';

interface ChatAreaProps {
  messages: ChatMessage[];
  isTyping: boolean;
  showTimestamp: boolean;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ 
  messages, 
  isTyping, 
  showTimestamp 
}) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getChatAreaStyles(theme));
  const chatAreaRef = useRef<HTMLDivElement>(null);

  // auto scroll to bottom
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.chatArea} ref={chatAreaRef}>
      {messages.length === 0 ? (
        <div className={styles.emptyState}>Start a conversation...</div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={cx(
              styles.message,
              message.sender === 'user' ? styles.userMessage : styles.botMessage
            )}
          >
            <div
              className={cx(
                styles.messageBubble,
                message.sender === 'user' ? styles.userBubble : styles.botBubble
              )}
            >
              {message.text}
            </div>
            {showTimestamp && (
              <div className={styles.timestamp}>{formatTime(message.timestamp)}</div>
            )}
          </div>
        ))
      )}
      
      {isTyping && (
        <div className={cx(styles.message, styles.botMessage)}>
          <div className={cx(styles.messageBubble, styles.botBubble)}>
            Typing...
          </div>
        </div>
      )}
    </div>
  );
};
