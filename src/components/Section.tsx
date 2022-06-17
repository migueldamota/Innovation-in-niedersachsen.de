import utilsStyles from "../styles/Utils.module.scss";

export default function Section ({ small, children }: { small?: boolean, children: any }) {

    return (
        <section>
            <div className={small ? utilsStyles.wrapperSmall : utilsStyles.wrapper}>

                { children }

            </div>
        </section>
    )
}

export function SectionHeader ({ title }: { title: string }) {
    return (
        <header className="sectionHeader">
            <h1>{ title }</h1>
        </header>
    )
}
