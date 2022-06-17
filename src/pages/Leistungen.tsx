import { useEffect } from "react";
import { setTitle } from "../modules/page";
import utilsStyles from "../styles/Utils.module.scss";

export default function Leistungen () {

    useEffect(() => {
        setTitle("Impressum");
    }, []);

    return (
        <>

            <section className="sectionHero">
                <div className={utilsStyles.wrapper}>

                    <div className="heroContainer">
                        <h1>Leistungen</h1>
                    </div>

                </div>

                <div className="image" style={{ backgroundImage: "url(https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg)" }} />
            </section>
		
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
