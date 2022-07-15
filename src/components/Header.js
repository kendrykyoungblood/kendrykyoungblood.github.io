import "../css/Header.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		function checkHeader() {
			document.documentElement.scrollTop !== 0 ? setScrolled(true) : setScrolled(false)
    }

		window.addEventListener("scroll", checkHeader)
		return () => window.removeEventListener("scroll", checkHeader)
	}, [scrolled])

	return (
		<header className={scrolled ? "header scroll-shadow" : "header"}>
			<div className="header-container">
				<Menu />
				<Link id="header-title" to="/">
					Youngblood Poetry
				</Link>
			</div>
		</header>
	)
}

export default Header