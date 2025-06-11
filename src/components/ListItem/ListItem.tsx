import cn from 'classnames';
import { useContext } from 'react';

import { Icon } from '../Icon';
import styles from './ListItem.module.scss';
import { ThemeContext } from '@context';

interface ListItemProps {
  text?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  chevron?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  paddingY?: 10 | 6;
  label?: string;
  noPointer?: boolean;
}

export const ListItem = ({
  text,
  children,
  description,
  before,
  after,
  chevron,
  disabled,
  onClick,
  paddingY = 10,
  label,
  noPointer,
}: ListItemProps) => {
  const { darkTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        onClick && styles.clickable,
        disabled && styles.disabled,
        noPointer && styles.noPointer,
        paddingY && styles[`paddingY-${paddingY}`],
      )}
      onClick={handleClick}
    >
      <div className={styles.left}>
        {before || null}
        <div className={styles.content}>
          {text && (
            <div className={styles.text}>
              <div>{text}</div>
              {label && <div className={styles.label}>{label}</div>}
            </div>
          )}
          {description && <div>{description}</div>}
          {children && children}
        </div>
      </div>
      <div className={styles.right}>
        {after || null}
        {chevron && (
          <div className={cn(styles.chevron, darkTheme && styles.darkChevron)}>
            <Icon name="chevron" />
          </div>
        )}
      </div>
    </div>
  );
};
