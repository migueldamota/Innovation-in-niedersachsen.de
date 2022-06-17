import { useEffect } from "react";
import { setTitle } from "../modules-page";
import utilsStyles from "../styles/Utils.module.scss";

export default function Impressum () {

    useEffect(() => {
        setTitle("Impressum");
    }, []);

    return (
        <>
        
            <section className="imprint">
                <div className={utilsStyles.wrapperSmall}>

                    <header className="sectionHeader">
                        <h1>Impressum</h1>
                    </header>

                    <p style={{ color: "red", fontWeight: "bold" }}>Diese Website ist für ein Schulprojekt und ist kein Unternehmen!</p>

                    <br />
                    <br />

                    <p><b>Innovation in Niedersachsen</b></p>
                    <p>GBS Grafschaft Bentheim</p>
                    <p>Denekamper Straße 1</p>
                    <p>48529 Nordhorn</p>

                </div>
            </section>

        </>
    )
}
