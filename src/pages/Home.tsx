import utilsStyles from "../styles/Utils.module.scss";

export default function Home () {

    return (
        <>
            <section className="home">
				<div className={utilsStyles.wrapper}>

					<h3>Wir sind die</h3>
					<h1>Innovation in Niedersachsen</h1>

				</div>
				<div className="image"></div>
			</section>

			<section>
				<div className={utilsStyles.wrapper}>

					<header className="sectionHeader">
						<h1>Wer wir sind</h1>
					</header>

				</div>
			</section>
        </>
    )
}


// https://www.tagesspiegel.de/images/tablet-computer-in-der-grundschule/21168960/2-format43.jpg 
