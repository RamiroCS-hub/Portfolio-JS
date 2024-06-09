const WINNER = [[0,4,8], [2,4,6]]
for (let i=0; i<3; i++){
	WINNER.push([i, i+3, i+6])
}
for (let i=0; i<7; i+=3){
	WINNER.push([i, i+1, i+2])
}
export default WINNER