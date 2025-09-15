import React from 'react';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { getHeaderStyles } from './HeaderStyles';

interface HeaderProps {
  botName?: string;
  botIcon?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  botName = "Grafana Bot",
  botIcon = "UI" 
}) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getHeaderStyles(theme));

  return (
    <div className={styles.header}>
      <div className={styles.botIcon}>{botIcon}</div>
      <div className={styles.botName}>{botName}</div>
    </div>
  );
};
