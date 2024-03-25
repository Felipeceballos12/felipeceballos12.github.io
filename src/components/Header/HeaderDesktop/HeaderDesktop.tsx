import { ThemeToggle } from '../../ThemeToggle/ThemeToggle';

import Profile from '../Profile/Profile';
import styles from './HeaderDesktop.module.css';

export default function HeaderDesktop() {
  return (
    <div className={styles.headerDesktopContainer}>
      <div className={styles.sectionsContainer}>
        <Profile />
      </div>
      <div className={styles.toggleContainer}>
        <ThemeToggle />
      </div>
    </div>
  );
}
