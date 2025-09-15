import { css } from '@emotion/css';

export const getHeaderStyles = (theme: any) => {
  return {
    header: css`
      background: ${theme.colors.background.secondary};
      padding: 12px 16px;
      border-bottom: 1px solid ${theme.colors.border.weak};
      display: flex;
      align-items: center;
      gap: 8px;
    `,
    botIcon: css`
      width: 32px;
      height: 32px;
      background: ${theme.colors.primary.main};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
    `,
    botName: css`
      font-weight: 600;
      color: ${theme.colors.text.primary};
      font-size: 16px;
    `,
  };
};
