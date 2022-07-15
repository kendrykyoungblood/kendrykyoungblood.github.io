import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"

const Poem = ({ name, content }) => {
	const [checkBox, setCheckBox] = useState(false)

	function handleClick(e) {
		e.target.classList.contains("active") ? setCheckBox(false) : setCheckBox(true)
	}

	return (
		<section className="poem">
			<h2 className={checkBox ? "active" : null} onClick={handleClick}>{name}<FaChevronRight /></h2>
			<div>
				{content}
			</div>
		</section>
	)
}

export default Poem