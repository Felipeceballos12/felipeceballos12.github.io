import styles from './Header.module.css';

import HeaderMobile from './HeaderMobile/HeaderMobile';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderMobile />
    </header>
  );
}

export default Header;
