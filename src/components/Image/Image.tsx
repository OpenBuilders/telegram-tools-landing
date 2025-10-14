import cn from 'classnames';

import styles from './Image.module.scss';
import { getColor, getFirstLetter } from './helpers';

interface ImageProps {
  fallback?: string;
  src?: string | null;
  size: 24 | 40 | 44 | 112;
  borderRadius?: 50 | 16 | 12 | 8;
}

export const Image = ({ src, size, borderRadius, fallback }: ImageProps) => {
  if (!src) {
    if (fallback) {
      const firstLetter = getFirstLetter(fallback);
      const color = getColor();
      return (
        <div
          className={styles.fallback}
          style={{
            background: color,
            minWidth: size,
            minHeight: size,
          }}
        >
          <p
            style={{
              fontSize: `${size / 2}px`,
            }}
            className={styles.fallbackText}
          >
            {firstLetter}
          </p>
        </div>
      );
    }
    return (
      <div
        className={cn(styles.emptyImage, borderRadius && styles[`border-radius-${borderRadius}`])}
        style={{
          minWidth: size,
          minHeight: size,
        }}
      >
        😔
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="image"
      width={size}
      height={size}
      className={cn(borderRadius && styles[`border-radius-${borderRadius}`])}
    />
  );
};
