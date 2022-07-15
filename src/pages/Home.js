import "../css/Home.css"
import YouTube from "../components/YouTube"
import Image from "../components/Image"
import PoetLife from "../assets/images/plsquarewhite-03.png"

const Home = ({ artist }) => {
	const poems = artist.youtubePoems.map(video => {
		return <YouTube key={video} id={video} />
	})
	const reactions = artist.youtubeReactions.map(video => {
		return <YouTube key={video} id={video} />
	})

	return (
		<main className="Home">
			<section className="full-screen">
				<p className="quotes">
					<q>You cannot spell poetry without the word try.</q>
					<q>He who values his words values his worth.</q>
				</p>
				<p>
					— Kendryk Youngblood
				</p>
			</section>
			<section>
				<h2>Poems</h2>
				<div className="videos">
					{poems}
				</div>
			</section>
			<section>
				<h2>Reactions</h2>
				<div className="videos">
					{reactions}
				</div>
			</section>
			<section className="poet-life-logo">
				<h2>Check out the Poet Life clothing shop</h2>
				<a href="https://thepoetlife.com/shop?aff=HyaRJM1V_" target="_blank" rel="noreferrer">
					<Image img={PoetLife} alt="Poet Life logo" />
				</a>
				<p>
					...and use the code <strong>YOUNGBLOOD</strong> for a discount on your order.
				</p>
			</section>
		</main>
	)
}

export default Home