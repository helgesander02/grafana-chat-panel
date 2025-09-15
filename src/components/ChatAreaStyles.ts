import { css } from '@emotion/css';

export const getChatAreaStyles = (theme: any) => {
  return {
    chatArea: css`
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
    message: css`
      display: flex;
      flex-direction: column;
      max-width: 75%;
    `,
    userMessage: css`
      align-self: flex-end;
      align-items: flex-end;
    `,
    botMessage: css`
      align-self: flex-start;
      align-items: flex-start;
    `,
    messageBubble: css`
      padding: 12px 16px;
      border-radius: 18px;
      word-wrap: break-word;
      line-height: 1.4;
    `,
    userBubble: css`
      background: ${theme.colors.primary.main};
      color: ${theme.colors.primary.contrastText};
    `,
    botBubble: css`
      background: ${theme.colors.background.secondary};
      color: ${theme.colors.text.primary};
      border: 1px solid ${theme.colors.border.weak};
    `,
    timestamp: css`
      font-size: 11px;
      color: ${theme.colors.text.secondary};
      margin-top: 4px;
      padding: 0 4px;
    `,
    emptyState: css`
      text-align: center;
      color: ${theme.colors.text.secondary};
      font-style: italic;
      margin-top: 20px;
    `,
  };
};
