import { css } from '@emotion/css';

export const getInputAreaStyles = (theme: any) => {
  return {
    inputArea: css`
      padding: 16px;
      border-top: 1px solid ${theme.colors.border.weak};
      background: ${theme.colors.background.primary};
    `,
    inputContainer: css`
      display: flex;
      gap: 8px;
      align-items: flex-end;
    `,
    input: css`
      flex: 1;
      padding: 12px 16px;
      border: 1px solid ${theme.colors.border.medium};
      border-radius: 24px;
      background: ${theme.colors.background.primary};
      color: ${theme.colors.text.primary};
      font-size: 14px;
      resize: none;
      outline: none;
      max-height: 100px;
      min-height: 20px;
      font-family: inherit;
      
      &:focus {
        border-color: ${theme.colors.primary.main};
        box-shadow: 0 0 0 2px ${theme.colors.primary.main}20;
      }
    `,
    sendButton: css`
      padding: 12px 20px;
      background: ${theme.colors.primary.main};
      color: ${theme.colors.primary.contrastText};
      border: none;
      border-radius: 24px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover:not(:disabled) {
        background: ${theme.colors.primary.shade};
        transform: translateY(-1px);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,
  };
};
