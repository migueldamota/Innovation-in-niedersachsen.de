import { useEffect } from "react";
import { Link } from "react-router-dom";
import Section, { SectionHeader } from "../components/Section";
import { setTitle } from "../modules/page";

const tabs = [
    { title: "Infrastruktur", text: "Wir kümmern uns um die Infrastruktur. Wir bieten Dienstleistungen an, um Ihre Infrastruktur aufrechtzuhalten und auf den neusten Stand zu bringen. Außerdem stehen wir Ihnen als Helfer zur Verfügung, durch unserer guten Autobahnverbindung sind wir in wenigen Stunden vor Ort, um Ihr Problem zu beheben. " },
    { title: "Schulung der Lehrer", text: "Wir bieten Programme an, um Lehrer auf den neusten Stand der Technik zu bringen. Zum Beispiel wegen der Pandemie waren viele Lehrer auf den Online Unterricht nicht vorbereitet, da dies ein direkter Umschwung war. Mit unserer Schulung werden Lehrer auf alles Nötige vorbereitet, um die Technik so gut wie möglich verstehen zu können." },
];

export default function Leistungen () {

    useEffect(() => {
        setTitle("Leistungen");
    }, []);

    return (
        <>

            <Section className="sectionHero">
                <div className="heroContainer">
                    <h1>Leistungen</h1>
                </div>

                <div className="sectionImage" style={{ backgroundImage: "url(https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg)" }} />
            </Section>

            

			<Section>
                <div className="tabs">
                    <div className="tabsHeader">

                    </div>

                    {
                        tabs.map((tab, i) => (
                            <div className="tabItem" key={i}>
                                <h2>{ tab.title }</h2>
                                <p>{ tab.text }</p>
                            </div>
                        ))
                    }

                    <Link to="/kontakt" className="button">Kontakt aufnehmen</Link>
                </div>
            </Section>
		
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
