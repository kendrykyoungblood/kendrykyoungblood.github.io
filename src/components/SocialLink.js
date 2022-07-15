const SocialLink = ({ link, icon, text }) => {
	return (
		<a className="social-link" href={link} target="_blank" rel="noreferrer">{icon} {text}</a>
	)
}

export default SocialLink