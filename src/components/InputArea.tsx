import React, { useRef } from 'react';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { getInputAreaStyles } from './InputAreaStyles';

interface InputAreaProps {
  inputValue: string;
  isTyping: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export const InputArea: React.FC<InputAreaProps> = ({
  inputValue,
  isTyping,
  onInputChange,
  onSendMessage,
}) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getInputAreaStyles(theme));
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={styles.inputArea}>
      <div className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          className={styles.input}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Enter message..."
          rows={1}
          disabled={isTyping}
        />
        <button
          className={styles.sendButton}
          onClick={onSendMessage}
          disabled={!inputValue.trim() || isTyping}
        >
          Send
        </button>
      </div>
    </div>
  );
};
