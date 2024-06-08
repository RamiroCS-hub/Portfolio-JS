/* eslint-disable react/prop-types */
//import { useState } from 'react'
import { useState } from 'react'
import './App.css'

const TURNS = {
	x: 'x',
	o: 'o'
}
const WINNER = [[0,4,8], [2,4,6]]
for (let i=0; i<3; i++){
	WINNER.push([i, i+3, i+6])
}
for (let i=0; i<7; i+=3){
	WINNER.push([i, i+1, i+2])
}

const Square = ({ children, updateBoard, index }) => {
	const handleClick= () => {
		updateBoard(index)
	}
	return (
		<div onClick={handleClick} className='square'>{children}</div>
	)
}
const Turn = ({children, isSelected}) => {
	const className = isSelected ? 'turns actualTurn' : 'turns'
	
	return(
		<h2 className={className}>{children}</h2>
	)
}

function App() {
	const [turn, setTurn] = useState('x')
	const [board, setBoard] = useState(Array(9).fill(null))
	
	const updateBoard = (index) => {
		if(board[index]) return
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		turn == TURNS.x ? setTurn(TURNS.o) : setTurn(TURNS.x)
	}

	return (
		<>
			<h1>Ta-Te-Ti</h1>
			<section className='board'>
				{
					board.map((_, index) => {
						return (<Square updateBoard={updateBoard} key={index} index={index} >{_}</Square>)
					})
				}
			</section>
			<section className='turns'>
				<Turn isSelected={turn == TURNS.o}>{TURNS.o}</Turn>
				<Turn isSelected={turn == TURNS.x}>{TURNS.x}</Turn>
			</section>
		</>
	)
}

export default App