import _styles from './_header.module.scss';

export default ({children, ...props}) => {
	
	return (
		<header enigma-ui-layout="header" {...props}>
			{children}
		</header>
	);
}

