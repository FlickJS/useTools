import classes from './header.module.css';
import Image from 'next/image';
import logo from '../../../../public/useTools.png';

const Header = () => {
    return (
        <nav className={classes.navbar}>
          <div className={classes['navbar-left']}>
            <Image src={logo} width={250} height={200} alt="Company logo" />
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