import utilsStyles from "../styles/Utils.module.scss";

export default function Services () {

    return (
        <>
            <section className="home">
				<div className={utilsStyles.wrapper}>

					<h3>Leistung</h3>
					<h1>von Innovation in Niedersachsen</h1>

				</div>
				<div className="image"></div>
			</section>

			<section>
				<div className={utilsStyles.wrapper}>

					<header className="sectionHeader">
						<h1>Wer wir sind</h1>
					</header>

					<p>Wir sind die <b>Innovation in Niedersachsen</b>! Wir stehen für Innovation - die wir in die Welt bringen wollen.</p>

				</div>
			</section>
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
