import _styles from './_nav.module.scss';

export default ({children, ...props}) => {
	
	return (
		<nav enigma-ui-layout="nav" {...props}>
			{children}
		</nav>
	);
}

