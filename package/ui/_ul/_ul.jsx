import _styles from './_ul.module.scss';

export default ({ children, row, width = "100%", height = "100%", gap = 10, m = 0, p = 0, ...props }) => {
	
	const listProps = {
		style: {
			margin: m,
			padding: p,
			flexDirection: row ? "row" : '',
			gap,
			height,
			width
		},
		...props
	} 

	return (
		<ul enigma-ui="list" {...listProps}>
			{children}
		</ul>
	);
}

