import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props

  const resetGame = () => {
    playAgain()
  }
  return (
    <div className="score-card-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="score-img"
      />
      <p className="score-heading">YOUR SCORE</p>
      <p className="score-score">{score}</p>
      <div>
        <button type="button" className="play-again" onClick={resetGame}>
          <span>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-img"
            />
          </span>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
