import { Link } from 'react-router-dom';
import { UserPic } from '../assets/images/index';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="App Logo"
          />
        </Link>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link href="/">
            <img src={UserPic} alt="" className={styles.userDp} />
          </Link>
          <span>UserName</span>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
