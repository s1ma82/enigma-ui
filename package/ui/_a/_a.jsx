import _styles from './_a.module.scss';

export default ({ href = "", title = null, Route = null, decor, children, ...props }) => {
	const linkProps = {
		href,
		class: decor ? _styles.decor : '',
		...props
	}
	 
	if (title) linkProps.title = title
	
		
	return Route !== null ? (
			<Route
				enigma-ui="link"
				{...linkProps}
			>
				{children}
			</Route>
		) : (
			<a
				enigma-ui="link"
				{...linkProps}
			>
				{children}
			</a>
		)
}