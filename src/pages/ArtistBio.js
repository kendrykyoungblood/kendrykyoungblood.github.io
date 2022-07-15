import Portrait from "../assets/images/Kendryk Youngblood – Poet Life.jpg"
import PortraitWebP from "../assets/images/Kendryk Youngblood – Poet Life.webp"
import Resume from "../assets/Poet Resume_CV.pdf"
import ExtLink from "../components/ExtLink"
import Image from "../components/Image"

const ArtistBio = ({ artist }) => {
	return (
		<main className="ArtistBio split">
			<h1 className="title">Artist Bio</h1>
			<div className="img-large">
				<Image
					img={Portrait}
					webp={PortraitWebP}
					alt="Portrait of Kendryk Youngblood"
				/>
			</div>
			<section>
				<p>
					Kendryk Youngblood is a former member of University of Houston's poetry slam team <strong>UH Coogslam</strong>, which won 4<sup>th</sup>-place in the <strong>Collegiate Unions Poetry Slam Invitational (CUPSI)</strong> in April 2019. Kendryk has his works published in <em>Shards</em>, <em>Defunkt</em>, and <em>Poet's Choice</em> magazines; and he is currently a poetry editor for <em>Space City Underground</em>.
				</p>
				<p>
					He is a Poet Life brand ambassador who teaches, shares, and reacts to poetry through his <ExtLink link={artist.youtube} content="YouTube channel" /> and documents his poetry journey through his <ExtLink link={artist.instagram} content="Instagram account" />.
				</p>
				<div>
					<ExtLink link={Resume} content="View Resume" />
				</div>
			</section>
		</main>
	)
}

export default ArtistBio