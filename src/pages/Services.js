import Image from "../components/Image"
import Portrait from "../assets/images/Kendryk Youngblood – Performance.jpg"
import PortraitWebP from "../assets/images/Kendryk Youngblood – Performance.webp"

const Services = () => {
	return (
		<main className="Services split">
			<h1 className="title">Services</h1>
			<div className="img-large">
				<Image
					img={Portrait}
					webp={PortraitWebP}
					alt="Kendryk Youngblood performing"
				/>
			</div>
			<section>
				<p>
					Kendryk Youngblood’s written and spoken word poetry examine masculinity, myths, the complexities involved with being an artist, his spiritual journey as a Christian, and the need for racial justice and reconciliation, particularly as it pertains to tragic events that have gone unaddressed by education and the media. Youngblood will often take on the persona of a character from a fictional story to retell a story from a perspective that might have otherwise gone misunderstood, unappreciated, or ignored. When presented with a multitude of topics, Youngblood finds that one in particular will generate an itch that can only be scratched once he has crafted a poem that grants adequate focus and energy to said topic.
				</p>
			</section>
			<section>
				<p>
				A common theme throughout Youngblood’s work is the idea that nuance can be found in almost every circumstance, that truth and wisdom can often be found in contrasting ideologies. His primary mission as an artist is to make poetry a mainstream art form, one that is appreciated and valued by the general public for its ability to touch hearts and change minds.
				</p>
			</section>
			<section>
				<ul>
					<li>
						Paid requests for reactions to spoken word poetry and rap
					</li>
					<li>
						Bookings to perform at in-person and virtual events (open mics, poetry slams, church services, weddings, birthday parties, graduations, poetry showcases, panel discussions, funerals, and more).
					</li>
					<li>
						Paid feedback/critiques for poems and manuscripts via Patreon (Join My Patreon)
					</li>
					<li>
						Partaking in virtual and in-person panel discussions on topics covering poetry (and other art mediums) and social justice.
					</li>
					<li>
						Customized written poems for birthday cards and wedding/party invitations
					</li>
					<li>
						Paid sponsorship deals through my YouTube and Instagram
					</li>
				</ul>
			</section>
		</main>
	)
}

export default Services