import _styles from './_btn.module.scss';

export default ({children, ...props}) => {
	
	return (
		<button enigma-ui="btn" {...props}>
			{children}
		</button>
	);
}

 