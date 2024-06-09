import PropTypes from 'prop-types'

export const WinnerPop = ({ whoWon, playAgain}) => {
	if(!whoWon) return null

	const handleClick = () => {
		playAgain()
	}
	return (
		<section className='winnerPop-container'>
			<div className='winnerPop'>
				<h1>{whoWon == true ? 'Draw' : (`Whe winner was: ${whoWon}`)}</h1>
				<button onClick={handleClick}>Jugar de nuevo</button>
			</div>
		</section>
	)
}

WinnerPop.propTypes = {
	whoWon: PropTypes.string,
	playAgain: PropTypes.func
}
	