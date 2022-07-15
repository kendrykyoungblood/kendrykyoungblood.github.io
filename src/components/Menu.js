import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Menu = () => {
	const [checkBox, setCheckBox] = useState(false)

	useEffect(() => {
		function changeSize() {
			const vw = window.innerWidth
			document.documentElement.style.setProperty("--hamburger-width", `${vw}px`)
		}

		changeSize()

		window.addEventListener("resize", changeSize)
		return () => window.removeEventListener("resize", changeSize)
	}, [])

	function handleChange(e) {
		const {checked} = e.target
		setCheckBox(checked)
	}

	function lockScroll() {
		const body = document.body.style
		checkBox ? body.overflow = "hidden" : body.overflow = "auto"
	}

	function handleClick() {
		setCheckBox(false)
		document.documentElement.scrollTop = 0
	}

	const activeClassName = 'active'

	lockScroll()

	return (
		<div className="menu">
			<input
				type="checkbox"
				id="menu-toggle"
				checked={checkBox}
				onChange={handleChange}
			/>
			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button-top"></div>
				<div className="menu-button-middle"></div>
				<div className="menu-button-bottom"></div>
			</label>
			<ul className="menu-items">
				<li onClick={handleClick}>
					<NavLink to="/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Home</NavLink>
				</li>
				<li onClick={handleClick}>
					<NavLink to="/artist-bio">Artist Bio</NavLink>
				</li>
				<li onClick={handleClick}>
					<NavLink to="/contests">Contests</NavLink>
				</li>
				<li onClick={handleClick}>
					<NavLink to="/published-works">Published Works</NavLink>
				</li>
				<li onClick={handleClick}>
					<NavLink to="/services">Services</NavLink>
				</li>
				<li onClick={handleClick}>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Menu