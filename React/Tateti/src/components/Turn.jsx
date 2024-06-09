export const Turn = ({children, isSelected}) => {
	const className = isSelected ? 'turns actualTurn' : 'turns'
	
	return(
		<h2 className={className}>{children}</h2>
	)
}