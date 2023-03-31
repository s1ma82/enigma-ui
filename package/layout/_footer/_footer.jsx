import _styles from './_footer.module.scss';

export default ({children, ...props}) => {
	
	return (
		<footer enigma-ui-layout="footer" {...props}>
			{children}
		</footer>
	);
}

