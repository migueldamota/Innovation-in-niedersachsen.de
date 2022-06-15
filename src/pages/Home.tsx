import utilsStyles from "../styles/Utils.module.scss";

import HomeBackground from "../assets/home-background.png";

export default function Home () {

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
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
