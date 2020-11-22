import styles from './styles.module.scss';
import cx from 'classnames';

export default function NavItem({ label, isActive = false, onClick }) {
  return (
    <div
      className={cx(styles.navItem, {
        [styles.navItemActive]: isActive,
      })}
      onClick={onClick}
    >
      <span className={styles.navItemLabel}>{label}</span>
    </div>
  );
}
