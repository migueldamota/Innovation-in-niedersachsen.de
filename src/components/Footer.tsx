import styles from "./styles/Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer () {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>

                <div>
                    &copy; { new Date().getFullYear() } - <b>Innovation in Niedersachsen</b>
                </div>

                <ul>
                    <li>
                        {/* <Link to="/datenschutz">Datenschutz</Link> */}
                    </li>
                    <li>
                        <Link to="/impressum">Impressum</Link>
                    </li>
                </ul>

            </div>
        </footer>
    );
}
