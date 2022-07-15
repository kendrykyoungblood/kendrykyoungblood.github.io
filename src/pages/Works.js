import "../css/Works.css"
import {
	Dreamers,
  Spectrum,
	Taboo,
	AloneTogether,
	TheYoungSun,
	TheNewColossus
} from '../components/Poems'
import Poem from "../components/Poem"

const Works = () => {
	return (
		<main className="Works">
			<h1>Published Works</h1>
			<Poem name="Dreamers" content={<Dreamers />} />
			<Poem name="Spectrum" content={<Spectrum />} />
			<Poem name="Taboo" content={<Taboo />} />
			<Poem name="#alonetogether" content={<AloneTogether />} />
			<Poem name="The Young Sun" content={<TheYoungSun />} />
			<Poem name="The New Colossus" content={<TheNewColossus />} />
		</main>
	)
}

export default Works