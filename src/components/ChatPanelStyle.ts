import { css } from '@emotion/css';

export const getChatPanelStyles = (theme: any) => {
  return {
    wrapper: css`
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: ${theme.colors.background.primary};
      border-radius: 8px;
      overflow: hidden;
    `,
  };
};
