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

			<section>
				<div className="gridWrapper">

					<header className="sectionHeader">
						<h1>Unsere Ideen</h1>
					</header>

					<div className="grid">

						<div className="gridItem">
							<img src="https://via.placeholder.com/1280x640" alt="" />

							<div>
								<h3>Infrastruktur</h3>
								<p>Wir bauen eine gute Infrastruktur für Ihr Unternehmen/Ihre Schule. Gute PCs und gutes Internet sind ein Muss für Sie sheesh...</p>
							</div>
						</div>

						<div className="gridItem flip">
							<div>
								<h3>Junges Team</h3>
								<p>Wir sind ein junges Team lol</p>
							</div>

							<img src="https://via.placeholder.com/1280x640" alt="" />
						</div>

						<div className="gridItem">
							<img src="https://via.placeholder.com/1280x640" alt="" />

							<div>
								<h3>Infrastruktur</h3>

							</div>
						</div>

					</div>

				</div>
			</section>
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg
