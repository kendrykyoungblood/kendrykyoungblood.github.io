import '../css/Contests.css'
import contests from '../ContestInfo.json'
import Contest from '../components/Contest'

const Contests = () => {
	const currentContests = contests.map(contest => {
		return contest.status && <Contest key={contest.id} contest={contest} />
	})
		.filter(contest => contest)
	const pastContests = contests.map(contest => {
		return !contest.status && <Contest key={contest.id} contest={contest} />
	})
		.filter(contest => contest)

	return (
		<main className="Contests">
			<h1>Contests</h1>
			{currentContests}
			{pastContests.length > 0 && <h2>Past Contests</h2>}
			{pastContests}
		</main>
	)
}

export default Contests