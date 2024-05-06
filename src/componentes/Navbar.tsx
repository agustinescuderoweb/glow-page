import {useState} from 'react';
import Link from 'next/link';
import styles from '@/componentes/navbar.module.css';
import logo from '../../public/logo.jpg';
import menuicon from '../../public/list.svg';
import Image from 'next/image';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image className={styles.logos} src={logo} alt="Logo" />
            </div>
            <div className={`${styles.menuToggle}`} onClick={toggleMenu}>
                {isOpen ? (
                    <div className={styles.closeIcon} onClick={closeMenu}>
                        &#10005;
                    </div>
                ) : (
                        <Image className={styles.icon} src={menuicon} alt="menuicon"/>
        
                )}
            </div>
            <div className={styles.lista} id='camperas'>
            <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
                <li>
                    <Link href="https://drive.google.com/file/d/12A0FGIPCjzgsffc99f3S4zlECcFmewq1/view?usp=sharing" onClick={closeMenu}>
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Link href="#camperas" onClick={closeMenu}>
                        Glow Camperas
                    </Link>
                </li>
                <li>
                    <Link href="#contactos" onClick={closeMenu}>
                        Contactos
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default NavMenu;
