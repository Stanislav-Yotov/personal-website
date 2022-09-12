import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar(props) {

    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt='' />
            </div>
            {/* desktop */}
            <ul className={styles.list}>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>

            {/* hamburger */}
            <div >
                <FaBars className={styles.hamburger}/>
            </div>

            {/* mobile
            <ul className={styles.mobile}>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul> */}
        </div>
    );
};

export default Navbar;