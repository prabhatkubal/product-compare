import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>Product Comparison</h1>
        <nav
          className={styles.actions}
          aria-label="Header actions"
        >
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
