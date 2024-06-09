import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import {Turn, WinnerPop, Board} from './components/index.js'
import { checkDraw, checkWinner } from './logic/index.js'
import { TURNS } from './constants/constanst.js'

function App() {
	const [turn, setTurn] = useState(TURNS.x)
	const [board, setBoard] = useState(Array(9).fill(null))
	const [whoWon, setWinner] = useState(null)
	
	const updateBoard = (index) => {
		//Check if that square is filled
		if(board[index] || whoWon != null) return
		//Update the board
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		//Check the winner
		const winner = checkWinner(newBoard)
		if(winner){ 
			confetti()
			setWinner(winner)
		}else if(checkDraw(newBoard)){
			//Check if the board is fullfilled
			setWinner(true)
		}
		turn == TURNS.x ? setTurn(TURNS.o) : setTurn(TURNS.x)
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.x)
		setWinner(null)
	}

	return (
		<>
			<h1>Ta-Te-Ti</h1>
			<button onClick={resetGame}>Restart Game</button>
			<Board board={board} updateBoard={updateBoard} />
				
			<WinnerPop whoWon={whoWon} playAgain={resetGame} />
				
			<section className='turns'>
				<Turn isSelected={turn == TURNS.o}>{TURNS.o}</Turn>
				<Turn isSelected={turn == TURNS.x}>{TURNS.x}</Turn>
			</section>
		</>
	)
}

export default App