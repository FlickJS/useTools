import classes from './header.module.css';

const Header = () => {
    return (
        <nav className={classes.navbar}>
          <div className={classes['navbar-left']}>
            <h1>useTools</h1>
          </div>
          <div className={classes['navbar-right']}>
            <ul className={classes.menu}>
              <li className={classes['menu-item']}>Merge PDF files</li>
            </ul>
          </div>
        </nav>
      );
};

export default Header;