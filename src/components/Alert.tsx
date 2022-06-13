
export default function Alert ({ closeModal }: { closeModal: Function }) {

    return (
        <div className="alertWrapper">
            <div className="alert">

                <h2>Diese Seite ist für ein Schulprojekt. <br /><br /> Alle Bilder, welche nicht von uns entworfen worden sind, sind öffentlich einsehbar und können frei verwendet werden.</h2>

                <button onClick={() => closeModal()}>Schließen</button>

            </div>
        </div>
    );
}
