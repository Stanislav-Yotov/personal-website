import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar(props) {
    const [clicked, setClicked] = useState(false);

    function isClicked() {
        if (clicked === false) {
            setClicked(true);
        } else {
            setClicked(false);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={Logo} alt='' />
            </div>
            {/* desktop */}
            <ul className={styles.list}>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>

            {/* hamburger */}
            {!clicked && <div className={styles.hamburger} >
                <FaBars onClick={isClicked} />
            </div>}

            {/* mobile */}
            {clicked && <ul className={styles.mobile}>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>}
        </div>
    );
};

export default Navbar;