import Profile from '../Profile/Profile';
import styles from './HeaderMobile.module.css';
import { ThemeToggle } from '../../ThemeToggle/ThemeToggle';
import Menu from '../Menu/Menu';

export default function HeaderMobile() {
  return (
    <div className={styles.headerMobileContainer}>
      <div className={styles.headerWrapper}>
        <Profile />
        <div className={styles.navigationContainer}>
          <ThemeToggle />
          <Menu />
        </div>
      </div>
    </div>
  );
}
