import cn from 'classnames';

import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
  center?: boolean;
  maxWidth?: number;
  margin?: string;
}

export const PageLayout = ({ children, center = false, maxWidth, margin }: PageLayoutProps) => {
  return (
    <div
      className={cn(styles.root, center && styles.center)}
      style={{ maxWidth: `${maxWidth}px`, margin }}
    >
      {children}
    </div>
  );
};
