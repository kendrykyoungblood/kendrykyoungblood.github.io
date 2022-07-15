import "../css/Footer.css"
import SocialLink from "./SocialLink"
import {
	FaYoutube,
	FaPatreon,
	FaInstagram,
	FaTiktok
} from "react-icons/fa"

const Footer = ({ artist }) => {
	const year = new Date().getFullYear()

	return (
		<footer>
			<div className="footer-container">
				<section className="social-links">
					<h2>Follow me</h2>
					<section>
						<SocialLink
							link={artist.youtube}
							icon={<FaYoutube />}
							text="YouTube"
						/>
						<SocialLink
							link={artist.patreon}
							icon={<FaPatreon />}
							text="Patreon"
						/>
						<SocialLink
							link={artist.instagram}
							icon={<FaInstagram />}
							text="Instagram"
						/>
						<SocialLink
							link={artist.tiktok}
							icon={<FaTiktok />}
							text="TikTok"
						/>
					</section>
				</section>
				<small>
					&copy; Copyright {year}, Richard Denton
				</small>
			</div>
		</footer>
	)
}

export default Footer