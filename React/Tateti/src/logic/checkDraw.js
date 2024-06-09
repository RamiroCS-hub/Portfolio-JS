export const checkDraw = (newBoard) => {
  return newBoard.every(square => square != null)
}