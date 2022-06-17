import { createRef, FormEvent, useEffect, useState } from "react";
import Section, { SectionHeader } from "../components/Section";
import { setTitle } from "../modules/page";

export default function Kontakt () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState({ type: "", message: "" });

    const formRef = createRef<HTMLFormElement>();

    async function onSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name || !email || !message) {
            setError({ type: "error", message: "Bitte füllen Sie alle Felder aus" });
            return;
        }

        const form = formRef.current;
        if (!form) return;

        form.reset();

        setError({ type: "success", message: "Ihre Nachricht wurde versendet" });
    }

    useEffect(() => {
        setTitle("Kontakt");
    }, []);

    return (
        <>
        
            <Section small>
                <SectionHeader title="Kontakt" />

                <h4 style={{ fontWeight: "normal", textAlign: "center", color: "var(--color-2)" }}>Noch Fragen? Schreibe uns eine Nachricht und wir werden dir so schnell wie möglich antworten!</h4>

                <form onSubmit={onSubmit} ref={formRef}>
                    { error.message && <div className={"error-" + error.type}>{error.message}</div> }

                    <input type="text" name="name" placeholder="Dein Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="email" placeholder="Deine Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Deine Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button type="submit">Absenden</button>
                </form>
            </Section>

        </>
    )
}
