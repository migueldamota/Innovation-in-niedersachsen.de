import styles from "./styles/Header.module.scss";

import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

interface NavLink {
    name: string
    link: string
    active?: boolean
}

const links: NavLink[] = [
    { name: "Home", link: "/" },
    { name: "Leistungen", link: "/leistungen" },
    { name: "Standorte", link: "/standorte" },
    { name: "Kontakt", link: "/kontakt" },
];

export default function Header () {
    const location = useLocation();

    const [openMenu, setOpenMenu] = useState(false);

    const navLinks = useMemo(() => {
        return links.map((link) => {
            link.active = location.pathname === link.link;
            return link;
        });
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>

                <Link to="/" className={styles.headerLogo}>
                    <img src={Logo} alt="" />
                </Link>

                <ul className={styles.headerList}>
                    { navLinks.map((item) => {
                        return (
                            <li key={item.name} className={item.active ? styles.active : ""}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        )
                    }) }
                </ul>

                <div className={styles.mobileHeader}>
                    <button className={styles.mobileTrigger}
                        onClick={() => setOpenMenu(!openMenu)}>Menü</button>

                    <ul className={`${styles.mobileNav} ${openMenu ? styles.mobileNavOpen : ""}`}>
                        { navLinks.map((item) => {
                            return (
                                <li key={item.name} className={item.active ? styles.active : ""}
                                    onClick={() => setOpenMenu(false)}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                </div>

            </div>
        </header>
    )
}
