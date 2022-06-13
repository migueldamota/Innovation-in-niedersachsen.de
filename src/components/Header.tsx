import styles from "./styles/Header.module.scss";

import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

interface NavLink {
    name: string
    link: string
    active?: boolean
}

const links: NavLink[] = [
    { name: "Home", link: "/" },
    { name: "Leistungen", link: "/services" },
    { name: "Standorte", link: "/locations" },
    { name: "Kontakt", link: "/contact" },
];

export default function Header () {
    const location = useLocation();

    const navLinks = useMemo(() => {
        return links.map((link) => {
            link.active = location.pathname === link.link;
            return link;
        });
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>

                <Link to="/">
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

                <div className="mobileHeader">
                    <button className={styles.mobileTrigger}>Menü</button>

                    <ul className={styles.mobileNav}>

                    </ul>
                </div>

            </div>
        </header>
    )
}
