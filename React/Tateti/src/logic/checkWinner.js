import WINNER from './winnerConvos.js'

export const checkWinner = (newBoard) => {
  for(let combo of WINNER){
    const [a, b, c] = combo
    if(newBoard[a] && 
      newBoard[a] === newBoard[b] && 
      newBoard[b] === newBoard[c])return newBoard[a]
  }
  return null
}
