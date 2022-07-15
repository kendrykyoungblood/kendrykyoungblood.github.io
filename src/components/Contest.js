const Contest = ({ contest }) => {
	function formatDate(date) {
		if (date != null) {
			return new Date(date).toLocaleDateString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })
		} else {
			return "–"
		}
	}

	return (
		<section>
			<h3>{contest.theme ? `"${contest.theme}"` : contest.status}</h3>
			<div className="item">{formatDate(contest.date.start)}</div>
		</section>
	)
}

export default Contest