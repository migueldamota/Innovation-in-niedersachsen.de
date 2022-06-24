import Map from "../components/Map";
import Section, { SectionHeader } from "../components/Section";

export default function Standorte () {

    return (
        <>

            <Section className="sectionHero">
                <div className="heroContainer">
                    <h1>Standorte</h1>
                </div>

                <div className="sectionImage" style={{ backgroundImage: "url(https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg)" }} />
            </Section>

            <Section>
                <SectionHeader title="Hier können Sie uns finden" />

                <Map />
            </Section>

        </>
    )
}
