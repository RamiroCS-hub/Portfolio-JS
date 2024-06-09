import { Square } from "./Square"
import PropTypes from 'prop-types'

export const Board = ({board, updateBoard}) => {
  return (
  <section className='board'>
    {
      board.map((_, index) => {
        return (<Square updateBoard={updateBoard} key={index} index={index} >{_}</Square>)
      })
    }
  </section>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  updateBoard: PropTypes.func
}