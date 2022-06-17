import utilsStyles from "../styles/Utils.module.scss";

import HomeBackground from "../assets/home-background.png";
import InfrastructureImage from "../assets/infrastruktur-image.png";
import YoungTeamImage from "../assets/youngteam-image.png";
import DigitalizationImage from "../assets/digitalisierung-image.png";
import { useEffect } from "react";
import { setTitle } from "../modules/page";

const ideas = [
	{
		title: "Digitalisierung",
		text: "Die Digitalisierung ist schon ein großes Thema, vor allem für Schulen. Wir bauen ein gutes Netz mit einer guten Infrastruktur für Ihr Unternehmen oder einer Schule.",
		image: DigitalizationImage,
	},
	{
		title: "Infrastruktur", 
		text: "Mit dem Bau einer guten Infrastruktur, steht dem Ausbau nichts mehr im Weg!",
		image: InfrastructureImage,
	},
	{
		title: "Junges Team", 
		text: "Wir sind ein junges Team, welches sich Tag täglich mit digitalen Medien auseinandersetzt.",
		image: YoungTeamImage,
	},
]

export default function Home () {

    useEffect(() => {
        setTitle("Home");
    }, []);

	return (
		<>
			<section className="home">
				<div className={utilsStyles.wrapper}>

					<h3>Wir sind die</h3>
					<h1>Innovation in Niedersachsen</h1>

				</div>
				<div className="image" style={{ backgroundImage: `url(${HomeBackground})` }}></div>
			</section>

			<section>
				<div className={utilsStyles.wrapper}>

					<div className="frame">
						<header className="sectionHeader">
							<h1>Wer wir sind</h1>
						</header>

						<p>Wir sind die <b>Innovation in Niedersachsen</b>! Wir stehen für Innovation - die wir in die Welt bringen wollen.</p>
					</div>

				</div>
			</section>

			<section>
				<div className="gridWrapper">

					<header className="sectionHeader">
						<h1>Unsere Ideen</h1>
					</header>

					<div className="grid">

						{
							ideas.map((idea, i) => {
								return (
									<div className={`gridItem ${i % 2 === 1 ? "flip" : ""}`.trim()} key={idea.title}>
										<img src={idea.image} alt={`${idea.title} Bild`} />

										<div>
											<h3>{idea.title}</h3>
											<p>{idea.text}</p>
										</div>
									</div>
								)
							})
						}

					</div>

				</div>
			</section>
		</>
	)
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
