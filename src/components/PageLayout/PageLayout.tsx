import cn from 'classnames';

import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
  center?: boolean;
  maxWidth?: number;
}

export const PageLayout = ({ children, center = false, maxWidth }: PageLayoutProps) => {
  return (
    <div className={cn(styles.root, center && styles.center)} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  );
};
